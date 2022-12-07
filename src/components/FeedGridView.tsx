import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { IPost } from "../types/models";
import FeedGridItem from "./FeedGridItem";
import { Posts } from "../API";

interface IfeedGrid {
  data: (Posts | null)[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  refetch: ()=>void;
  loading: boolean;
}

const FeedGridView = ({ data, ListHeaderComponent,refetch, loading }: IfeedGrid) => {
  return (
    <FlatList
      data={data}
      // key={post.id}
      renderItem={({ item }) =>item && <FeedGridItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      onRefresh={refetch}
      refreshing={loading}
    />
  );
};

export default FeedGridView;
