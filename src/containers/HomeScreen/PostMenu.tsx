import { View, Text,StyleSheet,Alert } from 'react-native'
import React,{useContext} from 'react'
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import Entypo from 'react-native-vector-icons/Entypo';
import { useMutation } from '@apollo/client';
import { deletePosts } from './queries';
import { AuthContext } from '../../context/AuthContext';
import { Posts } from '../../API';
import { useNavigation } from '@react-navigation/native';


interface IPostMenu{
  post:Posts
}



const PostMenu = ({post}:IPostMenu) => {
 const navigation=useNavigation();
  //  console.log(post.User?.id)
    const {userId}=useContext(AuthContext)
    const isMyPost= userId===post?.User?.id;
    const [doDeletePost]=useMutation(deletePosts, {variables:{input:{id:post.id, _version:post._version}}})

    const startDeletePost= async() => {
      const response = await doDeletePost();
      console.log(response)
    }
 
 const onDeletePress=() => {
    Alert.alert("Are you sure you want to delete",'Deleting a post is peramnent',[
        {
            text:"Cancel",
            style:"cancel"
        },{
            text:"Delete Post",
            style:"destructive",
            onPress:startDeletePost
        }
    ])
 }
 
 const onEditPress=() => {
  navigation.navigate("UpdatePost",{id:post.id})

 }
 
 
 
 
    return (
    <Menu renderer={renderers.SlideInMenu} style={styles.dots}>
      <MenuTrigger>
      <Entypo
            name={'dots-three-horizontal'}
            size={16}
            color={"black"}   
          />

      </MenuTrigger>
      
      
        <MenuOptions>
        <MenuOption onSelect={() => alert(`Report`)} >
          <Text style={styles.optionText}>Report</Text>
        </MenuOption>
        {isMyPost &&(<>
        <MenuOption onSelect={onEditPress} >
          <Text style={styles.optionText}>Edit</Text>
        </MenuOption>
        <MenuOption onSelect={onDeletePress} >
          <Text style={[styles.optionText,{color: 'red'}]}>Delete</Text>
        </MenuOption>
        </>)}

      </MenuOptions>
      
    </Menu>
  )
}

export default PostMenu
const styles= StyleSheet.create({

    dots: {
        marginLeft: 'auto',
      },
      optionText:{
        textAlign:"center",
        fontSize:16
      }
    
})

