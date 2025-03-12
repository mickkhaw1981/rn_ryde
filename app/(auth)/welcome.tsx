import { useRouter } from "expo-router";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

import PrimaryButton from "../../components/PrimaryButton";
import ProgressIndicator from "../../components/ProgressIndicator";

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      {/* Skip button */}
      <View className="w-full flex items-end px-6 pt-2">
        <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
          <Text className="font-JakartaMedium text-base text-secondary-900">
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View className="flex-1 w-full items-center justify-center px-6">
        {/* Car and driver image */}
        <Image
          source={require("../../assets/images/onboarding1.png")}
          className="w-full h-64 object-contain mb-8"
          resizeMode="contain"
        />

        {/* Header text */}
        <Text className="font-JakartaBold text-3xl text-center text-secondary-900 mb-3">
          The best car in your hands with{" "}
          <Text className="text-primary-500">Ryde</Text>
        </Text>

        {/* Subheader text */}
        <Text className="font-JakartaMedium text-base text-center text-secondary-700 mb-8">
          Discover the convenience of finding your perfect ride with our Ryde
          App
        </Text>

        {/* Progress indicator */}
        <ProgressIndicator
          totalSteps={3}
          currentStep={1}
          containerStyles="mb-8"
        />
      </View>

      {/* Next button */}
      <View className="w-full px-6 mb-8">
        <PrimaryButton title="Next" onPress={() => router.push("/")} />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
