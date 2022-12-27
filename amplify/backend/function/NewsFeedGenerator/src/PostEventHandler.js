
 const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();


const env = process.env.ENV;
const AppSyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppSyncID}-${env}`;
const UserFeedTableName = `UserFeedPost-${AppSyncID}-${env}`;

const handle = async record =>{
     
    if(record.eventName !== 'INSERT'){
        return;
    }

    const userId = record.dynamodb.NewImage.userID.S;
    const followers = await  getFollowers(userId);
    console.log(followers);

   await Promise.all( followers.map(follower => pushPostToUserFeed(record.dynamodb.NewImage.userID, follower.userName, follower)))

};
    const pushPostToUserFeed = async (postImage, userID)=>{

        const date = new Date();
        const dateStr = date.toISOString();
        const timestamp = date.getTime();
      
        const Item = {
          id:`${userID}::${postImage.id.S}`,
          postCreatedAt: '',
          postID:postImage.id.S,
          postOwnerID: postImage.userID.S,
          userID,
          owner: `${userID}::${userID}`,
          createdAt: dateStr,
          updatedAt: dateStr,
          _lastChangedAt: timestamp,
          _version: 1,
          _typename: 'UserFeedPost',
        };
        console.log(Item)

        const params = {
          TableName:UserFeedTableName,
          Item,
        };
        try {
          await docClient.put(params).promise();
        } catch (e) {
          console.log(e);
        }

    }

const getFollowers = async (userId) =>{
const params={
    TableName:UserFollowTableName,
    IndexName:'byFollowee',
    FilterExpression:"attribute_not_exists(#delete",
    KeyConditionExpression:"followeeID= :followeeID",
    ExpressionAttributeValues:{
        ":followeeID":userId,
    },
    ExpressionAttributeNames:{
        "#deleted":"_deleted",
    }
}

try {
   const result = await docClient.query(params).promise();
    return result.Items;

} catch (e) {
    console.log(e)
}

};


module.exports =handle;