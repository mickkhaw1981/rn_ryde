import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";

import DriverCard from "@/components/DriverCard";
import PrimaryButton from "@/components/PrimaryButton";
import RideLayout from "@/components/RideLayout";
import { fetchAPI } from "@/lib/fetch";
import {
  mapDbDriverToInterface,
  mapDbResults,
  mapDriverToMarkerData,
} from "@/lib/utils";
import { useDriverStore } from "@/store";

import type { Driver, MarkerData } from "@/types/type";

const ConfirmRide = () => {
  const {
    setDrivers: setStoreDrivers,
    selectedDriver,
    setSelectedDriver,
  } = useDriverStore();
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch drivers from the Neon database
  const fetchDrivers = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Fetching drivers from API...");
      const result = await fetchAPI("/(api)/driver");

      if (result && result.data) {
        console.log(
          `Successfully received ${result.data.length} drivers from API`
        );

        // Use the utility function to map the database drivers to our interface structure
        const mappedDrivers = mapDbResults(result.data, mapDbDriverToInterface);
        setDrivers(mappedDrivers);

        // Also update the driver store to maintain compatibility
        setStoreDrivers(
          mappedDrivers.map((driver) => mapDriverToMarkerData(driver))
        );
      } else {
        setError("No drivers found");
      }
    } catch (err) {
      console.error("Error fetching drivers:", err);
      setError("Failed to load drivers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  if (loading) {
    return (
      <RideLayout title="Loading Drivers...">
        <View className="flex items-center justify-center h-60">
          <ActivityIndicator size="large" color="#0000ff" />
          <Text className="mt-4 text-center">Loading available drivers...</Text>
        </View>
      </RideLayout>
    );
  }

  if (error) {
    return (
      <RideLayout title="Error" snapPoints={["65%", "85%"]}>
        <View className="flex items-center justify-center h-60">
          <Text className="text-red-500 text-center">{error}</Text>
          <PrimaryButton
            title="Try Again"
            onPress={fetchDrivers}
            className="mt-4"
          />
        </View>
      </RideLayout>
    );
  }

  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => {
          // Convert to MarkerData type for the DriverCard using the utility
          const driverAsMarkerData = mapDriverToMarkerData(item);
          return (
            <DriverCard
              selected={selectedDriver || 0}
              setSelected={() => setSelectedDriver(Number(item.driver_id))}
              item={driverAsMarkerData}
            />
          );
        }}
        keyExtractor={(item) => `driver-${item.driver_id}`}
        ListEmptyComponent={() => (
          <View className="flex items-center justify-center h-60">
            <Text className="text-center">
              No drivers available at the moment
            </Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <PrimaryButton
              title="Select Ride"
              disabled={!selectedDriver}
              onPress={() => {
                router.push("/(root)/book-ride");
              }}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
