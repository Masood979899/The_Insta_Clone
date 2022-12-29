import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input";
import {  useQuery, useSubscription } from "@apollo/client";
import {
  Comments as CommentType,
  CommentsForPostByUserQuery,
  CommentsForPostByUserQueryVariables,
  ModelSortDirection,
  OnCreateCommentsByPostIdSubscription,
  OnCreateCommentsByPostIdSubscriptionVariables,
} from "../../API";
import { AuthContext } from "../../context/AuthContext";
import { commentsForPostByUser, onCreateCommentsByPostId } from "./queries";
import ApiErrorMessage from "../ApiErrorMessage";
import Comments from "../../components/Comments";
import { isNetworkRequestInFlight } from "@apollo/client/core/networkStatus";

const CommentScreen = ({route}) => {
  const [newComment, setNewComment] = useState<CommentType[]>([])
  const {postId}=route.params;

  const { data, loading, error,refetch,fetchMore } = useQuery<
    CommentsForPostByUserQuery,
    CommentsForPostByUserQueryVariables
  >(commentsForPostByUser, { variables: { postsID: postId, sortDirection:ModelSortDirection.DESC,limit:10 } });

  const { data: commentsData } = useSubscription<
  OnCreateCommentsByPostIdSubscription,
  OnCreateCommentsByPostIdSubscriptionVariables
>(onCreateCommentsByPostId, { variables: { postsID: postId } });
console.log(commentsData);

const [isFetchingMore, setIsFetchingMore]=useState(false)

useEffect(() => {
  if(commentsData?.onCreateCommentsByPostId){
      setNewComment(existingNewComment => [
        commentsData?.onCreateCommentsByPostId as CommentType, ...existingNewComment
      ])}
  }, [commentsData])

const nextToken = data?.CommentsForPostByUser?.nextToken;0



const loadMore=async()=>{

  if(!nextToken || isFetchingMore){
    return;
  }
  setIsFetchingMore(true)

  await fetchMore({variables:{nextToken}})
  setIsFetchingMore(false)
}
const isNew=(comments:CommentType)=>{
  return newComment.some(c => c.id === comments?.id)
}

if(loading){
  return <ActivityIndicator/>
}
if(error){

  return(
    <ApiErrorMessage title="Error while fetching Comments " onRetry={refetch}/>
  )
}

const comments= data?.CommentsForPostByUser?.items.filter((comment:any)=>!comment?._deleted)||[];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[...newComment, ...comments]}
        inverted
        renderItem={({ item }) => 
        item&&(  
          <Comments data={item} includeDetail isNew={isNew(item)}  />
        )
        }
        // ListFooterComponent={()=><Text onPress={loadMore} style={{padding:"4%"}}>Load more</Text>}
        onEndReached={()=>loadMore()}
        onRefresh={refetch}
        refreshing={loading}
        
      />
      <Input postId={postId} />
    </View>
  );
};

export default CommentScreen;
