// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments, User, Posts, Likes } = initSchema(schema);

export {
  Comments,
  User,
  Posts,
  Likes
};