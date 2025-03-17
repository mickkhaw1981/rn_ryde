import { create } from "zustand";
import type { LocationStore } from "@/types/type";

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

// Export any other stores from here, e.g.:
// export const useDriverStore = create<DriverStore>((set) => ({ ... }));
