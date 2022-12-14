import { gql } from "@apollo/client";

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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

