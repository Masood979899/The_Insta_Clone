import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Buttons from "../../components/Buttons";
import { useMutation } from "@apollo/client";
import { CreatePostsMutation, CreatePostsMutationVariables } from "../../API";
import { createPosts } from "./queries";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const CreatePost = ({ route }) => {
  const navigation= useNavigation()
  const {userId}=useContext(AuthContext)
    const [description, setDescription] = useState("");
  
  const [doCreatePost]=useMutation<CreatePostsMutation, CreatePostsMutationVariables>(createPosts)

    const onSubmit=async()=>{
        try {
            const response =  await doCreatePost({
                variables:{
                    input:{
                        description,
                        image,
                        nOfComments:0,
                        nOfLikes:0,
                        userID:userId
                    },
                },
            });
            if(navigation.canGoBack()){
                navigation.goBack()
            }
            setDescription("")
            console.log(response)
        } catch (e) {
            Alert.alert('Error uploading the post',(e as Error).message)
        }
    }

  const { image } = route.params;
  console.log(image);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={{ aspectRatio: 1, width: "100%" }}
      />

      <TextInput
        placeholderTextColor={"grey"}
        placeholder={"Description"}
        value={description}
        onChangeText={(e) => setDescription(e)}
        style={styles.input}
      />

      <Buttons text="Submit" onPress={onSubmit}/>
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

export default CreatePost;
