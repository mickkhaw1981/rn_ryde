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

import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";

const FindRide = () => {
  const router = useRouter();
  const { userAddress, destinationAddress } = useLocationStore();

  const handleBack = () => {
    router.back();
  };

  return (
    <RideLayout>
      {/* <View style={styles.header}>
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
        </View> */}
    </RideLayout>
  );
};

export default FindRide;
