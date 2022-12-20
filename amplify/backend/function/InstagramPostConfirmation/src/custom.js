/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const TableName = `User-${AppsyncID}-${env}`;

const userExists = async (id) => {
  const params = {
    TableName,
    Key: id,
  };
  try {
    const response = await docClient.get(params).promise();
    return !!response;
  } catch (e) {
    return false;
  }
};

const saveUser = async (user) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    ...user,
    _typename: "User",
    createdAt: dateStr,
    _lastChangedAt: timestamp,
    updatedAt: dateStr,
    _version: 1,
  };
  const params = {
    TableName,
    Item,
  };
  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  console.log("Hey lambda function is working");
  console.log(event);

  if (!event?.request?.userAttributes) {
    console.log("No User data available");
    return;
  }

  const { name, sub, email } = event.request.userAttributes;

  const newUser = {
    id: sub,
    owner:sub,
    name,
    email,
    nOfPosts:0,
    nOfFollowers:0,
    nOfFollowing:0,
  };

  if (!(await userExists(newUser.id))) {
    await saveUser(newUser);
    console.log(`User ${newUser.id} has been saved to database`)
  }
  else{
    console.log(`User${newUser.id} already exists`)
  }
  
  return event;
};
