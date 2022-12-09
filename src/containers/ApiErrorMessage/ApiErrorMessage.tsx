import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import image from './error.png';
import colors from '../../theme/colors';
import Buttons from '../../components/Buttons';

interface ApiErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ApiErrorMessage = ({
  title = 'Error',
  message = 'Unknown Error',
  onRetry = () => {},

}: ApiErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Buttons text="Retry" onPress={onRetry}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    padding: "8%",
  },
  image: {
    width: '70%',
    height: "30%",
  },
  title: {
    fontSize: 18,
    margin: "4%",
  },
  message: {
    color: colors.grey,
    marginBottom: "2%",
  },
});

export default ApiErrorMessage;
