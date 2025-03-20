import { create } from "zustand";

import { fetchAPI } from "@/lib/fetch";
import { mapDbDriverToInterface, mapDriverToMarkerData } from "@/lib/utils";
import type {
  LocationStore,
  DriverStore,
  MarkerData,
  Driver,
} from "@/types/type";

// Location store slice
export const useLocationStore = create<LocationStore>((set) => ({
  userLatitude: null,
  userLongitude: null,
  userAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  destinationAddress: null,

  setUserLocation: ({ latitude, longitude, address }) =>
    set({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }),

  setDestinationLocation: ({ latitude, longitude, address }) =>
    set({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    }),
}));

/**
 * Generates random driver locations near the provided user location using real driver data
 * @param userLatitude User's latitude
 * @param userLongitude User's longitude
 * @returns Promise resolving to Array of driver markers with randomized locations
 */
export const generateDriversNearLocation = async (
  userLatitude: number,
  userLongitude: number
): Promise<MarkerData[]> => {
  if (!userLatitude || !userLongitude) return [];

  try {
    // Fetch real driver data from API
    const result = await fetchAPI("/(api)/driver");

    if (!result || !result.data || !result.data.length) {
      console.error("No driver data received from API");
      return [];
    }

    // Map the database drivers to our interface structure
    const drivers = result.data.map(mapDbDriverToInterface);

    // Create a set to track used offsets to prevent drivers from overlapping
    const usedOffsets = new Set<string>();

    // Generate random locations for each driver near the user
    return drivers.map((driver: Driver) => {
      // Generate random offsets between 0.001 and 0.005 (roughly 100m to 500m)
      let latOffset: number;
      let lngOffset: number;
      let offsetKey: string;

      // Make sure each driver has a unique position
      do {
        latOffset =
          (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1);
        lngOffset =
          (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1);
        offsetKey = `${latOffset.toFixed(5)},${lngOffset.toFixed(5)}`;
      } while (usedOffsets.has(offsetKey));

      usedOffsets.add(offsetKey);

      // Calculate new position
      const latitude = userLatitude + latOffset;
      const longitude = userLongitude + lngOffset;

      // Convert driver to MarkerData format with the random location
      const markerData = mapDriverToMarkerData(driver);

      // Override the default latitude and longitude with our calculated values
      return {
        ...markerData,
        latitude,
        longitude,
        // Add estimated time and price for the driver
        time: Math.floor(Math.random() * 15) + 5, // Random time between 5-20 mins
        price: (Math.floor(Math.random() * 20) + 10).toFixed(2), // Random price between $10-$30
      };
    });
  } catch (error) {
    console.error("Error generating drivers near location:", error);
    return [];
  }
};

// Driver store slice
export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [],
  selectedDriver: null,
  setDrivers: (drivers) => set({ drivers }),
  setSelectedDriver: (driverId) => set({ selectedDriver: driverId }),
  clearSelectedDriver: () => set({ selectedDriver: null }),
}));

// Export any other stores from here, e.g.:
// export const useDriverStore = create<DriverStore>((set) => ({ ... }));
