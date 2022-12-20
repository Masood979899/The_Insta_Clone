/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentsByPostId = /* GraphQL */ `
  subscription OnCreateCommentsByPostId($postsID: ID!) {
    onCreateCommentsByPostId(postsID: $postsID) {
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
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes($filter: ModelSubscriptionLikesFilterInput) {
    onCreateLikes(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes($filter: ModelSubscriptionLikesFilterInput) {
    onUpdateLikes(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes($filter: ModelSubscriptionLikesFilterInput) {
    onDeleteLikes(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onCreateComments(filter: $filter) {
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
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onUpdateComments(filter: $filter) {
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
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
    onDeleteComments(filter: $filter) {
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
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
