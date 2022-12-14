import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface IVideoPlayer{
    uri:"string",
    paused:boolean
}


const VideoPlayer = ({uri,paused}:IVideoPlayer) => {
  
  
  const [muted,setMuted]=useState(true)
  
  return (
    <View>
      <Video
      source={{uri}}
      style={styles.video}
      resizeMode="cover"
      muted={muted}
      repeat={true}
      paused={paused}
      />
      <TouchableOpacity
      onPress={()=>setMuted(!muted)}
      style={styles.mute_button}
      >
        <Ionicons
        name={muted?"volume-mute":"ios-volume-medium-outline"}
        color={"white"}
       
        size={24}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  video: {
    width:"100%",
    aspectRatio:4/3
},
mute_button:{
    position:"absolute",
    padding:"1%",
    bottom:"4%",
    right:"3%",
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
 
    
}
})
export default VideoPlayer