import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Buttons from "../../components/Buttons";
import { useMutation } from "@apollo/client";
import {
  CreatePostsInput,
  CreatePostsMutation,
  CreatePostsMutationVariables,
} from "../../API";
import { createPosts } from "./queries";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../../components/ImageCarousel";
import VideoPlayer from "../../components/VideoPlayer";
import { Storage } from "aws-amplify";
import { nanoid } from 'nanoid'


const CreatePost = ({ route }) => {
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0.3);


  const [doCreatePost] = useMutation<
  CreatePostsMutation,
  CreatePostsMutationVariables
  >(createPosts);
  const { image, images, video } = route.params;
  
  // const random = uniqueRandom(1,10000)
  const imageName = nanoid();
  const onSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const input: CreatePostsInput = {
      type: "POST",
      description,
      image: undefined,
      images: undefined,
      video: undefined,
      nOfComments: 0,
      nOfLikes: 0,
      userID: userId,
    };
    console.log(image);
    if (image) {
      input.image = await uploadMedia(image);
    } else if (images) {
      const imageKeys = await Promise.all(
        images.map((img) => uploadMedia(img))
      );
      input.images = imageKeys.filter((key) => key) as string[];
    }else if(video){
      input.video = await uploadMedia(video);
       
    }

    try {
      const response = await doCreatePost({
        variables: {
          input,
        },
      });
      setIsSubmitting(false);
      navigation.popToTop();
      // navigation.navigate('AuthStack')
      setDescription("");
    } catch (e) {
      Alert.alert("Error uploading the post", (e as Error).message);
      setIsSubmitting(false);
    }
  };

  const uploadMedia = async (uri: string) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      const uriParts = uri.split(".");
      // console.log("length",uriParts.length)
      const extension = uriParts[uriParts.length - 1];

      // console.log("heloo",uuidV4)
      /*uploading file*/
      const s3Response = await Storage.put(`${imageName}.${extension}`, blob);

      return s3Response?.key;
    } catch (e) {
      Alert.alert("Error while uploading image", (e as Error).message);
    }
  };

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
    content = <ImageCarousel images={images} />;
  } else if (video) {
    content = <VideoPlayer uri={video} />;
  }

  return (
    <View style={styles.container}>
      <View style={{ aspectRatio: 1, width: "100%" }}>{content}</View>

      <TextInput
        placeholderTextColor={"grey"}
        placeholder={"Description"}
        value={description}
        onChangeText={(e) => setDescription(e)}
        style={styles.input}
      />

      <Buttons
        text={isSubmitting ? "Submitting...!!!" : "Submit"}
        onPress={onSubmit}
      />
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
  },
});

export default CreatePost;
