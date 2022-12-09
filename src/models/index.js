// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Likes, User, Posts, Comments } = initSchema(schema);

export {
  Likes,
  User,
  Posts,
  Comments
};