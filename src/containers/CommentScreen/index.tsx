import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import Input from "../../components/Input";
import {  useQuery } from "@apollo/client";
import {
  CommentsByPostsIDQuery,
  CommentsByPostsIDQueryVariables,
  ModelSortDirection,
} from "../../API";
import { AuthContext } from "../../context/AuthContext";
import { commentsForPostByUser } from "./queries";
import ApiErrorMessage from "../ApiErrorMessage";
import Comments from "../../components/Comments";

const CommentScreen = ({route}) => {
  const { userId } = useContext(AuthContext);
  const {postId}=route.params;

  const { data, loading, error,refetch,fetchMore } = useQuery<
    CommentsByPostsIDQuery,
    CommentsByPostsIDQueryVariables
  >(commentsForPostByUser, { variables: { postsID: postId, sortDirection:ModelSortDirection.DESC,limit:3 } });

const [isFetchingMore, setIsFetchingMore]=useState(false)
const nextToken = data?.CommentsForPostByUser?.nextToken;

const loadMore=async()=>{

  if(!nextToken || isFetchingMore){
    return;
  }
  setIsFetchingMore(true)

  await fetchMore({variables:{nextToken}})
  setIsFetchingMore(false)
}

if(loading){
  return <ActivityIndicator/>
}
if(error){

  return(
    <ApiErrorMessage title="Error while fetching Comments " onRetry={refetch}/>
  )
}

const comments= data?.CommentsForPostByUser?.items.filter((comment:any)=>!comment?._deleted)

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={comments}
        inverted
        renderItem={({ item }) => 
        
          <Comments data={item} includeDetail />
        
        }
        ListFooterComponent={()=><Text onPress={loadMore} style={{padding:"4%"}}>Load more</Text>}

        onRefresh={refetch}
        refreshing={loading}
      />
      <Input postId={postId} />
    </View>
  );
};

export default CommentScreen;
