import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

import { fetchAPI } from "@/lib/fetch";
import { mapDbDriverToInterface, mapDbResults } from "@/lib/utils";
import type { Driver } from "@/types/type";

const Profile = () => {
  const { signOut } = useAuth();
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [driverLoading, setDriverLoading] = useState(false);
  const [driverError, setDriverError] = useState<string | null>(null);

  const handleSignOut = () => {
    signOut();
  };

  const fetchHelloWorldApi = async () => {
    setLoading(true);
    setApiResponse(null);
    setError(null);

    try {
      const response = await fetch("/hello");
      const data = await response.json();
      setApiResponse(`Hello ${data.hello}`);
    } catch (error) {
      console.error("Error fetching from API:", error);
      setError("Failed to fetch from API. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDrivers = async () => {
    setDriverLoading(true);
    setDriverError(null);

    console.log("🚀 Starting to fetch drivers from API...");
    try {
      console.log('Making API request to "/(api)/driver"');
      const result = await fetchAPI("/(api)/driver");
      console.log("API response received:", JSON.stringify(result, null, 2));
      console.log("API response data type:", typeof result.data);
      console.log(
        "First driver (if available):",
        result.data && result.data.length > 0
          ? JSON.stringify(result.data[0], null, 2)
          : "No drivers"
      );

      if (result && result.data) {
        console.log(
          `Successfully received ${result.data.length} drivers:`,
          result.data
        );

        // Debug each driver object structure
        result.data.forEach((driver: any, index: number) => {
          console.log(`Driver ${index} structure:`, {
            id: driver.id,
            hasId: driver.hasOwnProperty("id"),
            type: typeof driver.id,
            allKeys: Object.keys(driver),
          });
        });

        // Use the utility function to map the database drivers to our interface structure
        const mappedDrivers = mapDbResults(result.data, mapDbDriverToInterface);
        setDrivers(mappedDrivers);
      } else {
        console.log("Response received but no data found:", result);
      }
    } catch (error) {
      console.error("Error fetching drivers:", error);
      console.log("Error details:", JSON.stringify(error, null, 2));
      setDriverError("Failed to fetch drivers from database.");
    } finally {
      console.log("Driver fetching process completed");
      setDriverLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  // Separate effect to log driver state changes without causing an infinite loop
  useEffect(() => {
    if (drivers.length === 0) {
      console.log("No drivers found in the state");
    } else {
      console.log(`Found ${drivers.length} drivers in state`);
    }
  }, [drivers]);

  const navigateToPlaceAutocomplete = () => {
    router.push("/place-autocomplete");
  };

  const renderDriverItem = ({ item }: { item: Driver }) => (
    <View style={styles.driverRow}>
      <Image
        source={{
          uri: item.profile_image_url || "https://via.placeholder.com/50",
        }}
        style={styles.driverImage}
      />
      <View style={styles.driverInfo}>
        <Text style={styles.driverName}>
          {item.first_name || "Unknown"} {item.last_name || ""}
        </Text>
        <Text>
          Rating: {item.rating !== undefined ? `${item.rating} ⭐` : "N/A"}
        </Text>
        <Text>
          Seats: {item.car_seats !== undefined ? item.car_seats : "N/A"}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg mb-6">Profile</Text>

      {/* Drivers Table Section */}
      <View style={styles.driversSection}>
        <Text style={styles.sectionTitle}>Our Drivers</Text>

        {driverLoading ? (
          <ActivityIndicator size="large" color="#2196F3" />
        ) : driverError ? (
          <Text style={styles.errorText}>{driverError}</Text>
        ) : (
          <>
            <View style={styles.driverHeader}>
              <Text style={styles.headerText}>Driver</Text>
              <Text style={styles.headerText}>Details</Text>
            </View>
            <FlatList
              data={drivers}
              keyExtractor={(item: any) =>
                item.id !== undefined
                  ? item.id.toString()
                  : `driver-${Math.random()}`
              }
              renderItem={renderDriverItem}
              style={styles.driverList}
              ListEmptyComponent={
                <Text style={styles.emptyText}>No drivers found</Text>
              }
            />
            <TouchableOpacity
              style={styles.refreshButton}
              onPress={fetchDrivers}
            >
              <Text style={styles.refreshButtonText}>Refresh Drivers</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* API Test Section */}
      <View style={styles.apiSection}>
        <TouchableOpacity
          style={styles.apiTestButton}
          onPress={fetchHelloWorldApi}
          disabled={loading}
        >
          <Text style={styles.apiTestText}>
            {loading ? "Loading..." : "Test Hello World API"}
          </Text>
          {loading && <ActivityIndicator color="white" style={styles.loader} />}
        </TouchableOpacity>

        {apiResponse && (
          <View style={styles.responseContainer}>
            <Text style={styles.responseTitle}>API Response:</Text>
            <Text style={styles.responseText}>{apiResponse}</Text>
          </View>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>

      {/* Place Autocomplete Demo Link */}
      <TouchableOpacity
        style={styles.demoButton}
        onPress={navigateToPlaceAutocomplete}
      >
        <Text style={styles.demoButtonText}>
          Google Place Autocomplete Demo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  apiSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  apiTestButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  apiTestText: {
    color: "white",
    fontWeight: "bold",
  },
  loader: {
    marginLeft: 10,
  },
  responseContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: "100%",
  },
  responseTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  responseText: {
    fontSize: 16,
  },
  errorText: {
    color: "#f44336",
    marginTop: 10,
    textAlign: "center",
  },
  signOutButton: {
    backgroundColor: "#f44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signOutText: {
    color: "white",
    fontWeight: "bold",
  },
  demoButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  demoButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  driversSection: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  driverHeader: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    fontWeight: "bold",
    flex: 1,
  },
  driverList: {
    maxHeight: 300,
    backgroundColor: "#f9f9f9",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  driverRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignItems: "center",
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    padding: 20,
    fontStyle: "italic",
  },
  refreshButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  refreshButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile;
