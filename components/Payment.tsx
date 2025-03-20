import { useStripe, StripeProvider } from "@stripe/stripe-react-native";
import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import PrimaryButton from "@/components/PrimaryButton";
import { fetchAPI } from "@/lib/fetch";

interface PaymentProps {
  amount: number;
  title?: string;
  driverId: number;
  userEmail: string;
  originAddress: string;
  destinationAddress: string;
  originLatitude: number;
  originLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
  rideTime: number;
}

const PaymentContent = ({
  amount,
  title = "Pay Now",
  driverId,
  userEmail,
  originAddress,
  destinationAddress,
  originLatitude,
  originLongitude,
  destinationLatitude,
  destinationLongitude,
  rideTime,
}: PaymentProps) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const fetchPaymentSheetParams = async () => {
    try {
      const data = await fetchAPI("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          currency: "usd",
          customer_email: userEmail,
        }),
      });

      if (!data.success) {
        throw new Error(data.error);
      }

      return data.data;
    } catch (error) {
      console.error("Error fetching payment sheet params:", error);
      setPaymentError("Failed to configure payment. Please try again.");
      return null;
    }
  };

  const initializePaymentSheet = async () => {
    try {
      const { paymentIntent, ephemeralKey, customer } =
        await fetchPaymentSheetParams();

      const { error } = await initPaymentSheet({
        merchantDisplayName: "Ryde",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: false,
        defaultBillingDetails: {
          email: userEmail,
        },
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error initializing payment sheet:", error);
      setPaymentError("Failed to initialize payment. Please try again.");
    }
  };

  const createRideRecord = async () => {
    try {
      const data = await fetchAPI("/api/ride", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin_address: originAddress,
          destination_address: destinationAddress,
          origin_latitude: originLatitude,
          origin_longitude: originLongitude,
          destination_latitude: destinationLatitude,
          destination_longitude: destinationLongitude,
          ride_time: rideTime,
          fare_price: amount / 100, // Convert cents to dollars
          payment_status: "paid",
          driver_id: driverId,
          user_email: userEmail, // Our API will convert this to user_id
        }),
      });

      if (!data.success) {
        throw new Error(data.error);
      }

      console.log("Ride created successfully:", data.data);
    } catch (error) {
      console.error("Error creating ride record:", error);
      setPaymentError(
        "Payment successful, but failed to create ride. Please contact support."
      );
    }
  };

  const openPaymentSheet = async () => {
    setLoading(true);
    try {
      const { error } = await presentPaymentSheet();

      if (error) {
        throw new Error(error.message);
      }

      // Payment successful, create ride record
      await createRideRecord();
      setPaymentSuccess(true);
    } catch (error) {
      console.error("Error presenting payment sheet:", error);
      setPaymentError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  if (paymentSuccess) {
    return (
      <View className="items-center my-10">
        <Text className="text-green-600 text-xl font-semibold mb-4">
          Payment Successful!
        </Text>
        <Text className="text-gray-600 text-center">
          Your ride has been confirmed and recorded.
        </Text>
      </View>
    );
  }

  return (
    <View className="my-10">
      {paymentError ? (
        <Text className="text-red-500 mb-4 text-center">{paymentError}</Text>
      ) : null}
      <PrimaryButton
        title={loading ? "Processing..." : title}
        className="mb-4"
        onPress={openPaymentSheet}
        disabled={loading}
        isLoading={loading}
      />
    </View>
  );
};

// Main Payment component that wraps PaymentContent with StripeProvider
const Payment = (props: PaymentProps) => {
  const publishableKey = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.com.ryde"
      urlScheme="ryde"
    >
      <PaymentContent {...props} />
    </StripeProvider>
  );
};

export default Payment;
