import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  Comments as CommentType,
} from "../API";
import { DEFAULT_USER_IMAGE } from "../config";
import CommentMenu from "../containers/CommentScreen/CommentMenu";
import dayjs from "dayjs";
import colors from "../theme/colors";
import UserImage from "./UserImage";

interface ICommentProps {
  data: CommentType;
  includeDetail?: boolean;
  isNew?: boolean;
}

// const avatar="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"

const Comments = ({ data, includeDetail = false, isNew = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((v) => !v);
  };

  return (
    <>
      <View style={styles.root}>
        <View style={styles.comment}>
          {includeDetail && (
            <UserImage imageKey={data.User?.image ||undefined} width={"10%"}/>
            // <Image
            //   source={{ uri: data.User?.image || DEFAULT_USER_IMAGE }}
            //   style={styles.avatar}
            // />
          )}

          <Text style={{ flex: 1 }}>
            <Text style={{ fontWeight: "600", color: "black" }}>
              {data.User?.username}
              {"  "}
            </Text>

            <CommentMenu comment={data}/>
          </Text>
          <TouchableOpacity style={{ marginLeft: "auto" }} onPress={toggleLike}>
            <AntDesign
              name={isLiked ? "heart" : "hearto"}
              size={15}
              color={isLiked ? "#ED4956" : "black"}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {includeDetail && (
          <View style={styles.footer}>
            {isNew && <Text style={styles.newComment}>new</Text>}
            <Text style={styles.footertxt}>{(dayjs(data?.createdAt).fromNow())}</Text>
            <Text style={styles.footertxt}>5 likes</Text>
            <Text style={styles.footertxt}>Reply</Text>
          </View>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  root: {
  
    marginHorizontal: "3%",
  },
  icon: {
    marginHorizontal: "0.5%",
  },
  newComment:{
    backgroundColor:colors.primary,
    color:colors.white,
    paddingHorizontal:"2%",
    marginRight:"2%",
    borderRadius:5,
    overflow:"hidden"
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2.5%",
  },
  avatar: {
    width: "10%",
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: "center",
    marginRight: "2%",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "14%",
    marginVertical: "1%",
  },
  footertxt: {
    color: "grey",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: "8%",
  },
});
export default Comments;
