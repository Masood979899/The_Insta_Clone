import { View, Text, StyleSheet, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import Buttons from '../../components/Buttons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Navigation from '../..';
import { useNavigation } from '@react-navigation/native';

const PostUploadScreen = () => {
  const [modalVisible, setModalVisible]=useState(false)
  
  const navigation = useNavigation()

  const onLibrary = () => {
    launchImageLibrary(
      { mediaType: "mixed",selectionLimit:5},
      ({ didCancel, errorCode, assets }) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
        const params : {image?:string,images?:string[],video?:string}={};
          if(assets.length===1){
            const field = assets[0].type?.startsWith('video')?'video':'image';
            params[field]=assets[0].uri
          }else if(assets.length>1){
            params.images = assets.map(asset =>asset.uri) as string[];
          }

          navigation.navigate("createPost",params)
          setModalVisible(false)
       
        }
      }
    );
  };

  const onModal=()=>{
    setModalVisible(true)
  }

  const onCamera = () => {
    
    launchCamera(
      { mediaType: "photo" },
      ({ didCancel, errorCode, assets }) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
         if(assets.length ===1){
          navigation.navigate("createPost",{
            image:assets[0].uri
          })
         }
        }
      }
    );
  };
  const onVideo = () => {
    
    launchCamera(
      { mediaType: "video" },
      ({ didCancel, errorCode, assets }) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          if(assets.length ===1){
            navigation.navigate("createPost",{
              video:assets[0].uri
            })
        }
      }
      }
    );
  };
  


  return (
    <View style={styles.container}>
   
    <Modal
    animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible)}}>
      <View style={styles.modal}>
          <View style={{padding:"5%"}}>
          <Buttons text='Upload Photo' onPress={onCamera}/>
          <Buttons text='Upload Video' onPress={onVideo}/>
          </View>
      </View>
    </Modal>
   
      <Buttons text='Choose From Library' onPress={onLibrary}/>
      <Buttons text='Launch Camera' onPress={onModal}/>
    
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:"white",
    justifyContent:"center"
  },
  modal:{
    backgroundColor:'lightgrey',
     marginVertical:'70%',
      
      alignContent:'center',
      justifyContent:'center',
      display:'flex',
      marginHorizontal:"6%",
      borderRadius:20,
      elevation:20,
      padding:20
  },
  cross:{
    height:60,
    width:60,
    position:'absolute',
    top:-20,
    borderRadius:40,
    right:50,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
backgroundColor:'white'
  }
})



export default PostUploadScreen


