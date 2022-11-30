import { View, Text, FlatList } from "react-native";
import React from "react";
import comments from "../../data/comments.json";
import Comments from "../../components/Comments";
import Input from "../../components/Input";

const CommentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comments data={item} includeDetail />}
      />
      <Input />
    </View>
  );
};

export default CommentScreen;
