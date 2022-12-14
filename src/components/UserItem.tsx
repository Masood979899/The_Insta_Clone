import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { isCompositeType } from 'graphql'
import { DEFAULT_USER_IMAGE } from '../config'

interface IUserItem{
data:object
}


const UserItem = ({data}:IUserItem) => {
   

const navigation= useNavigation()

  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate("ProfileScreen",{userId:data?.id})}
    style={styles.container} >
      <Image
      source={{uri:data?.image|| DEFAULT_USER_IMAGE}}
      style={styles.image}
      
      />
      <View>
      <Text style={styles.name}>{data?.name}</Text>  
      <Text style={styles.username}>{data?.username}</Text>
      </View>
      
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

container:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    marginRight:"2%",
    padding:"2%"
},
image:{
    width:"10%"
    ,aspectRatio:1,
    borderRadius:100,
    marginRight:"2%"
},
name:{
    fontSize:16,
    fontWeight:"500",
    color:"black"
},
username:{
    color:"grey"
}
})

export default UserItem