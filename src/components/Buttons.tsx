import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


interface IButtons{
    text?: string,
    onPress?:()=>void,
}


const Buttons = ({text="",onPress}:IButtons) => {

  const navigation= useNavigation()

  return (
    <TouchableOpacity
    
    style={styles.btn}
    onPress={onPress}

>
      <Text style={{color:"black",fontWeight:"600"}}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    btn:{
        flex:1,
        backgroundColor:"white",
        padding:"3%",
        borderRadius:5,
        elevation:20,
        alignItems:"center",
        margin:"2%"


    }
})

export default Buttons