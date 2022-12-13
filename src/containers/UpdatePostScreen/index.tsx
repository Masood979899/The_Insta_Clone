import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Buttons from "../../components/Buttons";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreatePostsMutation,
  CreatePostsMutationVariables,
  GetPostsQuery,
  GetPostsQueryVariables,
  UpdatePostsMutation,
  UpdatePostsMutationVariables,
} from "../../API";
import { createPosts, getPosts } from "./queries";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ApiErrorMessage from "../ApiErrorMessage";
import { updatePosts } from "./mutation";

const UpdatePostScreen = ({ route }) => {
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);
  const [description, setDescription] = useState("");
  const { id } = route.params;
  const { data, loading, error } = useQuery<
    GetPostsQuery,
    GetPostsQueryVariables
  >(getPosts, { variables: { id } });
  const [doUpdatePost, { error: UpdateError ,data:updateData}] = useMutation<
    UpdatePostsMutation,
    UpdatePostsMutationVariables
  >(updatePosts);

  const post = data?.getPosts;

  useEffect(() => {
    if (data) {
      setDescription(post?.description || "");
    }
  }, [data]);
  useEffect(() => {
    if (updateData) {
      navigation.goBack()
    }
  }, [updateData,navigation]);

  const onSubmit = async () => {
    if (!post) {
      return;
    }
    const response = await doUpdatePost({variables: { input: { id: post?.id, _version:post?._version, description,  } }});
    console.log(response);

    // try {
    //     const response = await doUpdatePost();
    //     console.log(response);
    // } catch (e) {
    //     console.log((e as Error).message)
    // }
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error || UpdateError) {
    return (
      <ApiErrorMessage
        title="Failed tp fetch the post"
        message={error?.message || UpdateError?.message}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={"grey"}
        placeholder={"Description"}
        value={description}
        onChangeText={(e) => setDescription(e)}
        style={styles.input}
      />

      <Buttons text="Submit" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },
  input: {
    marginVertical: "5%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: "4%",
  },
});

export default UpdatePostScreen;
