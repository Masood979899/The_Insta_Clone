import { gql } from "@apollo/client";

export const createPosts = gql `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
      id
      description
      image
      images
      video
      nOfComments
      nOfLikes
      User {
        id
        nOfPosts
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;