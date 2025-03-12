import { useRouter } from "expo-router";
import { useRef, useState } from "react";
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
import { onboarding } from "../../constants";

// Import images directly
const onboardingImages = [
  require("../../assets/images/onboarding1.png"),
  require("../../assets/images/onboarding2.png"),
  require("../../assets/images/onboarding3.png"),
];

const Welcome = () => {
  const router = useRouter();
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastSlide = currentIndex === onboarding.length - 1;

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
      <Swiper
        ref={swiperRef}
        loop={false}
        index={0}
        showsPagination={false}
        onIndexChanged={(index) => setCurrentIndex(index)}
        style={{ flex: 1 }}
      >
        {onboarding.map((item, index) => (
          <View
            key={item.id}
            className="flex-1 w-full items-center justify-center px-6"
          >
            {/* Car and driver image */}
            <Image
              source={onboardingImages[index]}
              className="w-full h-64 object-contain mb-8"
              resizeMode="contain"
            />

            {/* Header text */}
            <Text className="font-JakartaBold text-3xl text-center text-secondary-900 mb-3">
              {item.title}
            </Text>

            {/* Subheader text */}
            <Text className="font-JakartaMedium text-base text-center text-secondary-700 mb-8">
              {item.description}
            </Text>

            {/* Progress indicator */}
            <ProgressIndicator
              totalSteps={onboarding.length}
              currentStep={index + 1}
              containerStyles="mb-8"
            />
          </View>
        ))}
      </Swiper>

      {/* Next button */}
      <View className="w-full px-6 mb-8">
        <PrimaryButton
          title={isLastSlide ? "Get Started" : "Next"}
          onPress={() => {
            if (isLastSlide) {
              router.replace("/(auth)/sign-up");
            } else {
              swiperRef.current?.scrollBy(1);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
