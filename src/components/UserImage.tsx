import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { postsByDate } from '../graphql/queries'
import { Storage } from 'aws-amplify'
import { DEFAULT_USER_IMAGE } from '../config'


interface IUserImage{
    imageKey?:string,
    width?:string

}

const UserImage = ({imageKey,width}:IUserImage) => {
  

const [imageUri, setImageUri]=useState<string | null>(null);

  useEffect(() => {
    if (imageKey){
        Storage.get(imageKey).then(setImageUri)
    }
  }, [imageKey])
  
  
  
    return (
        <Image
        source={{ uri: imageUri  ||DEFAULT_USER_IMAGE}}
        style={[styles.avatar,{width}]}
      />
  )
}


const styles= StyleSheet.create({
    // avatar: {
    //     width: "30%",
    //     aspectRatio: 1,
    //     borderRadius: 100,
    //   },
      avatar: {
        aspectRatio: 1,
        borderRadius: 70,
        alignItems: "center",
        marginRight: "2%",
      },
})

export default UserImage