const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const UserFeedPostTableName = `UserFeedPost-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const PostTableName = `Posts-${AppsyncID}-${env}`; // TableName-AppsyncID-env

const BATCH_SIZE = 25;

const handle = async ({eventName, dynamodb}) => {
  // handle user follow event

  const followeeID = dynamodb.NewImage.followeeID.S;
  const followerID = dynamodb.NewImage.followerID.S;

  if (eventName === 'INSERT') {
    // Add all the followeeID's posts to the user (followerID) feed
    await addFolloweesPostsToUserFeed(followerID, followeeID);
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL &&
    !!dynamodb.NewImage._deleted?.BOOL
  ) {
    // Remove all the followeeID's posts from the user (followerID) feed
    await removeUserFeedPostsByFolloweeId(followerID, followeeID);
  }
};

const removeUserFeedPostsByFolloweeId = async (followerID, followeeID) => {
  // get all UserFeedPosts on followerID's feed created by the foloweeID

  const userFeedPosts = await getUserFeedPosts(followerID, followeeID);
  console.log(
    `Deleting ${userFeedPosts.length} posts from the user feed. `,
    userFeedPosts,
  );

  // batch delete them from the database
  for (let i = 0; i < userFeedPosts.length; i += BATCH_SIZE) {
    const chunk = userFeedPosts.slice(i, i + BATCH_SIZE);
    await removeUserFeedPosts(chunk);
  }
};

const getUserFeedPosts = async (followerID, followeeID) => {
  // query DDB
  const params = {
    TableName: UserFeedPostTableName,
    IndexName: 'byUser',
    KeyConditionExpression: 'userID = :userID',
    FilterExpression:
      'attribute_not_exists(#deleted) AND postOwnerID = :postOwnerID',
    ExpressionAttributeValues: {
      ':userID': followerID,
      ':postOwnerID': followeeID,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const addFolloweesPostsToUserFeed = async (followerID, followeeID) => {
  // query all the Followee posts
  const posts = await getAllPostsByUserId(followeeID);
  console.log(`Adding ${posts.length} posts to User feed`, posts);

  // add all the posts to the UserFeedPost
  for (let i = 0; i < posts.length; i += BATCH_SIZE) {
    const chunk = posts.slice(i, i + BATCH_SIZE);
    await addPostsToUserFeed(followerID, chunk);
  }
};

const addPostsToUserFeed = async (userID, posts) => {
  const params = {
    RequestItems: {
      [UserFeedPostTableName]: posts.map(post =>
        generatePutRequest(post, userID),
      ),
    },
  };

  try {
    await docClient.batchWrite(params).promise();
  } catch (e) {
    console.log(e);
  }
};

const removeUserFeedPosts = async items => {
  const params = {
    RequestItems: {
      [UserFeedPostTableName]: items.map(generateDeleteRequest),
    },
  };

  try {
    await docClient.batchWrite(params).promise();
  } catch (e) {
    console.log(e);
  }
};

const generatePutRequest = (post, userID) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  return {
    PutRequest: {
      Item: {
        id: `${userID}::${post.id}`,
        owner: `${userID}::${userID}`,

        postCreatedAt: post.createdAt,
        postID: post.id,
        postOwnerID: post.userID,

        userID: userID,

        _lastChangedAt: timestamp,
        createdAt: dateStr,
        updatedAt: dateStr,

        _version: 1,
        __typename: 'UserFeedPost',
      },
    },
  };
};

const generateDeleteRequest = userFeedPost => {
  return {
    DeleteRequest: {
      Key: {
        id: userFeedPost.id,
      },
    },
  };
};

const getAllPostsByUserId = async userID => {
  // query DDB
  const params = {
    TableName: PostTableName,
    IndexName: 'byUser',
    KeyConditionExpression: 'userID = :userID',
    FilterExpression: 'attribute_not_exists(#deleted)',
    ExpressionAttributeValues: {
      ':userID': userID,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = handle;