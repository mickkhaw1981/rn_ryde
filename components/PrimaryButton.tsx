import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

/**
 * Primary action button component with the app's primary styling
 * Used for main actions like "Next", "Continue", etc.
 */
const PrimaryButton = ({
  title,
  onPress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`w-full bg-primary-500 py-4 rounded-full items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        className={`font-JakartaSemiBold text-white text-base ${textStyles}`}
      >
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
