/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const {
    state, signup, clearErrorMessage, tryLocalSignin,
  } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <Text>SignupScreen</Text>

      <AuthForm
        errorMessage={state.errorMessage}
        submitButtonText="SignUp"
        onSubmit={signup}
      />
      <Text>Já possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>Fazer o Login</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 16,
    color: 'red',
  },
});

export default SignupScreen;
