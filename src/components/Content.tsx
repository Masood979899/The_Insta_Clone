import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageCarousel from './ImageCarousel';
import VideoPlayer from './VideoPlayer';
import { Posts } from '../API';
import { Storage } from 'aws-amplify';

interface IContent{
    post:Posts
    isVisible:boolean;
}


const Content = ({post, isVisible}:IContent) => {
  
const [imageUri, setImageUri] = useState<string | null>(null);
const [videoUri, setVideoUri] = useState<string | null>(null);
const [imagesUri, setImagesUri] = useState<string[] | null>(null);

    useEffect(() => {
      
    downloadMedia();
    }, [])
    

    const downloadMedia=async ()=>{
        if(post.image){
            const uri = await Storage.get(post.image)
            setImageUri(uri)
          }else if(post.images){
            const uris = await Promise.all(post.images.map(img=>Storage.get(img)))
            setImagesUri(uris)
          }
          else if(post.video){
            const uri = await Storage.get(post.video)
            setVideoUri(uri)
          }
    }


    if (imageUri) {
 return (
          <Image
          resizeMode='contain'
            source={{
              uri: imageUri,
            }}
            style={styles.postimg}
          />
      );
    } else if (imagesUri) {
      return <ImageCarousel images={imagesUri} />;
    } else if (videoUri) {
      return <VideoPlayer uri={videoUri} paused={!isVisible} />;
    }
  
    return (
    <View>
      <ActivityIndicator/>
    </View>
  )
}

const styles= StyleSheet.create({
    postimg: {
        width: "100%",
        aspectRatio: 4 / 3,
      },
})

export default Content