import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Text, Input, Icon, Button,
} from 'react-native-elements';


const AuthForm = ({ errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
        leftIcon={(
          <Icon
            type="material"
            name="people"
            size={24}
            color="black"
          />
      )}
      />

      <Input
        onChangeText={setPassword}
        placeholder="Senha"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value={password}
        leftIcon={(
          <Icon
            name="lock"
            size={24}
            color="black"
          />
      )}
      />

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 350,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});


export default AuthForm;
