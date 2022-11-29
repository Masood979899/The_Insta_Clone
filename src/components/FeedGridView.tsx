import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { IPost } from '../types/models';
import FeedGridItem from './FeedGridItem';


interface IfeedGrid{
    data: IPost;
    
}


const FeedGridView = ({data,listHeaderComponent}:IfeedGrid) => {
 
  return (

    <FlatList
        data={data}
        // key={post.id}
        renderItem={({item}) => 
        <FeedGridItem
        post={item}
        
        />
          }
          numColumns={3}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={listHeaderComponent}

        
        />
    
    
  )
}

export default FeedGridView