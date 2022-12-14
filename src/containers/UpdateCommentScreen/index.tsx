import {
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Buttons from "../../components/Buttons";
import { useMutation, useQuery } from "@apollo/client";
import {
  GetCommentsQuery,
  GetCommentsQueryVariables,
  GetPostsQuery,
  GetPostsQueryVariables,
  UpdateCommentsMutation,
  UpdateCommentsMutationVariables,
  UpdatePostsMutation,
  UpdatePostsMutationVariables,
} from "../../API";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ApiErrorMessage from "../ApiErrorMessage";
import { getComments } from "./queries";
import { updateComments } from "./mutation";

const UpdateCommentScreen = ({ route }) => {
  const navigation = useNavigation();
  const [comment, setComment] = useState("");
  const { id } = route.params;
  const { data, loading, error } = useQuery<
    GetCommentsQuery,
    GetCommentsQueryVariables
  >(getComments, { variables: { id } });
  const [doUpdateComment, { error: UpdateError ,data:updateData}] = useMutation<
    UpdateCommentsMutation,
    UpdateCommentsMutationVariables
  >(updateComments);

  const comments = data?.getComments;

  useEffect(() => {
    if (data) {
      setComment(comments?.comment || "");
    }
  }, [data]);
  useEffect(() => {
    if (updateData) {
      navigation.goBack()
    }
  }, [updateData,navigation]);

  const onSubmit = async () => {
    if (!comments) {
      return;
    }
    await doUpdateComment({variables: { input: { id: comments?.id, _version:comments?._version, comment,  } }});

    
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
        placeholder={"Update Comment"}
        value={comment}
        onChangeText={(e) => setComment(e)}
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

export default UpdateCommentScreen;
