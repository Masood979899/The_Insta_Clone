import {
    View,
    Text,
    TextInput,
    StyleSheet,
    
  } from "react-native";
  import React from "react";
  import {  Control, Controller } from "react-hook-form";
  import { IUser } from "../../types/models";
  
  


  type IEditableUserFields = "name" | "username" | "bio" | "website" | "image";
  type IEditableUser = Pick<IUser, IEditableUserFields>;
  const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;


  interface ICustomInput {
    label: string;
    multiline?: boolean;
    control: Control<IEditableUser>;
    name: string;
    rules?: object;
  }



  const CustomInput = ({
    control,
    name,
    label,
    multiline = false,
    rules,
  }: ICustomInput) => (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{ flex: 1 }}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              placeholderTextColor={"grey"}
              style={[styles.input, {borderColor: error ? "red" : "grey" }]}
              multiline={multiline}
            />
            {error && (
              <Text style={{ color: "red" }}>{error.message || "Error"}</Text>
            )}
          </View>
        </View>
      )}
    />
  );


const styles=StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        marginBottom: "8%",
      },
      label: {
        width: "25%",
        color: "grey",
      },
      input: {
        borderColor: "grey",
        borderBottomWidth: 1,
      },
})

  export default CustomInput;