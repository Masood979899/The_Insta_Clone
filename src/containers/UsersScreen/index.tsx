import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import users from '../../data/users.json'
import UserItem from '../../components/UserItem'
import { useQuery } from '@apollo/client'
import { listUsers } from './queries'
import ApiErrorMessage from '../ApiErrorMessage'




const UsersScreen = () => {

  const {data,error,loading,refetch}=useQuery(listUsers)
  

if(loading){
  return<ActivityIndicator/>
}
if(error){
  return(
    <ApiErrorMessage
    title="Something went wrong"
    message={error.message}
    />
  )
}

const users = data?.listUsers?.items ||[];


 
  return (
    <View style={styles.container}>
      <FlatList
      data={users}
      refreshing={loading}
      onRefresh={()=>refetch()}
      renderItem={({item})=>(item &&
        <UserItem
        data={item}
        />
        
      )}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
}
})


export default UsersScreen