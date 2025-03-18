import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import GoogleTextInput from "@/components/GoogleTextInput";
import PrimaryButton from "@/components/PrimaryButton";
import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";

const FindRide = () => {
  const router = useRouter();
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  const handleBack = () => {
    router.back();
  };

  return (
    <RideLayout title="Ride">
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
        <GoogleTextInput
          icon="location"
          initialLocation={userAddress!}
          handlePress={(location) => setUserLocation(location)}
          placeholder="Enter your location"
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
        />
      </View>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
        <GoogleTextInput
          icon="crosshair"
          initialLocation={destinationAddress!}
          handlePress={(location) => setDestinationLocation(location)}
          placeholder="Enter your location"
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#transparent"
        />
      </View>
      <PrimaryButton
        title="Find Ride"
        onPress={() => router.push("/(root)/confirm-ride")}
        className="mt-5"
      />
    </RideLayout>
  );
};

export default FindRide;
