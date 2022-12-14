import { gql } from "@apollo/client";

export const getComments = gql `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;