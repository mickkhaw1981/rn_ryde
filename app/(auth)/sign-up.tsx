import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { Lock, Mail, User } from "lucide-react-native";
import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import ReactNativeModal from "react-native-modal";

import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import PrimaryButton from "@/components/PrimaryButton";
import { icons, images } from "@/constants";
import { fetchAPI } from "@/lib/fetch";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // State for form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    // state: "success", //for testing the modal
    error: "",
    code: "",
  });

  // State for Sign Up button loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
  };

  // From Clerk - Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    setIsSubmitting(true);

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
        firstName: form.name,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setVerification({
        state: "pending",
        error: "",
        code: "",
      });
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      Alert.alert("Error", err.errors?.[0]?.longMessage || "Sign up failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  // From Clerk - Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        // Create user in database
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: signUpAttempt.createdUserId,
          }),
        });
        await setActive({ session: signUpAttempt.createdSessionId });
        setVerification({
          ...verification,
          state: "success",
          error: "Verification successful",
        });
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        setVerification({
          ...verification,
          state: "failed",
          error: "Verification failed",
        });
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setVerification({
        ...verification,
        state: "failed",
        error: err.errors?.[0]?.message || "Verification failed",
      });
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          className="flex-1"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
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
              Create Your Account
            </Text>
            {/* Form Fields */}
            <View className="mb-6">
              <View className="mb-4">
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
              </View>

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
                Sign In
              </Link>
            </View>
            {/* Pending state modal */}
            <ReactNativeModal
              isVisible={verification.state === "pending"}
              onModalHide={() => {
                if (verification.state === "success") {
                  setShowSuccessModal(true);
                }
              }}
            >
              <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                <Text className="text-2xl text-center font-JakartaBold text-stone-950 mb-6">
                  Verification
                </Text>
                <Text className="text-base text-center font-JakartaMedium text-stone-500 mb-6">
                  We've sent a verification code to {form.email}
                </Text>
                <FormField
                  title="Code"
                  icon={<Lock size={20} color="#858585" />}
                  value={verification.code}
                  keyboardType="number-pad"
                  handleChangeText={(text: string) => {
                    setVerification((prev) => ({ ...prev, code: text }));
                  }}
                  placeholder="123456"
                />
                {/* handle verifircation error */}
                {verification.error && (
                  <Text className="text-red-500 text-center font-JakartaMedium mb-6">
                    {verification.error}
                  </Text>
                )}
                <PrimaryButton
                  title="Verify"
                  onPress={onVerifyPress}
                  className="mt-5 bg-success-500"
                />
              </View>
            </ReactNativeModal>
            {/* Success state modal */}
            <ReactNativeModal isVisible={showSuccessModal}>
              <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                <Image
                  source={images.check}
                  className="w-[80px] h-[80px] mx-auto my-5"
                />
                <Text className="text-2xl text-center font-JakartaBold text-stone-950 mb-6">
                  Verification successful
                </Text>
                <Text className="text-base text-center font-JakartaMedium text-stone-500 mb-6">
                  You have successfully verified your account.
                </Text>
                <PrimaryButton
                  title="Go to Home"
                  onPress={() => {
                    setShowSuccessModal(false);
                    router.push("/(root)/(tabs)/home");
                  }}
                  bgVariant="primary"
                  textVariant="default"
                  className="mt-5"
                />
              </View>
            </ReactNativeModal>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
