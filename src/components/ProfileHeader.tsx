
import { View, Text, StyleSheet, Image, } from 'react-native'
import React, { useContext } from 'react'
import Buttons from './Buttons'
import { useNavigation } from '@react-navigation/native'
import {Auth} from 'aws-amplify'
import { User } from '../API'
import { DEFAULT_USER_IMAGE } from '../config'
import { AuthContext } from '../context/AuthContext'


interface IProfHeader{
  user?:User
}


const ProfileHeader = ({user}:IProfHeader,) => {
  
   const navigation= useNavigation();
  const {userId}=useContext(AuthContext);
   
  navigation.setOptions({title:user?.username || "Profile"})

 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={{uri:user?.image || DEFAULT_USER_IMAGE}}
        style={styles.image}
        />

        <View style={styles.txtArea}>
          <Text style={styles.number}>{user?.Posts?.items.length}</Text>
          <Text style={styles.title}>Posts</Text>
        </View>
        <View style={styles.txtArea}>
          <Text style={styles.number}>{user?.nOfFollowers || 0}</Text>
          <Text style={styles.title}>Followers</Text>
        </View>
        <View style={styles.txtArea}>
          <Text style={styles.number}>{user?.nOfFollowing || 0}</Text>
          <Text style={styles.title}>Following</Text>
        </View>
      </View>
      <View>
        
      <Text style={styles.username}>{user?.username || user?.name}</Text>

      <Text style={styles.bio}
      numberOfLines={3}
      >{user?.bio}</Text>
      </View>
      {userId==user?.id && (<View style={{flexDirection:"row"}}>
      <Buttons 
      text='Edit Profile'
      onPress={()=>navigation.navigate("EditProfile")}
      inline
      />
      <Buttons
    text='Sign out'
    onPress={()=>Auth.signOut()}
    inline
    />
      </View> )}
      
      </View>
  )
}
const styles =  StyleSheet.create({
  container:{
// flex:1,
// padding:"5%"
  },
  header:{
    flexDirection:"row",
    // padding:"2%",
    alignItems:"center",
    justifyContent:"space-between",
  },
  image:{
    width:"30%",
    aspectRatio:1,
    borderRadius:50
  },
  number:{
    color:"black",
    fontWeight:"bold",
    fontSize:16
  },
  title:{
    color:"black",
    fontSize:16,
    fontWeight:"300"
  },
  txtArea: {
    alignItems:"center"
  },
  username:{
    color:"black",
    fontWeight:"bold",
    fontSize:15
  },bio:{
  color:"black",
  
  },
  btn_header:{
    marginVertical:"4%",
    flexDirection:"row",
    alignItems:"center",
    // justifyContent:"space-evenly"
  },
  btn:{
    backgroundColor:"white",
    padding:"3%",
    borderRadius:16,
    elevation:20,
    marginHorizontal:"10%"
  }
})

export default ProfileHeader