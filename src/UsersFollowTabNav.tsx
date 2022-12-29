
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { UserFollowersScreen, UserFollowingScreen, } from './containers'



const Tab = createMaterialTopTabNavigator()


const UsersFollowTab = ({route}) => {
   
  return (
<Tab.Navigator screenOptions={{tabBarIndicatorStyle:{backgroundColor:"lightblue"}}}>
    <Tab.Screen name="Followers">
      {(props) => <UserFollowersScreen {...props} userId={route?.params?.id} />}  
    </Tab.Screen>
    <Tab.Screen name="Followings" >
      {(props) => <UserFollowingScreen {...props} userId={route?.params?.id} />}  
    </Tab.Screen>
</Tab.Navigator>
  )
}

export default UsersFollowTab