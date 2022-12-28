const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppSyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppSyncID}-${env}`;
const UserFeedTableName = `UserFeedPost-${AppSyncID}-${env}`;
const PostTableName = `Posts-${AppSyncID}-${env}`;

const handle = async ({ eventName, dynamodb }) => {
  console.log(dynamodb.NewImage.followeeID.S)
  console.log(dynamodb.NewImage.followerID.S)
  const followeeID = dynamodb.NewImage.followeeID.S;
  const followerID = dynamodb.NewImage.followerID.S;

  if (eventName === "INSERT") {
    await addFolloweesPostsToUserFeed(followerID, followeeID);
  } else if (
    eventName === "MODIFY" &&
    !dynamodb.OldImage._delete?.BOOL &&
    !!dynamodb.NewImage._deleted?.BOOL
  ) {
  }
};

const addFolloweesPostsToUserFeed = async (followeeID) => {
  const posts = await getAllPostbyUserId(followeeID);
  console.log(`Adding ${posts.length} posts to User feed`, posts);
};
const getAllPostbyUserId = async (userID) => {
  const params = {
    TableName: PostTableName,
    IndexName: "byUser",
    FilterExpression: "attribute_not_exists(#deleted)",
    KeyConditionExpression: "userID= :userID",
    ExpressionAttributeValues: {
      ":userID": userID,
    },
    ExpressionAttributeNames: {
      "#deleted": "_deleted",
    },
  };

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log(e);
  }
};

module.exports = handle;
