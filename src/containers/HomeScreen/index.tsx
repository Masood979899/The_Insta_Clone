import { View, Text, FlatList, InteractionManager, ViewabilityConfig, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import Post from '../../components/Post'
import post from "../../data/posts.json"
const Home = () => {
 

const [activePostId,setActivePostId] =useState<string|null>(null)

  const viewabilityConfig: ViewabilityConfig={
    itemVisiblePercentThreshold:51,
}
const onViewableItemsChanged= useRef(({viewableItems}:{viewableItems:Array<ViewToken>})=>{
    if(viewableItems.length > 0){
        setActivePostId(viewableItems[0].item.id);
    }
})
 
  return (
    <View>
        <FlatList
        data={post}
        // key={post.id}
        renderItem={({item}) => (
          <Post data={item}
           key={item.id}
           isVisible={activePostId==item.id}
           />
        )}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        />
    </View>
  )   
}

export default Home