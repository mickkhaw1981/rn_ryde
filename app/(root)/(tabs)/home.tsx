import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import type { Ride } from "@/types/type";

import RideCard from "@/components/RideCard";
import mockRides from "@/dummy_data/mock_rides.json";

// Define the type for a ride item
// type Driver = { ... }
// type RideItem = { ... }

export default function Page() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [rides, setRides] = useState<any[]>([]);

  // Simulate loading data with normal timing
  useEffect(() => {
    const timer = setTimeout(() => {
      // Load mock rides data
      setRides(mockRides);
      setLoading(false);
    }, 800); // Reasonable loading time for a good UX

    return () => clearTimeout(timer);
  }, []);

  // Empty component to handle both loading and empty states
  const ListEmptyComponent = () => {
    if (loading) {
      return (
        <View className="flex-1 items-center justify-center mt-10">
          <ActivityIndicator size="large" color="#2F80ED" />
          <Text className="mt-4 text-gray-500 font-JakartaMedium">
            Loading rides...
          </Text>
        </View>
      );
    }

    return (
      <View className="flex-1 items-center justify-center mt-10">
        <Image
          source={require("../../../assets/images/no-result.png")}
          className="w-60 h-60"
          resizeMode="contain"
        />
        <Text className="mt-4 text-lg font-JakartaBold">No rides found</Text>
        <Text className="mt-2 text-gray-500 font-JakartaMedium text-center px-10">
          You haven't taken any rides yet. Book your first ride now!
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-general-500">
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold mb-4">Recent Rides</Text>
        <FlatList
          data={rides}
          renderItem={({ item }) => <RideCard ride={item} />}
          keyExtractor={(item) => item.ride_id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          className="px-5"
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </SafeAreaView>
  );
}
