import { gql } from "@apollo/client";

export const updatePosts = gql `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
      id
      nOfLikes 
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;