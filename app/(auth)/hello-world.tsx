import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

const HelloWorld = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  async function fetchHello() {
    try {
      const response = await fetch("/hello");
      const data = await response.json();
      setMessage(`API Response: Hello ${data.hello}`);
    } catch (error) {
      console.error("Error fetching from API:", error);
      setMessage("Error fetching from API");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>API Route Test</Text>
      <Button title="Test Hello World API" onPress={fetchHello} />
      {message && <Text style={styles.message}>{message}</Text>}
      <View style={styles.backButtonContainer}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 20,
  },
  backButtonContainer: {
    marginTop: 20,
  },
});

export default HelloWorld;
