import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import CustomHeader from "./components/CustomHeader";
import {
  CommentScreen,
  CreatePost,
  EditProfileScreen,
  Home,
  PostLikeScreen,
  PostUploadScreen,
  Profile,
  UpdateCommentScreen,
  UpdatePostScreen,
} from "./containers";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SearchStack from "./SearchStack";
import {
  ConfirmEmailScreen,
  ForgotPasswordScreen,
  NewPasswordScreen,
  SigninScreen,
  SignupScreen,
} from "./containers/Auth";
import { AuthContext } from "./context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import { useQuery } from "@apollo/client";
import { getUser } from "./Navqueries";
import { GetUserQuery, GetUserQueryVariables } from "./API";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedPost"
        component={Home}
        options={{ header: CustomHeader }}
      />
      {/* <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/> */}
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="createPost" component={CreatePost} />
      <Stack.Screen name="UpdatePost" component={UpdatePostScreen} options={{title:"Update Post"}}/>
      <Stack.Screen name="PostLikes" component={PostLikeScreen} options={{title:"All Likes"}}/>
      <Stack.Screen name="UpdateComment" component={UpdateCommentScreen} options={{title:"Update Comment"}}/>

      
      

    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyProfile"
        component={Profile}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/> */}
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign in"
        component={SigninScreen}
        // options={{header:CustomHeader}}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Sign up" component={SignupScreen} />
      <Stack.Screen name="Forgot password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Confirm email" component={ConfirmEmailScreen} />
      <Stack.Screen name="New password" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"home-filled"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name={"search"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PostUpload"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name={"search"} size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"search"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"user"} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const { user, userId } = useContext(AuthContext);

  const { data, loading, error } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(getUser, { variables: { id: userId } });

  const userData = data?.getUser;

  if (user === undefined || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  let stackScreens = null;

  if (!user) {
    stackScreens = (
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{ headerShown: false }}
      />
    );
  } else if (!userData?.username) {
    stackScreens = (
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ title: "Setup Profile" }}
      />
    );
  } else {
    stackScreens = (
      <>
        <Stack.Screen
          name="Feeds"
          component={BottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Comments" component={CommentScreen} options={{ title: "Comments" }}/>

      </>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: CustomHeader }}>
        {stackScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
