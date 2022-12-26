import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { TabRouter } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { UserFollowersQuery, UserFollowersQueryVariables } from '../../API'
import { userFollowers } from './queries'
import ApiErrorMessage from '../ApiErrorMessage'
import UserItem from '../../components/UserItem'


interface UserFollowersScreenProps{
userId:string
}

const UserFollowersScreen = ({userId}:UserFollowersScreenProps) => {
 
const {data, loading, error,refetch}=useQuery<UserFollowersQuery, UserFollowersQueryVariables>(userFollowers,{variables:{followeeID:userId}})
 

if(loading){
  return <ActivityIndicator/>
}

if(error){
    return(
      <ApiErrorMessage title='Error while user Followers' onRetry={refetch}/>
    )
}
const user = data?.userFollowers?.items.filter(i=>!i?._deleted).map(i=>i?.Follower)||[];

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

export default UserFollowersScreen