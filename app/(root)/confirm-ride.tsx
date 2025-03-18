import { router } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

import DriverCard from "@/components/DriverCard";
import PrimaryButton from "@/components/PrimaryButton";
import RideLayout from "@/components/RideLayout";
import { useDriverStore } from "@/store";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(item.driver_id)}
            item={item}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <PrimaryButton
              title="Select Ride"
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
