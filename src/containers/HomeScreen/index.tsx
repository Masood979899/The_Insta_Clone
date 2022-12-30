import {
  View,
  FlatList,
  ViewabilityConfig,
  ViewToken,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import Post from "../../components/Post";
import { useQuery } from "@apollo/client";
import {  userFeed } from "./queries";
import {  ModelSortDirection, PostsByDateQuery, PostsByDateQueryVariables, UserFeedQuery, UserFeedQueryVariables } from "../../API";
import ApiErrorMessage from "../ApiErrorMessage";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const {userId}=useContext(AuthContext)
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const { data, loading, error, refetch } = useQuery<
    UserFeedQuery,
    UserFeedQueryVariables
  >(userFeed,{variables:{userID:userId, sortDirection:ModelSortDirection.DESC}});
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    }
  );



  const posts = (data?.userFeed?.items
     || []).filter(
    (item) => !item?._deleted && !item?.Post?._deleted
  ).map(item =>item?.Post);
  
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <ApiErrorMessage
        title={"Error fetching posts"}
        message={error.message}
        onRetry={() => refetch()}
      />
    );
  }
console.log(data)

  return (
    <View>
      <FlatList
        data={posts.sort((a, b) => b?.createdAt.localeCompare(a?.createdAt))}
        onRefresh={() => refetch()}
        refreshing={loading}
        renderItem={({ item }) => item && (
          <Post data={item} key={item.id} isVisible={activePostId == item.id} />
        )}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default Home;