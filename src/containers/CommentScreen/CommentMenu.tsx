import { View, Text,StyleSheet,Alert } from 'react-native'
import React,{useContext} from 'react'
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import { useMutation } from '@apollo/client';
import { deleteComments,  } from './queries';
import { AuthContext } from '../../context/AuthContext';
import { Comments, Posts } from '../../API';
import { useNavigation } from '@react-navigation/native';


interface ICommentMenu{
  comment:Comments
}



const CommentMenu = ({comment}:ICommentMenu) => {
 const navigation=useNavigation();
    const {userId}=useContext(AuthContext)
    const isMyPost= userId===comment?.User?.id;
    const [doDeletePost]=useMutation(deleteComments, {variables:{input:{id:comment.id, _version:comment._version}}})

    const startDeletePost= async() => {
      const response = await doDeletePost();
    //   navigation.goBack()
    
    }
 
 const onDeletePress=() => {
    
    try {
        Alert.alert("Are you sure you want to delete",'Deleting a comment is peramnent',[
            {
                text:"Cancel",
                style:"cancel"
            },{
                text:"Delete Comment",
                style:"destructive",
                onPress:startDeletePost
                
            }
            
        ])    
    } catch (e) {
        Alert.alert("Error while deleting comment",(e as Error).message)
    }
    
    
 }
 
 const onEditPress=() => {
  navigation.navigate("UpdateComment",{id:comment.id})

 }
 
 
 
 
    return (
    <Menu 
    renderer={renderers.SlideInMenu} style={styles.dots}>
      
      
      <MenuTrigger
      triggerOnLongPress={true}
      >
        {/* <Text style={{ fontWeight: "600", color: "black" }}>
              {comment.User?.username}
              {"  "}
            </Text> */}
      <Text style={{ alignItems: "center", color: "black" }}>
              {comment.comment}
            </Text>

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

export default CommentMenu
const styles= StyleSheet.create({

    dots: {
        marginLeft: 'auto',
      },
      optionText:{
        textAlign:"center",
        fontSize:16
      }
    
})

