import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { useLocationStore } from "@/store";

const FindRide = () => {
  const router = useRouter();
  const { userAddress, destinationAddress } = useLocationStore();

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Find a Ride</Text>
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationCard}>
          <Text style={styles.locationLabel}>Your Location:</Text>
          <Text style={styles.locationText}>{userAddress || "Not set"}</Text>
        </View>

        <View style={styles.locationCard}>
          <Text style={styles.locationLabel}>Destination:</Text>
          <Text style={styles.locationText}>
            {destinationAddress || "Not set"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  locationContainer: {
    padding: 16,
    gap: 16,
  },
  locationCard: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  locationLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});

export default FindRide;
