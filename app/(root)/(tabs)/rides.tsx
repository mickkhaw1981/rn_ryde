import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, View, StyleSheet } from "react-native";

import RideCard from "../../../components/RideCard";

// Import the ride type from the RideCard component
type Driver = {
  driver_id: string;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: string;
};

type Ride = {
  ride_id: string;
  origin_address: string;
  destination_address: string;
  origin_latitude: string;
  origin_longitude: string;
  destination_latitude: string;
  destination_longitude: string;
  ride_time: number;
  fare_price: string;
  payment_status: string;
  driver_id: number;
  user_id: string;
  created_at: string;
  driver: Driver;
};

const Rides = () => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load mock data
    const loadRides = async () => {
      try {
        const mockRides = require("../../../dummy_data/mock_rides.json");
        setRides(mockRides);
      } catch (error) {
        console.error("Error loading rides:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRides();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-jakarta-medium">Loading rides...</Text>
      </SafeAreaView>
    );
  }

  if (rides.length === 0) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-jakarta-medium">No rides found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-6">
        <Text className="text-2xl font-jakarta-bold mb-4">Your Rides</Text>
      </View>
      <FlatList
        data={rides}
        keyExtractor={(item) => item.ride_id}
        renderItem={({ item }) => (
          <RideCard
            ride={item}
            onPress={() => console.log(`Ride ${item.ride_id} pressed`)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Rides;
