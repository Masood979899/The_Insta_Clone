import { gql } from "@apollo/client";

export const updatePosts = gql `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
      id
      nOfComments 
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const createComments = gql `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
      id
      comment
      userID
      postsID
      Posts{
        id
        nOfComments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User{
        id
        username
        image
        name 
      }     
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const getPosts = gql `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      nOfComments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;