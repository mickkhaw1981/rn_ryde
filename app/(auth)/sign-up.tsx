import { Link } from "expo-router";
import { Lock, Mail, User } from "lucide-react-native";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import PrimaryButton from "@/components/PrimaryButton";
import { icons, images } from "@/constants";

const SignUp = () => {
  // State for form fields
  const [form, setForm] = useState({
    name: "",
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
  const onSignUpPress = () => {
    setIsSubmitting(true);
    console.log(form);
    // Simulate API call completion
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ImageBackground
        source={images.signUpCar}
        className="w-full h-full"
        resizeMode="cover"
      >
        {/* Gradient overlay */}
        <View className="w-full h-full bg-gradient-to-b from-transparent to-white">
          <ScrollView>
            <View className="w-full px-6 pt-16 pb-8">
              {/* Heading */}
              <Text className="text-2xl font-JakartaBold text-[#333333] mb-6">
                Create Your Account
              </Text>

              {/* Form Fields */}
              <View className="space-y-4 mb-6">
                <FormField
                  title="Name"
                  placeholder="Enter name"
                  value={form.name}
                  handleChangeText={(text: string) => {
                    setForm((prevForm) => ({
                      ...prevForm,
                      name: text,
                    }));
                  }}
                  icon={<User size={20} color="#858585" />}
                />

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

              {/* Sign Up Button */}
              <PrimaryButton
                title="Sign Up"
                onPress={onSignUpPress}
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
                  Already have an account?{" "}
                </Text>
                <Link
                  href="/sign-in"
                  className="text-[17px] font-JakartaMedium text-primary-500"
                >
                  Log in
                </Link>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
