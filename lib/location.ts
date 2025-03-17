import * as Location from "expo-location";
import { Platform } from "react-native";

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === "granted";
  } catch (error) {
    console.error("Error requesting location permission:", error);
    return false;
  }
};

export const getCurrentLocation = async () => {
  try {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      throw new Error("Location permission not granted");
    }

    const options = {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 5000,
    };

    const location = await Location.getCurrentPositionAsync(options);

    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      timestamp: location.timestamp,
    };
  } catch (error) {
    console.error("Error getting current location:", error);
    throw error;
  }
};

export const getAddressFromCoordinates = async (
  latitude: number,
  longitude: number
): Promise<string | null> => {
  try {
    const addressResponse = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    if (addressResponse && addressResponse.length > 0) {
      const address = addressResponse[0];
      const formattedAddress = [
        address.name,
        address.street,
        address.city,
        address.region,
        address.postalCode,
        address.country,
      ]
        .filter(Boolean)
        .join(", ");

      return formattedAddress;
    }

    return null;
  } catch (error) {
    console.error("Error getting address from coordinates:", error);
    return null;
  }
};
