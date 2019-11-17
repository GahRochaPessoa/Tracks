import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  const points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: -22.41376 + i * 0.001,
        longitude: -45.4501775 + i * 0.001,
      });
    } else {
      points.push({
        latitude: -22.41376 - i * 0.002,
        longitude: -45.4501775 - i * 0.002,
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -22.41376,
        longitude: -45.4501775,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
  >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
    width: '100%',
  },
});

export default Map;
