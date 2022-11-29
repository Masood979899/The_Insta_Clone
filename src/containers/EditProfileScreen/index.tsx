import { View, Text, Image, TextInput, StyleSheet, Alert } from 'react-native'
import React from 'react'
import user from "../../data/user.json"
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import { useForm,Control,Controller } from "react-hook-form";
import { IUser } from '../../types/models'

type IEditableUserFields="name" | "username" |"bio"|"website";
type IEditableUser=Pick<IUser,IEditableUserFields>;
const URL_REGEX =
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

interface ICustomInput{
    label:string;
    multiline?:boolean;
    control:Control<IEditableUser>;
    name: string
    rules?:object; 

}



const CustomInput=({control,name,label,multiline=false,rules}:ICustomInput)=>(

    <Controller
    control={control}
    rules={rules}
    name={name}
    render={({field:{onChange,value,onBlur},fieldState:{error}})=>(
        <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={{flex:1}}>
        <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={label}
        placeholderTextColor={"grey"}
        style={[styles.input,
        {borderColor:error?"red":"grey"}
        ]}
        multiline={multiline}
        />
        {error && (<Text style={{color:"red"}}>{error.message|| "Error"}</Text>)}
        </View>
        
    </View>
    )}
    />
    )
  



const EditProfileScreen = () => {
    
    const {control,handleSubmit} = useForm<IEditableUser>();
    const onSubmit=(data:IEditableUser)=>{
        // Alert.alert("submited",data)
        console.log(data)
    }
    
    return (
    <View style={styles.page}>
      <Image
      source={{uri:user.image}}
      style={styles.avatar}
      />
      <Text style={styles.textButton}>Change Profile Photo</Text>    
    
    <CustomInput
    label="Name"
    name='name'
    control={control}
    rules={{required:"name is required", minLength:{
        value:3,
        message:"name must be at least 3 characters"}}}
    />
    <CustomInput
    label="Username"
    control={control}
    name='username'
    rules={{required:"username is required"}}

    />
    <CustomInput
    label="Website"
    control={control}
    rules={{pattern:{
        value:URL_REGEX,
        message:"Invalid url"}}}
    name='website'
    />
    <CustomInput
    label="Bio"
    multiline
    control={control}
    rules={{required:"bio is required",maxLength:{
        value:200,
        message:"Bio must be less than 200 characters"}}}
    name='Bio'
    />
      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>Submit</Text>    
    
    </View>
  )
}

const styles = StyleSheet.create({

page:{
    alignItems:"center",
    padding:"12%"
},
avatar:{
    width:"30%",
    aspectRatio:1,
    borderRadius:100
},
textButton:{
    color:colors.primary,
    fontSize:16,
    fontWeight:fonts.weight.semi,
    margin:"8%"
},
inputContainer:{
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"stretch",
    marginBottom:"8%"
},
label:{
    width:"25%",
    color:"grey",
    
},
input:{

    borderColor:"grey",
    borderBottomWidth:1,
}



})


export default EditProfileScreen