import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Comments from "./Comments";
import DoublePress from "./DoublePress";
import { useNavigation } from "@react-navigation/native";
import { Posts } from "../API";
import { DEFAULT_USER_IMAGE } from "../config";
import PostMenu from "../containers/HomeScreen/PostMenu";
import useLikeService from "../services/LikeService";
import dayjs from "dayjs";
import Content from "./Content";
import UserImage from "./UserImage";

interface IPostProps {
  data: Posts;
  isVisible: boolean;
}

const Post = ({ data, isVisible }: IPostProps) => {
  const navigation = useNavigation();

  const { toggleLike, isLiked } = useLikeService(data);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const PostLikes = data.Likes?.items.filter((like) => !like?._deleted) || [];

  const onDoublePress = async () => {
    toggleLike();
  };

  // console.log(data.image)

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const comments=data?.Comments?.items.filter((comment)=>!comment?._deleted)||[]


  return (
    <>
      {/*header*/}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={
            data.User
              ? () =>
                  navigation.navigate("ProfileScreen", {
                    userId: data?.User?.id,
                  })
              : () => {}
          }
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          
          <UserImage imageKey={data.User?.image ||undefined} width={"22%"}/>
          <Text style={styles.name}>{data?.User?.username}</Text>
        </TouchableOpacity>
        <PostMenu post={data} />
      </View>

      {/*image*/}
      <DoublePress onDoublePress={onDoublePress}>
        <Content post={data} isVisible={isVisible}/>
        </DoublePress>

      {/*footer*/}
      <View style={styles.footer}>
        <TouchableOpacity onPress={onDoublePress}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            style={styles.icon}
            color={isLiked ? "#ED4956" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Comments",{postId:data?.id})}
        >
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" size={24} style={styles.icon} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={"black"}
          />
        </TouchableOpacity>
      </View>

      {/*likes */}
      <View style={styles.likes}>
        {PostLikes?.length === 0 ? (
          <Text style={{ fontWeight: "400" }}>
            Be the first to like the post
          </Text>
        ) : (
          <Text>
            Liked by{" "}
            <Text style={styles.name}>{PostLikes[0]?.User?.username}</Text>
            {PostLikes.length > 1 && (
              <>
                {" "}
                and{" "}
                <Text
                  onPress={() =>
                    navigation.navigate("PostLikes", { id: data?.id })
                  }
                  style={styles.name}
                >
                  {data.nOfLikes - 1} others{" "}
                </Text>{" "}
              </>
            )}
          </Text>
        )}
      </View>

      {/*description */}
      <View style={styles.comment_area}>
        <Text numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text
            style={{ fontWeight: "600", marginLeft: "2.5%", color: "black" }}
          >
            {data?.User?.username}
          </Text>
          <Text style={styles.caption}> {data.description}</Text>
        </Text>
        <Text onPress={toggleDescriptionExpanded} style={{ color: "grey" }}>
          {isDescriptionExpanded ? "less" : "more"}
        </Text>
      </View>

      {/*Comments */}
      
        <Text
        onPress={() => navigation.navigate("Comments",{postId:data?.id})}
        style={{ color: "grey", marginTop: "2%", marginLeft: "2%" }}
      >
        view all {data.nOfComments} comments
      </Text>
    
      
      {/*listComments*/}
      {comments.map(
          (comment) =>
            comment && (
              <Comments data={comment} key={comment?.id} />
            )
        )}

      {/*createdAt*/}
      <Text style={{ color: "grey", marginTop: "2%", padding: "2%" }}>
        {dayjs(data.createdAt).fromNow()}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: "2%",
    paddingTop: "10%",
    alignItems: "center",
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  name: {
    color: "black",
    fontSize: 15,
    marginLeft: "2%",
    fontWeight: "600",
  },
  dots: {
    marginLeft: "auto",
  },
  postimg: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  footer: {
    flexDirection: "row",
    padding: "1.5%",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: "0.5%",
  },
  icon1: {
    marginLeft: "auto",
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    padding: "1.5%",
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 15,
  },
  profavatar: {
    height: 35,
    width: 35,
    borderRadius: 15,
  },
  avatar2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    right: 10,
  },
  avatar3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    right: 20,
  },
  caption: {
    fontSize: 15,
    color: "black",
  },
  add_comment: {
    flexDirection: "row",
    alignItems: "center",
    padding: "1.5%",
    borderRadius: 15,
  },
  txt_input: {
    marginHorizontal: "2%",
  },
  comment_area: {
    padding: "2%",
  },
});

export default Post;
