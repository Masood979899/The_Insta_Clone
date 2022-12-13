import { gql } from "@apollo/client";

export const likesForPostByUser = gql `
  query LikesForPostByUser(
    $postsID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LikesForPostByUser(
      postsID: $postsID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        Posts{
          id
          nOfLikes
          Likes{
            items{
              id
              _deleted
              _version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
        }

      }
      nextToken
      startedAt
    }
  }
`;