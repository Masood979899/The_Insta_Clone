/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLikes = /* GraphQL */ `
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
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
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes(
    $input: UpdateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    updateLikes(input: $input, condition: $condition) {
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
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
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
export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
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
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
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
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
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
export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
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
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
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
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
