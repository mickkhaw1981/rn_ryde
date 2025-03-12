import { View } from "react-native";

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
  containerStyles?: string;
}

/**
 * Progress indicator component for onboarding screens
 * Shows the current step in a multi-step flow
 */
const ProgressIndicator = ({
  totalSteps,
  currentStep,
  containerStyles = "",
}: ProgressIndicatorProps) => {
  return (
    <View className={`flex-row justify-center items-center ${containerStyles}`}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={index < totalSteps - 1 ? { marginRight: 4 } : {}}
          className={`w-8 h-1 rounded-full ${
            index + 1 === currentStep ? "bg-primary-500" : "bg-general-100"
          }`}
        />
      ))}
    </View>
  );
};

export default ProgressIndicator;
