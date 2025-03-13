import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { icons } from "@/constants";

// Get screen dimensions for responsive layout
const { width } = Dimensions.get("window");

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View className="flex justify-center items-center">
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${
        focused ? "bg-[#4CAF50]" : "transparent"
      }`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom:
            Platform.OS === "ios" ? (insets.bottom > 0 ? 25 : 20) : 15,
          height: 70,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
