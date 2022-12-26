
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useContext } from 'react'
import Buttons from './Buttons'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { CreateUserFollowMutation, CreateUserFollowMutationVariables, User, UserFollowingsQuery, UserFollowingsQueryVariables } from '../API'
import { DEFAULT_USER_IMAGE } from '../config'
import { AuthContext } from '../context/AuthContext'
import UserImage from './UserImage'
import { useMutation, useQuery } from '@apollo/client'
import { createUserFollow, userFollowings } from '../containers/ProfileScreen/queries'


interface IProfHeader {
  user?: User
}


const ProfileHeader = ({ user }: IProfHeader,) => {

  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);



  const { data: userFollowingData } = useQuery<UserFollowingsQuery, UserFollowingsQueryVariables>(userFollowings, { variables: {followerID:userId, followeeID:{eq: user?.id}} })

  const [doFollow] = useMutation<CreateUserFollowMutation, CreateUserFollowMutationVariables>(createUserFollow, { variables: {input:{ followeeID:user?.id, followerID: userId } },refetchQueries:["UserFollowings"]})
  navigation.setOptions({ title: user?.username || "Profile" })



  console.log(userFollowingData)

const userFollowObject = userFollowingData?.userFollowings?.items[0];


  const onFollowPress = async () => {
    try {
      doFollow();
    } catch (e) {
      Alert.alert("something went wrong with userFollow", (e as Error).message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <UserImage imageKey={user?.image || undefined} width={"30%"} />

        {/* <Image
        source={{uri:user?.image || DEFAULT_USER_IMAGE}}
        style={styles.image}
        /> */}

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
      {userId == user?.id ? (<View style={{ flexDirection: "row" }}>
        <Buttons
          text='Edit Profile'
          onPress={() => navigation.navigate("EditProfile")}
          inline
        />
        <Buttons
          text='Sign out'
          onPress={() => Auth.signOut()}
          inline
        />
      </View>) : <Buttons
        text={!!userFollowObject?'Unfollow': 'Follow'}
        onPress={onFollowPress}
        inline
      />}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex:1,
    // padding:"5%"
  },
  header: {
    flexDirection: "row",
    // padding:"2%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 50
  },
  number: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "300"
  },
  txtArea: {
    alignItems: "center"
  },
  username: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15
  }, bio: {
    color: "black",

  },
  btn_header: {
    marginVertical: "4%",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-evenly"
  },
  btn: {
    backgroundColor: "white",
    padding: "3%",
    borderRadius: 16,
    elevation: 20,
    marginHorizontal: "10%"
  }
})

export default ProfileHeader