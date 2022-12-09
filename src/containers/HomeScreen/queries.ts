import { gql } from "@apollo/client";


export const listPosts = gql `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        Comments{
          items{
            id
            comment
            User{
              id
              name
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;