import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from 'react'
import CustomHeader from "./components/CustomHeader";
import {CommentScreen, EditProfileScreen, Home, PostUploadScreen, Profile } from "./containers";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SearchStack from "./SearchStack";
import { ConfirmEmailScreen, ForgotPasswordScreen, NewPasswordScreen, SigninScreen, SignupScreen } from "./containers/Auth";
import { AuthContext } from "./context/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack=()=>{
  return(
    <Stack.Navigator>
         <Stack.Screen name="FeedPost" component={Home} options={{headerShown:false}}/>
    {/* <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/> */}
    <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  )
}

const ProfileStack=()=>{
  return(
    <Stack.Navigator>
         <Stack.Screen name="MyProfile" component={Profile} options={{headerShown:false}}/>
    {/* <Stack.Screen name="PostUploadScreen" component={PostUploadScreen}/> */}
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  )
}


const AppStack=()=>{


return(
<Stack.Navigator>
  

    <Stack.Screen name="Sign in" component={SigninScreen}
    // options={{header:CustomHeader}} 
    options={{headerShown:false}}
/>
    <Stack.Screen name="Sign up" component={SignupScreen} />
    <Stack.Screen name="Forgot password" component={ForgotPasswordScreen}/>
    <Stack.Screen name="Confirm email" component={ConfirmEmailScreen}/>
    <Stack.Screen name="New password" component={NewPasswordScreen}/>
    
</Stack.Navigator>
)
}

const BottomTabNav= () => {
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon:({color,size})=>(
        <MaterialIcons
          name={"home-filled"}
          size={size}
          color={color}
        />
      )}} />
      <Tab.Screen name="Search" component={SearchStack} options={{tabBarIcon:({size,color})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}

        />
      )}}/>
      <Tab.Screen name="PostUpload" component={PostUploadScreen} options={{tabBarIcon:({size,color})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}

        />
      )}}/>

<Tab.Screen name="Notifications" component={PostUploadScreen} options={{tabBarIcon:({color,size})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}

        />
      )}}/>
      <Tab.Screen name="Profile" component={ProfileStack}
      options={{tabBarIcon:({color,size})=>(
        <MaterialIcons
          name={"search"}
          size={size}
          color={color}
        />
      )}}
      />

    </Tab.Navigator>
  )
}



const Navigation = () => {
  const {user}=useContext(AuthContext)
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {!user?(
        <Stack.Screen  name="AppStack" component={AppStack}
        />
      ):<>
      
      <Stack.Screen name="Feeds" component={BottomTabNav}/>
      <Stack.Screen name="CommentScreen" component={CommentScreen}/>
      
      </>}

        
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}

export default Navigation