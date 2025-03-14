import { useAuth } from "@clerk/clerk-expo";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

const Profile = () => {
  const { signOut } = useAuth();
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg mb-6">Profile</Text>

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
});

export default Profile;
