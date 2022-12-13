import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import Input from "../../components/Input";
import {  useQuery } from "@apollo/client";
import {
  CommentsByPostsIDQuery,
  CommentsByPostsIDQueryVariables,
} from "../../API";
import { AuthContext } from "../../context/AuthContext";
import { CommentsRouteProp } from "../../types/types";
import { useRoute } from "@react-navigation/native";
import { commentsForPostByUser } from "./queries";
import ApiErrorMessage from "../ApiErrorMessage";
import Comments from "../../components/Comments";

const CommentScreen = () => {
  const { userId } = useContext(AuthContext);
  const route = useRoute<CommentsRouteProp>();
  const { postId } = route.params;

  const { data, loading, error,refetch } = useQuery<
    CommentsByPostsIDQuery,
    CommentsByPostsIDQueryVariables
  >(commentsForPostByUser, { variables: { postsID: postId } });

if(loading){
  return <ActivityIndicator/>
}
if(error){
  return(
    <ApiErrorMessage title="Error while fetching Comments " onRetry={refetch}/>
  )
}
const comments= data?.CommentsForPostByUser?.items.filter((comment:any)=>!comment?._deleted)
console.log("hello",comments)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comments data={item} includeDetail />}
        onRefresh={refetch}
        refreshing={loading}
      />
      <Input postId={postId} />
    </View>
  );
};

export default CommentScreen;
