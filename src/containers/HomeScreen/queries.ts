import { gql } from "@apollo/client";



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

export const userFeed = gql `
  query UserFeed(
    $userID: ID!
    $postCreatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeed(
      userID: $userID
      postCreatedAt: $postCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        postCreatedAt
        postOwnerID
        Post {
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
        Comments(limit:3){
          items{
            id
            comment
            _deleted
            User{
              id
              name
              username
              
              
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;