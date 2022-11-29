import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import users from '../../data/users.json'
import UserItem from '../../components/UserItem'

const UsersScreen = () => {
    console.log(users)
  return (
    <View style={styles.container}>
      <FlatList
      data={users}

      renderItem={({item})=>(
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