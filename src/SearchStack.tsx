import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CommentScreen, Home, Profile, UsersScreen } from './containers'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchStackNavigatorParamList } from './types/types'



const Tab = createMaterialTopTabNavigator<SearchStackNavigatorParamList>()


const SearchStack = () => {
   
  return (
<Tab.Navigator screenOptions={{tabBarIndicatorStyle:{backgroundColor:"lightblue"}}}>
    <Tab.Screen name="UserScreen" component={UsersScreen}/>
    <Tab.Screen name="CommentScreen" component={CommentScreen}/>
</Tab.Navigator>
  )
}

export default SearchStack