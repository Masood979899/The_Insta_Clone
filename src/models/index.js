// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments, User, Posts, Likes, UserFollow, UserFeedPost } = initSchema(schema);

export {
  Comments,
  User,
  Posts,
  Likes,
  UserFollow,
  UserFeedPost
};