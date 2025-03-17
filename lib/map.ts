import { Region } from "react-native-maps";
import type { MarkerData } from "@/types/type";

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

/**
 * Generates map markers from location data and optional driver data
 * @param data Object containing user location and destination coordinates
 * @param drivers Optional array of driver marker data
 * @returns Array of marker objects for the map
 */
export const generateMarkersFromData = (
  data: {
    userLocation?: { latitude: number; longitude: number } | null;
    destination?: { latitude: number; longitude: number } | null;
  },
  drivers?: MarkerData[]
) => {
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

  // Add driver markers if provided
  if (drivers && drivers.length > 0) {
    drivers.forEach((driver) => {
      markers.push({
        id: `driver-${driver.id}`,
        coordinate: {
          latitude: driver.latitude,
          longitude: driver.longitude,
        },
        title: driver.title,
        description: `Rating: ${driver.rating}`,
        isDriver: true,
        driver: driver,
      });
    });
  }

  return markers;
};
