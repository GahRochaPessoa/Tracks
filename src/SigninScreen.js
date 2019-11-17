/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import SignupScreen from './SignupScreen';
import AuthForm from '../components/AuthForm';
import { Context } from '../context/AuthContext';


const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <Text>SigninScreen</Text>
      <AuthForm
        errorMessage={state.errorMessage}
        submitButtonText="SignIn"
        onSubmit={signin}
      />

      <Text>Não possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Cadastre-se Aqui</Text>
      </TouchableOpacity>

    </View>
  );
};
SignupScreen.navigationOptions = () => ({
  header: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SigninScreen;
