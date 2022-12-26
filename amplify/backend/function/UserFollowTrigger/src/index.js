/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const records of event.Records){
    await handleEvent(records);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleEvent = async ({eventID, eventName, dynamodb}) => {
  console.log(record.eventID);
  console.log(record.eventName);
  console.log('DynamoDB Record: %j', record.dynamod);

  if(eventName === 'INSERT'){
    await increaseUserField(dynamodb.NewImage.followeeID.S, 'nOfFollowers',1)
    await increaseUserField(dynamodb.NewImage.followeeID.S, 'nOfFollowings',1)
  }else if(eventName === 'MODIFY' && !dynamodb.OldImage._delete?.BOOL && !!dynamodb.NewImage._deleted?.BOOL){
    
    await increaseUserField(dynamodb.NewImage.followeeID.S, 'nOfFollowers', -1)
    await increaseUserField(dynamodb.NewImage.followeeID.S, 'nOfFollowings', -1)
    
  }

const increaseUserField = async (userId, field, value)=>{
  
  const params = {
    TableName : UserTableName,
    Key:{id:userId},
    UpdateExpression:"ADD #field :inc, #version :version_inc" ,
    ExpressionAttributeValues:{":inc":value, ':version_inc':1},
    ExpressionAttributeNames:{'#field':field, '#version':'_version'},
  }
  
  try {
    await docClient.update(params).promise();
  } catch (e) {
    console.log(e)
  }
}

};