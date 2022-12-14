import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { useForm, Control, Controller } from "react-hook-form";
import { IUser } from "../../types/models";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { deleteUser, getUser, usersByUsername } from "../EditProfileScreen/queries";
import ApiErrorMessage from "../ApiErrorMessage";
import { AuthContext } from "../../context/AuthContext";
import { Asset, launchImageLibrary } from "react-native-image-picker";
import { updateUser } from "./mutation";
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UsersByUsernameQuery,
  UsersByUsernameQueryVariables,
} from "../../API";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import CustomInput from "./customInput";
import { DEFAULT_USER_IMAGE } from "../../config";
// import CustomInput from './customInput'

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

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { userId, user: authUser } = useContext(AuthContext);
  const { control, handleSubmit, setValue } = useForm<IEditableUser>();
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset >(null);
  const { data, loading, error } = useQuery(getUser, {
    variables: { id: userId },
  });

  const user = data?.getUser;
  console.log(user);

 const [getUsersByUsername]=useLazyQuery<UsersByUsernameQuery | UsersByUsernameQueryVariables>(usersByUsername)
 
  const [doUpdateUser, { loading: updateLoading, error: updateError }] =
    useMutation<UpdateUserMutation | UpdateUserMutationVariables>(updateUser);
  const [doDelete, { loading: deleteLoading, error: deleteError }] =
    useMutation<DeleteUserMutation | DeleteUserMutationVariables>(deleteUser);
  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("username", user.username);
      setValue("bio", user.bio);
      setValue("website", user.website);
      setValue("image", user.image);
    }
}, [user, setValue]);

const onSubmit = async (formData: IEditableUser) => {
    // Alert.alert("submited",data)
    
    await doUpdateUser({
      variables: {
        input: { id: userId, ...formData, _version: user?._version },
      },
    });
    if(navigation.canGoBack()){
    navigation.goBack()}
  };
  const onChangePhoto = () => {
    launchImageLibrary(
      { mediaType: "photo" },
      ({ didCancel, errorCode, assets }) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      }
    );
  };




const validateUsername = async (username:string)=>{

  try {
      const response= await getUsersByUsername({variables:{username}});
      
      if(response.error){
          Alert.alert('Failed to fetch username');
          return 'Failed to fetch username';
      }
      const users = response.data?.usersByUsername?.items;
      if(users && users.length >0 && users?.[0]?.id !== userId){
          return 'Username is already taken';
      }
  } catch (e) {
Alert.alert('Failed to fetch username')
}
return true;

}

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error || updateError || deleteError) {
    return (
      <ApiErrorMessage
        title="Something Went Wroong...!"
        message={error?.message || updateError?.message || deleteError?.message}
      />
    );
  }


  
  const onDeletePress = () => {
    Alert.alert("Are You Sure ", "Deleting your user profile is peramnent", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: startDelete,
      },
    ]);
  };
  const startDelete = async () => {
    if (!user) {
      return;
    }
    /** Delete from DB**/
    await doDelete({
      variables: { input: { id: userId, _version: user?._version } },
    });
    /**Delete from cognito */
    authUser?.deleteUser((err) => {
      if (err) {
        Alert.alert("some thing went wron with signout",(err as Error).message)
      }
      Auth.signOut();
    });
  };

  


  return (
    <View style={styles.page}>
      <Image
        source={{ uri: selectedPhoto?.uri || user.image ||DEFAULT_USER_IMAGE}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change Profile Photo
      </Text>

      <CustomInput
        label="Name"
        name="name"
        control={control}
        rules={{
          required: "name is required",
          minLength: {
            value: 3,
            message: "name must be at least 3 characters",
          },
        }}
      />
      <CustomInput
        label="Username"
        control={control}
        name="username"
        rules={{ required: "username is required",
        validate:validateUsername,
        minLength: {
            value: 3,
            message: "name must be at least 3 characters",
        },
        
    
    }}
      />
      <CustomInput
        label="Website"
        control={control}
        rules={{
          pattern: {
            value: URL_REGEX,
            message: "Invalid url",
          },
        }}
        name="website"
      />
      <CustomInput
        label="Bio"
        multiline
        control={control}
        rules={{
          required: "bio is required",
          maxLength: {
            value: 200,
            message: "Bio must be less than 200 characters",
          },
        }}
        name="bio"
      />
      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        {updateLoading ? "Submitting...!!" : "Submit"}
      </Text>
      <Text
        onPress={handleSubmit(onDeletePress)}
        style={styles.textDeleteButton}
      >
        {deleteLoading ? "Deleting...!!" : "Delete"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    padding: "12%",
  },
  avatar: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: fonts.weight.semi,
    margin: "8%",
  },
  textDeleteButton: {
    color: "red",
    fontSize: 16,
    fontWeight: fonts.weight.semi,
    margin: "8%",
  },
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
});

export default EditProfileScreen;
