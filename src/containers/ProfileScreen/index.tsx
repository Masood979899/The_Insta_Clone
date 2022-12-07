import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useContext } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import FeedGridView from "../../components/FeedGridView";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { getUser } from "./queries";
import {
  MyProfileRouteProp,
  ProfileNavigationProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
} from "../../types/types";
import ApiErrorMessage from "../ApiErrorMessage";
import { GetUserQuery, GetUserQueryVariables } from "../../API";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileRouteProp
  >();

  const {userId: authUserId} = useContext(AuthContext);

  const userId = route?.params?.userId || authUserId;

  // navigation.setOptions({title:userInfo?.username||user.username})

  console.log("profile", authUserId);
  const { data, loading, error, refetch } = useQuery<
    GetUserQuery | GetUserQueryVariables
  >(getUser, { variables: { id: userId } });

  const user = data?.getUser || authUserId;

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error || !user) {
    return (
      <ApiErrorMessage
        title="Error fetching the user"
        message={error?.message || "User not found"}
        onRetry={()=>refetch()}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FeedGridView
        data={user?.Posts?.items || []}
        ListHeaderComponent={() => <ProfileHeader user={user} />}
        refetch={refetch }
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    paddingTop: "10%",
  },
  header: {
    flexDirection: "row",
    // padding:"2%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 50,
  },
  number: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "300",
  },
  txtArea: {
    alignItems: "center",
  },
  username: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  bio: {
    color: "black",
  },
  btn_header: {
    marginVertical: "4%",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "white",
    padding: "3%",
    borderRadius: 16,
    elevation: 20,
    marginHorizontal: "10%",
  },
});

export default Profile;
