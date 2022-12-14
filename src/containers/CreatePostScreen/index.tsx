import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Buttons from "../../components/Buttons";
import { useMutation } from "@apollo/client";
import { CreatePostsMutation, CreatePostsMutationVariables } from "../../API";
import { createPosts } from "./queries";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../../components/ImageCarousel";
import VideoPlayer from "../../components/VideoPlayer";

const CreatePost = ({ route }) => {
  const navigation = useNavigation()
  const { userId } = useContext(AuthContext)
  const [description, setDescription] = useState("");

  const [doCreatePost] = useMutation<CreatePostsMutation, CreatePostsMutationVariables>(createPosts)
  const { image, images, video } = route.params;



  const onSubmit = async () => {
    try {
      const response = await doCreatePost({
        variables: {
          input: {
            type:'POST',
            description,
            image: image,
            images: images,
            video: video,
            nOfComments: 0,
            nOfLikes: 0,
            userID: userId
          },
        },
      });
      navigation.popToTop()
      // navigation.navigate('AuthStack')
      setDescription("")
      
    } catch (e) {
      Alert.alert('Error uploading the post', (e as Error).message)
    }
  }


  let content;

  if (image) {
    content = (

      <Image
        source={{
          uri: image,
        }}
        style={styles.postimg}
      />


    );
  } else if (images) {
    content = <ImageCarousel images={images} />
  } else if (video) {
    content = <VideoPlayer uri={video} />
  }



  return (
    <View style={styles.container}>
      <View
        style={{ aspectRatio: 1, width: "100%" }}>
        {content}
      </View>

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
  postimg: {
    width: "100%",
    aspectRatio: 1,
  }
});

export default CreatePost;
