import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ProfileStackNavigatorParamList } from '../types/types'


interface IButtons extends TouchableOpacityProps  {
    text?: string,
    onPress?:()=>void,
    inline?:boolean,
}


const Buttons = ({text="",onPress=()=>{}, inline= false, ...restProps}:IButtons) => {

  const navigation= useNavigation<ProfileStackNavigatorParamList>()

  return (
    <TouchableOpacity
    style={[styles.btn,inline?{flex:1}:{}]}
    {...restProps}
    onPress={onPress}
>
      <Text style={{color:"black",fontWeight:"600"}}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    btn:{
  
        backgroundColor:"white",
        padding:"3%",
        borderRadius:5,
        elevation:20,
        alignItems:"center",
        margin:"2%"


    }
})

export default Buttons