import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";
import { formatTime } from "@/lib/utils";
import { DriverCardProps } from "@/types/type";

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
  // Get the ID correctly whether it's from mock data (id) or database-mapped data (driver_id)
  // Using type assertion to handle both structure types
  const driverId = (item as any).driver_id || item.id;

  return (
    <TouchableOpacity
      onPress={setSelected}
      className={`${
        selected === driverId ? "bg-general-600" : "bg-white"
      } flex flex-row items-center justify-between py-5 px-3 rounded-xl`}
    >
      <Image
        source={{
          uri: item.profile_image_url || "https://via.placeholder.com/50",
        }}
        className="w-14 h-14 rounded-full"
      />

      <View className="flex-1 flex flex-col items-start justify-center mx-3">
        <View className="flex flex-row items-center justify-start mb-1">
          <Text className="text-lg font-JakartaRegular">
            {item.title || `${item.first_name || ""} ${item.last_name || ""}`}
          </Text>

          <View className="flex flex-row items-center space-x-1 ml-2">
            <Image source={icons.star} className="w-3.5 h-3.5" />
            <Text className="text-sm font-JakartaRegular">
              {item.rating !== undefined ? item.rating : "N/A"}
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-start">
          <View className="flex flex-row items-center">
            <Image source={icons.dollar} className="w-4 h-4" />
            <Text className="text-sm font-JakartaRegular ml-1">
              ${item.price || "10.00"}
            </Text>
          </View>

          <Text className="text-sm font-JakartaRegular text-general-800 mx-1">
            |
          </Text>

          <Text className="text-sm font-JakartaRegular text-general-800">
            {item.time !== undefined ? formatTime(item.time) : "10 min"}
          </Text>

          <Text className="text-sm font-JakartaRegular text-general-800 mx-1">
            |
          </Text>

          <Text className="text-sm font-JakartaRegular text-general-800">
            {item.car_seats || "4"} seats
          </Text>
        </View>
      </View>

      <Image
        source={{ uri: item.car_image_url || "https://via.placeholder.com/50" }}
        className="h-14 w-14"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default DriverCard;
