import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { calculateRegion, generateMarkersFromData } from "@/lib/map";
import { useLocationStore } from "@/store";

const Map = () => {
  // Reference to the map component to programmatically control it (e.g., for animations)
  const mapRef = useRef<MapView>(null);
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const [region, setRegion] = useState<any>(null);

  useEffect(() => {
    if (userLatitude && userLongitude) {
      const newRegion = calculateRegion(userLatitude, userLongitude);
      setRegion(newRegion);

      // Animate to user's location when it changes
      mapRef.current?.animateToRegion(newRegion, 1000);
    }
  }, [userLatitude, userLongitude]);

  const markers = generateMarkersFromData({
    userLocation:
      userLatitude && userLongitude
        ? { latitude: userLatitude, longitude: userLongitude }
        : null,
    destination:
      destinationLatitude && destinationLongitude
        ? { latitude: destinationLatitude, longitude: destinationLongitude }
        : null,
  });

  if (!region) {
    // Default region until we get user location
    return (
      <View className="h-[200px] mb-10 rounded-2xl overflow-hidden relative">
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFillObject}
          showsPointsOfInterest={false}
          showsUserLocation={true}
          mapType="mutedStandard"
          userInterfaceStyle="light"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }

  return (
    <View className="h-[200px] mb-10 rounded-2xl overflow-hidden relative">
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        mapType="mutedStandard"
        userInterfaceStyle="light"
        region={region}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
