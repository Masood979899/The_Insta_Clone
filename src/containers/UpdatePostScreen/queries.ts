import { gql } from "@apollo/client";

export const getPosts = gql `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;