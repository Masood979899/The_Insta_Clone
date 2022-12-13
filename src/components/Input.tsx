import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useCommentService from '../services/CommentServices';

interface IInput{
  postId:string
}


const Input = ({postId}:IInput) => {
  const [addComment, setAddComment]=useState("")
  const insets = useSafeAreaInsets();
  const {onCreateComment}=useCommentService(postId)


const onPost=async()=>{
  onCreateComment(addComment);
// console.log(addComment)
  setAddComment("")
};

    

      const avatar="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"
    return (
    <View style={[styles.container,{paddingBottom:insets.bottom}]}>
      <Image
      source={{uri:avatar}}
      style={styles.avatar}
      />
      <TextInput
      value={addComment}
      placeholder='Add Comment'
      placeholderTextColor={"grey"}
      style={styles.textInput}
      onChangeText={(e)=>setAddComment(e)}
      />
      <TouchableOpacity style={styles.post_btn}
      onPress={onPost}>
      <Text style={styles.post_txt}>Post</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles= StyleSheet.create({
    
    container:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:"2%",
        elevation:20,
        alignItems:"center",
    },

    avatar:{
        width:"9%",
        aspectRatio:1,
        borderRadius:50
    },

    post_btn:{
        marginLeft:"auto",
        padding:"2%"
    },
    post_txt:{
        color:"blue",
        fontSize:16,
        fontWeight:"bold",
    },
    textInput:{
        marginLeft:"2%",
        color:"black",
        borderRadius:20,
        borderWidth:1,
        width:"90%",
        padding:"2%",
        borderColor:"grey"
    }
})


export default Input