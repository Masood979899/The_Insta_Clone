import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'


const PostUploadScreen = () => {
    const [hasPermission,setHasPermission] =useState<boolean | null>(null)
    useEffect(() => {
     const getPermission = async ()=>{
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
        setHasPermission(
            cameraPermission.status==="granted"&& 
            microphonePermission.status==="granted",
        )
     };
     getPermission();
    }, [])
    
    if (hasPermission==null){
        return<Text>Loading....!!!!</Text>
    }
    if (hasPermission==false){
        return <Text>No Access To the Camera...!!</Text>
    }

  return (
    <View style={styles.container}>
      <Camera
      style={styles.camera}
      />
    </View>
  )
}



const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    // backgroundColor:"black",
    
},
camera:{
    width:"100%",
    aspectRatio:3/4
}
})

export default PostUploadScreen