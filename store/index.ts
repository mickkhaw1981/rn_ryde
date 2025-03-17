import { create } from "zustand";

import mockDrivers from "@/dummy_data/mock_drivers";

import type { LocationStore, DriverStore, MarkerData } from "@/types/type";

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
 * Generates random driver locations near the provided user location
 * @param userLatitude User's latitude
 * @param userLongitude User's longitude
 * @returns Array of driver markers with randomized locations
 */
export const generateDriversNearLocation = (
  userLatitude: number,
  userLongitude: number
): MarkerData[] => {
  if (!userLatitude || !userLongitude) return [];

  // Create a set to track used offsets to prevent drivers from overlapping
  const usedOffsets = new Set<string>();

  return mockDrivers.map((driver) => {
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

    // Convert driver to MarkerData format
    return {
      id: driver.driver_id,
      latitude,
      longitude,
      title: `${driver.first_name} ${driver.last_name}`,
      profile_image_url: driver.profile_image_url,
      car_image_url: driver.car_image_url,
      car_seats: driver.car_seats,
      rating: driver.rating,
      first_name: driver.first_name,
      last_name: driver.last_name,
    };
  });
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
