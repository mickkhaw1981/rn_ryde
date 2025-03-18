import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React, { ReactNode } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Map from "@/components/Map";

const RideLayout = ({
  title = "Go Back",
  children,
}: {
  title?: string;
  children?: ReactNode;
}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-12 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-md">
                <ArrowLeft size={24} color="#000" />
              </View>
            </TouchableOpacity>
            <View className="flex justify-center">
              <Text className="text-xl font-JakartaSemiBold ml-5 text-black">
                {title}
              </Text>
            </View>
          </View>
          <Map className="flex-1" />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
