import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Stack } from "expo-router";
import PlaceAutocomplete from "../../components/PlaceAutocomplete";
import type { Suggestion } from "../../types/google-maps";

export default function PlaceAutocompleteScreen() {
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load Google Maps API - in React Native we would normally use libraries like
  // react-native-maps or expo-location which handle API initialization
  useEffect(() => {
    const initGoogleMapsApi = async () => {
      try {
        // In a real implementation, we would initialize any required libraries here
        // The API key is already in .env.local as EXPO_PUBLIC_GOOGLE_MAPS_API_KEY

        // Simulate API loading for demo purposes
        await new Promise((resolve) => setTimeout(resolve, 500));

        setIsApiLoaded(true);
      } catch (err) {
        console.error("Failed to initialize Google Maps API:", err);
        setError("Failed to initialize Google Maps API. Please try again.");
      }
    };

    initGoogleMapsApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Place Autocomplete",
        }}
      />

      <View style={styles.content}>
        <Text style={styles.heading}>Place Autocomplete Demo</Text>

        {!isApiLoaded && !error ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#2196F3" />
            <Text style={styles.loadingText}>Loading Google Maps API...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <View style={styles.autocompleteContainer}>
            <PlaceAutocomplete
              label="Search for a place:"
              placeholder="Start typing a location..."
              onChange={(place: Suggestion) =>
                console.log("Selected place:", place)
              }
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    color: "#f44336",
    textAlign: "center",
    fontSize: 16,
  },
  autocompleteContainer: {
    flex: 1,
    maxWidth: 600,
    width: "100%",
    alignSelf: "center",
  },
});
