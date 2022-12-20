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


{/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.model}>
          <View style={{paddingVertical:20, }}>
               <View>
                 <Text style={{fontWeight:'bold',color:'black',marginTop:10,fontSize:20}}>
                   Book a Slot
                 </Text>
                 <ScrollView horizontal style={styles.scrollbox}>
                 {SlotsData.map((items=>(
                   <>
                    <View style={styles.datebox}>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=>setvisit(items.id)} style={{backgroundColor:visit == items.id ? '#17acd5' :'#C2CDCF', height:72,
                        width:63,
                        borderColor:'#C2CDCF',
                        borderWidth:1,
                        borderRadius:12,
                        justifyContent:'center',
                        alignItems:'center',}}>
                    <Text >
                        {items.day}
                      </Text>
                      <Text style={{fontWeight:'bold'}}>
                        {items.date}
                      </Text>
                      </TouchableOpacity>
                    </View>
                    </> )))}
                 </ScrollView>
               </View>
               <View>
               {SlotsData.map((items)=>(
                  <TouchableOpacity activeOpacity={0.6} onPress={()=>setvisitt(items.id)} >
                 <View style={styles.timebox}>
                    <Text style={{color:'grey',}}>
                     {items.time}
                   </Text>
                   <View style={styles.righsidetime}>
                   <Text style={{color:'grey'}}>
                   {items.fee}
                   </Text>
                   <View  style={{backgroundColor:visitt == items.id ? '#17acd5' :'#C2CDCF',height:15,
                      width:15,
                      borderColor:'#C2CDCF',
                      borderWidth:1,
                      borderRadius:30,
                      marginLeft:14,}}>
                   </View>
                 </View>
                 </View>
                 </TouchableOpacity>
               ))}
               </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Donee</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}