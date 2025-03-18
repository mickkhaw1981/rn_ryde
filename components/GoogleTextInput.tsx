import Constants from "expo-constants";
import { MapPin } from "lucide-react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import {
  getIconByName,
  getClearIcon,
  SUGGESTION_ICON_SIZE,
  SUGGESTION_ICON_COLOR,
} from "@/components/icons";

// Define a Suggestion type if not imported
interface Suggestion {
  id: string;
  mainText: string;
  secondaryText: string;
}

// Define the props interface
interface GoogleTextInputProps {
  icon?: string; // 'search' or 'location' or 'crosshair'
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
  placeholder?: string;
}

const GoogleTextInput: React.FC<GoogleTextInputProps> = ({
  icon = "search",
  initialLocation = "Where do you want to go?",
  containerStyle = "",
  textInputBackgroundColor = "#FFFFFF",
  handlePress,
  placeholder = "Where do you want to go?",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize session token for Google Places API
  useEffect(() => {
    // Create a random session token
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setSessionToken(token);
    console.log("Session token created:", token);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  // Fallback mock data function
  const getMockSuggestions = (input: string): Suggestion[] => {
    return [
      {
        id: "1",
        mainText: `${input} City Center`,
        secondaryText: "Downtown, Main Area",
      },
      {
        id: "2",
        mainText: `${input} Airport`,
        secondaryText: "International Airport",
      },
      {
        id: "3",
        mainText: `${input} Mall`,
        secondaryText: "Shopping Center",
      },
    ];
  };

  // Fetch place suggestions from Google Places API
  const fetchSuggestions = async (input: string) => {
    if (!input || input.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log("Fetching suggestions for:", input);

      // Get API key from environment variables
      const apiKey =
        Constants.expoConfig?.extra?.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ||
        process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

      console.log("API Key available:", !!apiKey);

      if (!apiKey) {
        throw new Error("Google Maps API key not found");
      }

      // Using the Places API (V1) endpoint
      const url = "https://places.googleapis.com/v1/places:autocomplete";

      // Prepare the request body based on the exact API documentation format
      const requestBody = {
        input: input,
        sessionToken: sessionToken,
        locationBias: {
          circle: {
            center: {
              latitude: 37.7749, // Default to San Francisco
              longitude: -122.4194,
            },
            radius: 5000.0,
          },
        },
      };

      console.log("Request body:", JSON.stringify(requestBody));

      // Make the request using the new API format
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "suggestions.placePrediction.place,suggestions.placePrediction.placeId,suggestions.placePrediction.structuredFormat",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log(
        "API Response:",
        JSON.stringify(data).substring(0, 200) + "..."
      );

      // If there's an error in the response
      if (data.error) {
        console.error("API Error:", data.error);
        throw new Error(data.error.message || "Unknown API error");
      }

      // Check if we have suggestions in the response
      if (!data.suggestions || data.suggestions.length === 0) {
        console.log("No suggestions in response");
        setSuggestions([]);
        return;
      }

      // Transform suggestions to our format based on the new API response structure
      const formattedSuggestions: Suggestion[] = data.suggestions
        .filter((suggestion: any) => suggestion.placePrediction) // Only include place predictions
        .map((suggestion: any) => {
          const placePrediction = suggestion.placePrediction;
          return {
            id: placePrediction.placeId || placePrediction.place,
            mainText:
              placePrediction.structuredFormat?.mainText?.text ||
              placePrediction.text?.text ||
              "Unknown place",
            secondaryText:
              placePrediction.structuredFormat?.secondaryText?.text || "",
          };
        });

      console.log("Formatted suggestions:", formattedSuggestions.length);
      setSuggestions(formattedSuggestions);
    } catch (err) {
      console.error("Error fetching place suggestions:", err);
      setError("Failed to fetch suggestions. Please try again.");
      Alert.alert(
        "Error",
        "Failed to fetch suggestions: " +
          (err instanceof Error ? err.message : String(err))
      );

      // Fallback to mock data in case of API error
      console.log("Falling back to mock data due to API error");
      const mockSuggestions = getMockSuggestions(input);
      setSuggestions(mockSuggestions);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes with debounce
  const handleInputChange = (text: string) => {
    console.log("Input changed:", text);
    setInputValue(text);
    setShowSuggestions(true);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      fetchSuggestions(text);
    }, 300);
  };

  // Handle suggestion selection
  const handleSuggestionPress = (suggestion: Suggestion) => {
    console.log("Selected suggestion:", suggestion);
    setInputValue(suggestion.mainText);
    setSuggestions([]);
    setShowSuggestions(false);
    setIsFocused(false);
    Keyboard.dismiss();

    // Call the parent component's handlePress with the selected location
    // For now, we're using dummy coordinates as we don't have actual coordinates in suggestions
    handlePress({
      latitude: 37.7749, // This would ideally come from a place details API call
      longitude: -122.4194, // This would ideally come from a place details API call
      address: `${suggestion.mainText}, ${suggestion.secondaryText}`,
    });
  };

  const renderSuggestionItem = ({ item }: { item: Suggestion }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSuggestionPress(item)}
    >
      <MapPin
        size={SUGGESTION_ICON_SIZE}
        color={SUGGESTION_ICON_COLOR}
        style={styles.icon}
      />
      <View style={styles.suggestionTextContainer}>
        <Text style={styles.mainText}>{item.mainText}</Text>
        <Text style={styles.secondaryText}>{item.secondaryText}</Text>
      </View>
    </TouchableOpacity>
  );

  // Toggle focus handler
  const toggleFocus = () => {
    if (!isFocused) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  };

  // Clear input handler
  const clearInput = () => {
    setInputValue("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (!isFocused) {
            setIsFocused(true);
            setTimeout(() => inputRef.current?.focus(), 0);
          }
        }}
        style={{ width: "100%" }}
      >
        <View
          style={[
            styles.inputContainer,
            { borderColor: isFocused ? "#4299e1" : "#EBEBEB" },
          ]}
        >
          <View style={styles.iconContainer}>{getIconByName(icon)}</View>

          {!isFocused && !inputValue ? (
            // Fixed placeholder text when not focused
            <Text style={styles.placeholderText}>{initialLocation}</Text>
          ) : (
            // TextInput when focused or has value
            <TextInput
              ref={inputRef}
              style={styles.textInput}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder={placeholder}
              placeholderTextColor="#ADADAD"
              onFocus={() => setIsFocused(true)}
              selectionColor="#4299e1"
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              onBlur={() => {
                // Small delay to allow suggestion selection to work
                setTimeout(() => {
                  if (!inputValue) {
                    setIsFocused(false);
                  }
                }, 200);
              }}
            />
          )}

          {inputValue.length > 0 && (
            <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
              {getClearIcon()}
            </TouchableOpacity>
          )}

          {isLoading && (
            <ActivityIndicator
              size="small"
              color="#2196F3"
              style={styles.loader}
            />
          )}
        </View>
      </TouchableOpacity>

      {showSuggestions && suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            renderItem={renderSuggestionItem}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            style={styles.suggestionsList}
            contentContainerStyle={{ paddingVertical: 4 }}
          />
        </View>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    zIndex: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    height: 44, // Fixed height
  },
  iconContainer: {
    marginRight: 12,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    color: "#333333",
    padding: 0,
    margin: 0,
  },
  placeholderText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    color: "#ADADAD",
  },
  clearButton: {
    padding: 8,
  },
  loader: {
    marginLeft: 5,
  },
  suggestionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 8,
    marginHorizontal: 2,
    zIndex: 30,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
    maxHeight: 350,
    overflow: "hidden",
  },
  suggestionsList: {
    width: "100%",
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  icon: {
    marginTop: 4,
    marginRight: 12,
  },
  suggestionTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  mainText: {
    fontWeight: "500",
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  secondaryText: {
    fontSize: 14,
    color: "#666",
  },
  errorText: {
    color: "#f44336",
    marginTop: 8,
    fontSize: 14,
  },
});

export default GoogleTextInput;
