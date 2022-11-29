import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'

interface IDoublePressable{
    onDoublePress?:()=>void;
    children: ReactNode;
}


const DoublePress = ({onDoublePress=()=>{},children}:IDoublePressable) => {
    
    
    let lastTap=0
    const handleDoublePress=()=>{
    const now = Date.now();
    if(now-lastTap<300){
    //  Liked();
    onDoublePress()
    }
    lastTap=now
    }
 
 
    return (
    <TouchableOpacity>
      {children}
    </TouchableOpacity>
  )
}

export default DoublePress