import { gql } from "@apollo/client";

export const commentsForPostByUser = gql `
query CommentsForPostByUser(
  $postsID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentsFilterInput
  $limit: Int
  $nextToken: String
) {
  CommentsForPostByUser(
    postsID: $postsID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
      items {
        id
        comment
        userID
        postsID
        User{
            id
            name
            username
            image
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
      nextToken
      startedAt
    }
  }
`;



export const deleteComments = gql `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
    }
  }
`;