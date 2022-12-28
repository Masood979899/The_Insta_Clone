import { View, Text, Image } from 'react-native'
import React from 'react'
import { IPost } from '../types/models'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Posts } from '../API'
import {S3Image} from 'aws-amplify-react-native'
const FeedGridItem = ({post}:{post:Posts}) => {
  return (
    <View
    style={{flex:1,aspectRatio:1,margin:"0.1%",maxWidth:"33.3%",padding:"0.3%"}}>
      <S3Image imgKey={post.image||post?.images?.[0]}
        style={{flex:1}}
        />
        {
            post.images && (
                <MaterialIcons
                name={"collections"}
                size={17}
                color={"white"}
                style={{position: "absolute",top:5,right:5}}
                />
            )
        }
    </View>
  )
}

export default FeedGridItem