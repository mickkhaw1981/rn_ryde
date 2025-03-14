import { Search, MapPin } from "lucide-react-native";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

// Define the props interface
interface GoogleTextInputProps {
  icon?: string; // 'search' or 'location'
  initialLocation?: string;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

const GoogleTextInput: React.FC<GoogleTextInputProps> = ({
  icon = "search",
  initialLocation = "Where do you want to go?",
  containerStyle = "",
  textInputBackgroundColor = "#FFFFFF",
  handlePress,
}) => {
  // Stub function for demonstration
  const handleInputPress = () => {
    // In a real implementation, this would open a Google Places Autocomplete
    // For now, we'll just call handlePress with dummy data
    handlePress({
      latitude: 37.7749,
      longitude: -122.4194,
      address: "San Francisco, CA, USA",
    });
  };

  return (
    <TouchableOpacity
      onPress={handleInputPress}
      activeOpacity={0.8}
      className={`flex-row items-center border border-[#EBEBEB] rounded-full px-4 py-3 ${containerStyle}`}
      style={{ backgroundColor: textInputBackgroundColor }}
    >
      <View className="mr-3">
        {icon === "search" ? (
          <Search size={20} color="#333333" strokeWidth={1.5} />
        ) : (
          <MapPin size={20} color="#333333" strokeWidth={1.5} />
        )}
      </View>

      <Text
        className="text-[#ADADAD] font-JakartaRegular text-base flex-1"
        numberOfLines={1}
      >
        {initialLocation}
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleTextInput;
