import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { PostLikeRoutProp } from '../../types/types'
import { useQuery } from '@apollo/client'
import { LikesForPostByUserQuery, LikesForPostByUserQueryVariables } from '../../API'
import { likesForPostByUser } from './queries'
import ApiErrorMessage from '../ApiErrorMessage'
import UserItem from '../../components/UserItem'

const PostLikeScreen = () => {
  
    const route= useRoute<PostLikeRoutProp>()
    const {id}=route.params;
   
    
    const {data,loading, error, refetch}=useQuery<LikesForPostByUserQuery,LikesForPostByUserQueryVariables>(likesForPostByUser,{variables:{postsID:id}})
    if(loading){
        return <ActivityIndicator/>
    }
    if(error){
        return(
            <ApiErrorMessage title="Error fetching Likes" message={error.message}/>
        )
    }
    const likes=data?.LikesForPostByUser?.items.filter(like=> !like?._deleted)||[];

    return (
    <FlatList
    data={likes}
    renderItem={({item})=><UserItem data={item?.User} />}
    onRefresh={()=>refetch()}
    refreshing={loading}
    />
  )
}

export default PostLikeScreen