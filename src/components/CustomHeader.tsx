import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CustomHeader = () => {
  return (
    <View style={styles.container}>
        <Image
        source={require("../assets/image/logo.png")}
        style={{width: "100%", aspectRatio:1}}
        resizeMode={"contain"}
        />
    </View>
  )
}



const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:"15%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        padding:"6%"
    }

})

export default CustomHeader