import { gql } from "@apollo/client";


export const postsByDate = gql `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        image
        images
        video
        nOfComments
        nOfLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User{
          id
          name
          username
          image
        }
        Comments(limit:2){
          items{
            id
            comment
            _deleted
            User{
              id
              name
              
            }
          }
        }
        Likes{
          items{
            id
            _deleted
            User{
              id
              username
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const deletePosts = gql `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
    }
  }
`;