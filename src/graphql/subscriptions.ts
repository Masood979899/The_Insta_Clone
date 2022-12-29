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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes(
    $filter: ModelSubscriptionLikesFilterInput
    $owner: String
  ) {
    onCreateLikes(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes(
    $filter: ModelSubscriptionLikesFilterInput
    $owner: String
  ) {
    onUpdateLikes(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes(
    $filter: ModelSubscriptionLikesFilterInput
    $owner: String
  ) {
    onDeleteLikes(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments(
    $filter: ModelSubscriptionCommentsFilterInput
    $owner: String
  ) {
    onCreateComments(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments(
    $filter: ModelSubscriptionCommentsFilterInput
    $owner: String
  ) {
    onUpdateComments(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments(
    $filter: ModelSubscriptionCommentsFilterInput
    $owner: String
  ) {
    onDeleteComments(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts(
    $filter: ModelSubscriptionPostsFilterInput
    $owner: String
  ) {
    onCreatePosts(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts(
    $filter: ModelSubscriptionPostsFilterInput
    $owner: String
  ) {
    onUpdatePosts(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts(
    $filter: ModelSubscriptionPostsFilterInput
    $owner: String
  ) {
    onDeletePosts(filter: $filter, owner: $owner) {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
      Followers {
        items {
          id
          followerID
          followeeID
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
      Followee {
        items {
          id
          followerID
          followeeID
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
      Followers {
        items {
          id
          followerID
          followeeID
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
      Followee {
        items {
          id
          followerID
          followeeID
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
      Followers {
        items {
          id
          followerID
          followeeID
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
      Followee {
        items {
          id
          followerID
          followeeID
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
export const onCreateUserFollow = /* GraphQL */ `
  subscription OnCreateUserFollow(
    $filter: ModelSubscriptionUserFollowFilterInput
    $owner: String
  ) {
    onCreateUserFollow(filter: $filter, owner: $owner) {
      id
      followerID
      followeeID
      Follower {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
      Followee {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserFollow = /* GraphQL */ `
  subscription OnUpdateUserFollow(
    $filter: ModelSubscriptionUserFollowFilterInput
    $owner: String
  ) {
    onUpdateUserFollow(filter: $filter, owner: $owner) {
      id
      followerID
      followeeID
      Follower {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
      Followee {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserFollow = /* GraphQL */ `
  subscription OnDeleteUserFollow(
    $filter: ModelSubscriptionUserFollowFilterInput
    $owner: String
  ) {
    onDeleteUserFollow(filter: $filter, owner: $owner) {
      id
      followerID
      followeeID
      Follower {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
      Followee {
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
        Followers {
          nextToken
          startedAt
        }
        Followee {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUserFeedPost = /* GraphQL */ `
  subscription OnCreateUserFeedPost(
    $filter: ModelSubscriptionUserFeedPostFilterInput
    $owner: String
  ) {
    onCreateUserFeedPost(filter: $filter, owner: $owner) {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
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
export const onUpdateUserFeedPost = /* GraphQL */ `
  subscription OnUpdateUserFeedPost(
    $filter: ModelSubscriptionUserFeedPostFilterInput
    $owner: String
  ) {
    onUpdateUserFeedPost(filter: $filter, owner: $owner) {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
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
export const onDeleteUserFeedPost = /* GraphQL */ `
  subscription OnDeleteUserFeedPost(
    $filter: ModelSubscriptionUserFeedPostFilterInput
    $owner: String
  ) {
    onDeleteUserFeedPost(filter: $filter, owner: $owner) {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
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
