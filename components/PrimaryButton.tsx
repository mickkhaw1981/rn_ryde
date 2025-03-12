import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";

import { ButtonProps } from "../types/type";

/**
 * Primary action button component with the app's primary styling
 * Used for main actions like "Next", "Continue", etc.
 */
const PrimaryButton = ({
  title,
  onPress,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  isLoading = false,
  className = "",
  ...rest
}: ButtonProps & { isLoading?: boolean }) => {
  // Helper function to get background style based on variant
  const getBgVariantStyle = (variant: string): string => {
    switch (variant) {
      case "primary":
        return "bg-primary-500";
      case "secondary":
        return "bg-gray-500";
      case "danger":
        return "bg-red-500";
      case "success":
        return "bg-green-500";
      case "outline":
        return "bg-transparent border-neutral-300 border-[0.5px]";
      default:
        return "bg-[#0286FF]";
    }
  };

  // Helper function to get text style based on variant
  const getTextVariantStyle = (variant: string): string => {
    switch (variant) {
      case "primary":
        return "text-black";
      case "secondary":
        return "text-gray-100";
      case "danger":
        return "text-red-100";
      case "success":
        return "text-green-100";
      default:
        return "text-white";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`w-full ${getBgVariantStyle(bgVariant)} py-4 rounded-full items-center ${className} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      {...rest}
    >
      <View className="flex-row items-center justify-center">
        {IconLeft && (
          <IconLeft
            size={20}
            color={textVariant === "primary" ? "#FFFFFF" : "#1E293B"}
            style={{ marginRight: 8 }}
          />
        )}

        <Text
          className={`font-JakartaSemiBold ${getTextVariantStyle(textVariant)} text-base`}
        >
          {title}
        </Text>

        {IconRight && (
          <IconRight
            size={20}
            color={textVariant === "primary" ? "#FFFFFF" : "#1E293B"}
            style={{ marginLeft: 8 }}
          />
        )}

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#fff"
            size="small"
            className="ml-2"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
