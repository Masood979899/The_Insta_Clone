/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLikes = /* GraphQL */ `
  query GetLikes($id: ID!) {
    getLikes(id: $id) {
      id
      untitledfield
      userID
      postsID
      User {
        id
        name
        email
        username
        bio
        website
        image
        nOfPosts
        nOfFollowers
        nOfFollowing
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Posts {
        id
        createdAt
        type
        description
        image
        images
        video
        nOfComments
        nOfLikes
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        untitledfield
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        untitledfield
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        untitledfield
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const likesForPostByUser = /* GraphQL */ `
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
        untitledfield
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      createdAt
      comment
      userID
      postsID
      User {
        id
        name
        email
        username
        bio
        website
        image
        nOfPosts
        nOfFollowers
        nOfFollowing
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Posts {
        id
        createdAt
        type
        description
        image
        images
        video
        nOfComments
        nOfLikes
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        comment
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        comment
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        comment
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const commentsForPostByUser = /* GraphQL */ `
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
        createdAt
        comment
        userID
        postsID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Posts {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      createdAt
      type
      description
      image
      images
      video
      nOfComments
      nOfLikes
      User {
        id
        name
        email
        username
        bio
        website
        image
        nOfPosts
        nOfFollowers
        nOfFollowing
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      userID
      Likes {
        items {
          id
          untitledfield
          userID
          postsID
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postsID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        description
        image
        images
        video
        nOfComments
        nOfLikes
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
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
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        type
        description
        image
        images
        video
        nOfComments
        nOfLikes
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
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
export const postsByDate = /* GraphQL */ `
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
        createdAt
        type
        description
        image
        images
        video
        nOfComments
        nOfLikes
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
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
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        type
        description
        image
        images
        video
        nOfComments
        nOfLikes
        User {
          id
          name
          email
          username
          bio
          website
          image
          nOfPosts
          nOfFollowers
          nOfFollowing
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      username
      bio
      website
      image
      nOfPosts
      nOfFollowers
      nOfFollowing
      Posts {
        items {
          id
          createdAt
          type
          description
          image
          images
          video
          nOfComments
          nOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postsID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          untitledfield
          userID
          postsID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        username
        bio
        website
        image
        nOfPosts
        nOfFollowers
        nOfFollowing
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        username
        bio
        website
        image
        nOfPosts
        nOfFollowers
        nOfFollowing
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
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
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        username
        bio
        website
        image
        nOfPosts
        nOfFollowers
        nOfFollowing
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
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