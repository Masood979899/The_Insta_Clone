import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Alert } from "react-native";
import {
  CreateCommentsMutation,
  CreateCommentsMutationVariables,
  GetPostsQuery,
  GetPostsQueryVariables,
  Posts,
  UpdatePostsMutation,
  UpdatePostsMutationVariables,
} from "../../API";
import { AuthContext } from "../../context/AuthContext";
import { createComments, getPosts, updatePosts } from "./queries";

const useCommentService = (postsId: string) => {
  const { userId } = useContext(AuthContext);

  const {
    data: postData,
    
  } = useQuery<GetPostsQuery, GetPostsQueryVariables>(getPosts, {
    variables: { id: postsId },
  });

  const post = postData?.getPosts;

  const [doUpdatePost] = useMutation<
    UpdatePostsMutation,
    UpdatePostsMutationVariables
  >(updatePosts);

  const [doCreateComment] = useMutation<
    CreateCommentsMutation,
    CreateCommentsMutationVariables
  >(createComments, { refetchQueries: ["CommentsForPostByUser"] });

  const incrementNofComments = (amount: 1 | -1) => {
    if(!post){
        Alert.alert("Failed to load post. Try again later..!!")
    return;
    }
    doUpdatePost({
      variables: {
        input: {
          id: post?.id,
          _version: post?._version,
          nOfComments: post?.nOfComments + amount,
        },
      },
    });
  };
  const onCreateComment = async (addComment: string) => {
    if(!post){
        Alert.alert("Failed to load post. Try again later..!!")
    return;
    }
    try {
      await doCreateComment({
        variables: {
          input: { userID: userId, postsID: post.id, comment: addComment },
        },
      });
      incrementNofComments(1)
    } catch (e) {
      Alert.alert("Error", (e as Error).message);
    }
  };

  return {
    
    onCreateComment,
  };
};
export default useCommentService;
