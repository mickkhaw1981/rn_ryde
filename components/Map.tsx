import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { icons } from "@/constants";
import { calculateRegion, generateMarkersFromData } from "@/lib/map";
import {
  useLocationStore,
  useDriverStore,
  generateDriversNearLocation,
} from "@/store";

import type { MapProps } from "@/types/type";

// Add an extended type for our custom marker
type ExtendedMarker = {
  id: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
  pinColor?: string;
  isDriver?: boolean;
  driver?: any;
};

const Map: React.FC<MapProps> = ({
  destinationLatitude: propDestinationLatitude,
  destinationLongitude: propDestinationLongitude,
  onDriverTimesCalculated,
  selectedDriver,
  onMapReady,
}) => {
  // Reference to the map component to programmatically control it (e.g., for animations)
  const mapRef = useRef<MapView>(null);
  const {
    userLatitude,
    userLongitude,
    destinationLatitude: storeDestinationLatitude,
    destinationLongitude: storeDestinationLongitude,
  } = useLocationStore();
  const { drivers, setDrivers } = useDriverStore();
  const [region, setRegion] = useState<any>(null);

  // Use props destination if provided, otherwise use store values
  const destinationLatitude =
    propDestinationLatitude ?? storeDestinationLatitude;
  const destinationLongitude =
    propDestinationLongitude ?? storeDestinationLongitude;

  // Generate driver locations when user location changes
  useEffect(() => {
    // TODO: Remove this when we have real driver data
    setDrivers(drivers);

    if (userLatitude && userLongitude) {
      const newRegion = calculateRegion(userLatitude, userLongitude);
      setRegion(newRegion);

      // Animate to user's location when it changes
      mapRef.current?.animateToRegion(newRegion, 1000);

      // Generate driver locations near user
      const generatedDrivers = generateDriversNearLocation(
        userLatitude,
        userLongitude
      );
      setDrivers(generatedDrivers);

      // If callback for driver times is provided, call it with the generated drivers
      if (onDriverTimesCalculated) {
        onDriverTimesCalculated(generatedDrivers);
      }
    }
  }, [userLatitude, userLongitude, setDrivers, onDriverTimesCalculated]);

  // Notify when map is ready
  const handleMapReady = () => {
    if (onMapReady) {
      onMapReady();
    }
  };

  const markers = generateMarkersFromData(
    {
      userLocation:
        userLatitude && userLongitude
          ? { latitude: userLatitude, longitude: userLongitude }
          : null,
      destination:
        destinationLatitude && destinationLongitude
          ? { latitude: destinationLatitude, longitude: destinationLongitude }
          : null,
    },
    drivers
  ) as ExtendedMarker[];

  if (!region) {
    // Default region until we get user location
    return (
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
        onMapReady={handleMapReady}
      />
    );
  }

  return (
    <MapView
      ref={mapRef}
      style={StyleSheet.absoluteFillObject}
      showsPointsOfInterest={false}
      showsUserLocation={true}
      mapType="mutedStandard"
      userInterfaceStyle="light"
      region={region}
      onMapReady={handleMapReady}
    >
      {markers.map(
        (marker) =>
          marker && (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              pinColor={marker.pinColor}
            >
              {marker.isDriver && (
                <Image
                  source={icons.marker}
                  style={{
                    width: 32,
                    height: 32,
                    tintColor:
                      marker.id === `driver-${selectedDriver}`
                        ? "#00a3ff"
                        : "#000",
                  }}
                  resizeMode="contain"
                />
              )}
            </Marker>
          )
      )}
    </MapView>
  );
};

export default Map;
