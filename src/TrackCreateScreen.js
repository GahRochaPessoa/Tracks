/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Map from '../components/map';


const TrackCreateScreen = () => (
  <View style={styles.container}>
    <Text>TrackCreateScreen</Text>
    <Map />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default TrackCreateScreen;
