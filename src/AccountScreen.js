/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const AccountScreen = () => (
  <View style={styles.container}>
    <Text>AccountScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
