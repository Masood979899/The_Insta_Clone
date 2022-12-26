import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { userFollowings } from './queries'
import ApiErrorMessage from '../ApiErrorMessage'
import {  UserFollowingsQuery, UserFollowingsQueryVariables } from '../../API'
import UserItem from '../../components/UserItem'


interface UserFollowingScreenProps{
    userId:string
    }


const UserFollowingScreen = ({userId}:UserFollowingScreenProps) => {
  
const {data,loading, error, refetch}=useQuery<UserFollowingsQuery,UserFollowingsQueryVariables>(userFollowings,{variables:{followerID:userId}})

if(loading){
    return <ActivityIndicator/>
  }
  
  if(error){
      return(
        <ApiErrorMessage title='Error while user Followings' message={error.message} onRetry={refetch}/>
      )
  }

const user = data?.userFollowings?.items.filter(i=>!i?._deleted).map(i=>i?.Followee)||[];

  console.log(user)
    return (
    <View>
     <FlatList
        data={user}
        renderItem={({ item }) => item && <UserItem data={item}  />
        }
        onRefresh={()=>refetch()}
        refreshing={loading}
      />
    </View>
  )
}

export default UserFollowingScreen