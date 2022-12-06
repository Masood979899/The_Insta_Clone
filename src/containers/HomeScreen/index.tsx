import { View, FlatList,  ViewabilityConfig, ViewToken, ActivityIndicator, Text } from 'react-native'
import React, { useRef, useState,  } from 'react'
import Post from '../../components/Post'
import { useQuery} from '@apollo/client'
import { listPosts } from './queries'
import { ListPostsQuery, ListPostsQueryVariables } from '../../API'
import ApiErrorMessage from '../ApiErrorMessage'

const Home = () => {
  
  const [activePostId,setActivePostId] =useState<string|null>(null)
  
  const {data, loading, error}= useQuery<ListPostsQuery, ListPostsQueryVariables>(listPosts);

  const viewabilityConfig: ViewabilityConfig={
    itemVisiblePercentThreshold:51,
}
const onViewableItemsChanged= useRef(({viewableItems}:{viewableItems:Array<ViewToken>})=>{
    if(viewableItems.length > 0){
        setActivePostId(viewableItems[0].item.id);
    }
})

const posts = data?.listPosts?.items;

if (loading){
  return<ActivityIndicator/>
}
if(error){
  return<ApiErrorMessage title={"Error fetching posts"} message={error.message} />
}

 
  return (
    <View>
        <FlatList
        data={posts}
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