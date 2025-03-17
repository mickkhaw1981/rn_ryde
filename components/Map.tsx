import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View className="h-[200px] mb-10 rounded-2xl overflow-hidden relative">
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map;
