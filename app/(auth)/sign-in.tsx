import { Link } from "expo-router";
import { Lock, Mail, User } from "lucide-react-native";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import PrimaryButton from "@/components/PrimaryButton";
import { icons, images } from "@/constants";

const SignIn = () => {
  // State for form fields
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // State for Sign Up button loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
  };

  // Handle Sign Up button press
  const onSignInPress = () => {
    setIsSubmitting(true);
    console.log(form);
    // Simulate API call completion
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="flex-1">
        {/* Header Image Section */}
        <View className="h-[220px] w-full">
          <ImageBackground
            source={images.signUpCar}
            className="w-full h-full"
            resizeMode="cover"
          >
            {/* Gradient overlay */}
            <View className="w-full h-full bg-gradient-to-b from-transparent to-white"></View>
          </ImageBackground>
        </View>

        {/* Content Section */}
        <View className="w-full px-6 pt-4 pb-8">
          {/* Heading */}
          <Text className="text-2xl font-JakartaBold text-[#333333] mb-6">
            Welcome 👋
          </Text>

          {/* Form Fields */}
          <View className="mb-6">
            <View className="mb-4">
              <FormField
                title="Email"
                placeholder="Enter email"
                value={form.email}
                handleChangeText={(text: string) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    email: text,
                  }));
                }}
                keyboardType="email-address"
                icon={<Mail size={20} color="#858585" />}
              />
            </View>

            <View>
              <FormField
                title="Password"
                placeholder="Enter password"
                value={form.password}
                handleChangeText={(text: string) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    password: text,
                  }));
                }}
                secureTextEntry
                icon={<Lock size={20} color="#858585" />}
              />
            </View>
          </View>

          {/* Sign Up Button */}
          <PrimaryButton
            title="Sign In"
            onPress={onSignInPress}
            bgVariant="primary"
            textVariant="default"
            isLoading={isSubmitting}
            className="shadow-md"
          />

          {/* Divider */}
          <Divider text="Or" />

          {/* Google Sign In Button */}
          <PrimaryButton
            title="Log In with Google"
            onPress={handleGoogleSignIn}
            bgVariant="outline"
            textVariant="primary"
            IconLeft={({ size, color, style }) => (
              <Image
                source={icons.google}
                style={[{ width: size, height: size }, style]}
              />
            )}
          />

          {/* Already have an account */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-[17px] font-JakartaMedium text-[#858585]">
              Don't have an account?{" "}
            </Text>
            <Link
              href="/sign-up"
              className="text-[17px] font-JakartaMedium text-primary-500"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
