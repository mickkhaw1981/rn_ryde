import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="welcome"
        options={{ title: "Welcome", headerShown: false }}
      />
      <Stack.Screen
        name="sign-in"
        options={{ title: "Sign In", headerShown: false }}
      />
      <Stack.Screen
        name="sign-up"
        options={{ title: "Sign Up", headerShown: false }}
      />
    </Stack>
  );
}
