import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


interface IButtons{
    text?: string,
    onPress?:()=>void,
    inline?:boolean,
}


const Buttons = ({text="",onPress=()=>{}, inline= false}:IButtons) => {

  const navigation= useNavigation()

  return (
    <TouchableOpacity
    style={[styles.btn,inline?{flex:1}:{}]}
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