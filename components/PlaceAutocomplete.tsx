import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import { MapPin } from "lucide-react-native";
import { Suggestion } from "../types/google-maps";
import FormField from "./FormField";
import Constants from "expo-constants";

interface PlaceAutocompleteProps {
  label?: string;
  placeholder?: string;
  onChange?: (place: Suggestion) => void;
}

const PlaceAutocomplete: React.FC<PlaceAutocompleteProps> = ({
  label = "Search for a place:",
  placeholder = "Type to search...",
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  // Create a simpler mock data function for testing
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
      {
        id: "4",
        mainText: `${input} Park`,
        secondaryText: "Recreation Area",
      },
      {
        id: "5",
        mainText: `${input} Station`,
        secondaryText: "Transit Hub",
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

      // Using the new Places API (V1) endpoint
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
    Keyboard.dismiss();

    if (onChange) {
      onChange(suggestion);
    }
  };

  const renderSuggestionItem = ({ item }: { item: Suggestion }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSuggestionPress(item)}
    >
      <MapPin size={16} color="#666666" style={styles.icon} />
      <View style={styles.suggestionTextContainer}>
        <Text style={styles.mainText}>{item.mainText}</Text>
        <Text style={styles.secondaryText}>{item.secondaryText}</Text>
      </View>
    </TouchableOpacity>
  );

  // Log when suggestions or showSuggestions state changes
  useEffect(() => {
    console.log(
      "Suggestions updated:",
      suggestions.length,
      "Show suggestions:",
      showSuggestions
    );
  }, [suggestions, showSuggestions]);

  return (
    <View style={styles.container}>
      <FormField
        title={label}
        placeholder={placeholder}
        value={inputValue}
        handleChangeText={handleInputChange}
        keyboardType="default"
      />

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#2196F3" />
        </View>
      )}

      {showSuggestions && suggestions.length > 0 ? (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            renderItem={renderSuggestionItem}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            style={styles.suggestionsList}
          />
        </View>
      ) : null}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    zIndex: 10, // Ensure this container is above other elements
  },
  loadingContainer: {
    position: "absolute",
    right: 16,
    top: 40,
    zIndex: 20,
  },
  suggestionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginTop: 4,
    zIndex: 30, // Ensure this is above other elements
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
    maxHeight: 300,
  },
  suggestionsList: {
    width: "100%",
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  icon: {
    marginTop: 2,
    marginRight: 8,
  },
  suggestionTextContainer: {
    flex: 1,
  },
  mainText: {
    fontWeight: "500",
    fontSize: 16,
    color: "#333",
  },
  secondaryText: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  errorText: {
    color: "#f44336",
    marginTop: 8,
    fontSize: 14,
  },
});

export default PlaceAutocomplete;
