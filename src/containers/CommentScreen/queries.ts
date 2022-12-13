import { gql } from "@apollo/client";

export const commentsForPostByUser = gql `
  query CommentsForPostByUser(
    $postsID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CommentsForPostByUser(
      postsID: $postsID
      userID: $userID
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