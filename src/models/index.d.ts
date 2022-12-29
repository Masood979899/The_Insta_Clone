import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment?: string | null;
  readonly userID: string;
  readonly postsID: string;
  readonly User?: User | null;
  readonly Posts?: Posts | null;
  readonly updatedAt?: string | null;
}

type LazyComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment?: string | null;
  readonly userID: string;
  readonly postsID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Posts: AsyncItem<Posts | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Comments = LazyLoading extends LazyLoadingDisabled ? EagerComments : LazyComments

export declare const Comments: (new (init: ModelInit<Comments>) => Comments) & {
  copyOf(source: Comments, mutator: (draft: MutableModel<Comments>) => MutableModel<Comments> | void): Comments;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly image?: string | null;
  readonly nOfPosts?: number | null;
  readonly nOfFollowers?: number | null;
  readonly nOfFollowing?: number | null;
  readonly Posts?: (Posts | null)[] | null;
  readonly Comments?: (Comments | null)[] | null;
  readonly Likes?: (Likes | null)[] | null;
  readonly Followers?: (UserFollow | null)[] | null;
  readonly Followee?: (UserFollow | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly image?: string | null;
  readonly nOfPosts?: number | null;
  readonly nOfFollowers?: number | null;
  readonly nOfFollowing?: number | null;
  readonly Posts: AsyncCollection<Posts>;
  readonly Comments: AsyncCollection<Comments>;
  readonly Likes: AsyncCollection<Likes>;
  readonly Followers: AsyncCollection<UserFollow>;
  readonly Followee: AsyncCollection<UserFollow>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly images?: (string | null)[] | null;
  readonly video?: string | null;
  readonly nOfComments: number;
  readonly nOfLikes: number;
  readonly User?: User | null;
  readonly userID: string;
  readonly Likes?: (Likes | null)[] | null;
  readonly Comments?: (Comments | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly images?: (string | null)[] | null;
  readonly video?: string | null;
  readonly nOfComments: number;
  readonly nOfLikes: number;
  readonly User: AsyncItem<User | undefined>;
  readonly userID: string;
  readonly Likes: AsyncCollection<Likes>;
  readonly Comments: AsyncCollection<Comments>;
  readonly updatedAt?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}

type EagerLikes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Likes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly userID: string;
  readonly postsID: string;
  readonly User?: User | null;
  readonly Posts?: Posts | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLikes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Likes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly userID: string;
  readonly postsID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Posts: AsyncItem<Posts | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Likes = LazyLoading extends LazyLoadingDisabled ? EagerLikes : LazyLikes

export declare const Likes: (new (init: ModelInit<Likes>) => Likes) & {
  copyOf(source: Likes, mutator: (draft: MutableModel<Likes>) => MutableModel<Likes> | void): Likes;
}

type EagerUserFollow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFollow, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followerID: string;
  readonly followeeID: string;
  readonly Follower?: User | null;
  readonly Followee?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFollow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFollow, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followerID: string;
  readonly followeeID: string;
  readonly Follower: AsyncItem<User | undefined>;
  readonly Followee: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFollow = LazyLoading extends LazyLoadingDisabled ? EagerUserFollow : LazyUserFollow

export declare const UserFollow: (new (init: ModelInit<UserFollow>) => UserFollow) & {
  copyOf(source: UserFollow, mutator: (draft: MutableModel<UserFollow>) => MutableModel<UserFollow> | void): UserFollow;
}

type EagerUserFeedPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFeedPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly postCreatedAt: string;
  readonly postOwnerID: string;
  readonly Post?: Posts | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFeedPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFeedPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly postCreatedAt: string;
  readonly postOwnerID: string;
  readonly Post: AsyncItem<Posts | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFeedPost = LazyLoading extends LazyLoadingDisabled ? EagerUserFeedPost : LazyUserFeedPost

export declare const UserFeedPost: (new (init: ModelInit<UserFeedPost>) => UserFeedPost) & {
  copyOf(source: UserFeedPost, mutator: (draft: MutableModel<UserFeedPost>) => MutableModel<UserFeedPost> | void): UserFeedPost;
}