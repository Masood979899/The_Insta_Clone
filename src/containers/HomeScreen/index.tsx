import { View, FlatList,  ViewabilityConfig, ViewToken } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Post from '../../components/Post'
// import post from "../../data/posts.json"
import { API,graphqlOperation } from 'aws-amplify'


export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        image
        images
        video
        nOfComments
        nOfLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User{
          id
          name
          username
          image
        }
        Comments{
          items{
            id
            comment
            User{
              id
              name
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;

const Home = () => {
  // console.log("hello",listPosts)
  const [activePostId,setActivePostId] =useState<string|null>(null)
  const [posts, setPosts]=useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await API.graphql(graphqlOperation(listPosts));
      console.log(response.data.listPosts.items);
      setPosts(response.data.listPosts.items);
    };

    fetchPosts();
  }, []);


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
        data={posts}
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