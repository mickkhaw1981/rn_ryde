import { Region } from "react-native-maps";

export const calculateRegion = (
  latitude: number,
  longitude: number,
  latitudeDelta = 0.01,
  longitudeDelta = 0.01
): Region => {
  return {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  };
};

export const generateMarkersFromData = (data: {
  userLocation?: { latitude: number; longitude: number } | null;
  destination?: { latitude: number; longitude: number } | null;
}) => {
  const markers = [];

  if (data.userLocation) {
    markers.push({
      id: "user-location",
      coordinate: {
        latitude: data.userLocation.latitude,
        longitude: data.userLocation.longitude,
      },
      title: "Your Location",
      description: "You are here",
      pinColor: "blue",
    });
  }

  if (data.destination) {
    markers.push({
      id: "destination",
      coordinate: {
        latitude: data.destination.latitude,
        longitude: data.destination.longitude,
      },
      title: "Destination",
      description: "Your destination",
      pinColor: "red",
    });
  }

  return markers;
};
