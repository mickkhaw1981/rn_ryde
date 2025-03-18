import { useUser, useAuth } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { LogOut } from "lucide-react-native";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";
import RideCard from "@/components/RideCard";
import mockRides from "@/dummy_data/mock_rides.json";
import { getCurrentLocation, getAddressFromCoordinates } from "@/lib/location";
import { useLocationStore } from "@/store";

import type { Ride } from "@/types/type";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [rides, setRides] = useState<any[]>([]);
  const [locationError, setLocationError] = useState<string | null>(null);
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const router = useRouter();

  // Simulate loading data with normal timing and initialize location
  useEffect(() => {
    const loadData = async () => {
      try {
        // Initialize user location
        const location = await getCurrentLocation();

        if (location) {
          const address = await getAddressFromCoordinates(
            location.latitude,
            location.longitude
          );

          setUserLocation({
            latitude: location.latitude,
            longitude: location.longitude,
            address,
          });
        }
      } catch (err) {
        console.error("Error getting location:", err);
        setLocationError(
          "Unable to access your location. Please check your permissions."
        );
      }

      // Load mock rides data
      setRides(mockRides);
      setLoading(false);
    };

    loadData();
  }, []);

  // Handle user logout
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => signOut(),
      },
    ]);
  };

  // Handle location selection
  const handleLocationSelect = ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    console.log("Selected location:", { latitude, longitude, address });

    // Set as destination in the store
    setDestinationLocation({
      latitude,
      longitude,
      address,
    });

    // Uncomment when you have a map route
    // router.push({
    //   pathname: "/map",
    //   params: { latitude, longitude, address },
    // });
  };

  // Header component based on Figma design
  const ListHeaderComponent = () => {
    return (
      <View>
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Text className="text-2xl font-JakartaBold text-gray-800">
              Welcome {user?.firstName || "User"}
            </Text>
          </View>

          <View className="flex-row items-center gap-x-2">
            <TouchableOpacity
              className="w-10 h-10 rounded-full bg-white justify-center items-center shadow-sm shadow-gray-300"
              onPress={handleLogout}
            >
              <LogOut size={20} color="#2F80ED" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>

        <GoogleTextInput
          icon="search"
          initialLocation="Where do you want to go?"
          containerStyle=""
          textInputBackgroundColor="#FFFFFF"
          handlePress={handleLocationSelect}
        />

        {/* Explicit spacing */}
        <View style={{ height: 20 }} />

        <Text className="text-xl font-JakartaBold text-gray-800 mb-4">
          Your Current Location
        </Text>

        {locationError ? (
          <View className="h-[200px] bg-gray-100 rounded-2xl flex items-center justify-center p-4">
            <Text className="text-red-500 text-center">{locationError}</Text>
          </View>
        ) : (
          <View>
            <Map />
          </View>
        )}

        {/* Explicit spacing */}
        <View style={{ height: 20 }} />

        <Text className="text-xl font-JakartaBold text-gray-800 mb-4">
          Recent Rides
        </Text>
      </View>
    );
  };

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
        <FlatList
          data={rides}
          renderItem={({ item }) => <RideCard ride={item} />}
          keyExtractor={(item) => item.ride_id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          className="px-5"
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={ListEmptyComponent}
          ListHeaderComponent={ListHeaderComponent}
        />
      </View>
    </SafeAreaView>
  );
}
