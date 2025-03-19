import React from "react";
import { Text, View } from "react-native";

import PrimaryButton from "@/components/PrimaryButton";

const Payment = () => {
  const openPaymentSheet = async () => {
    console.log("openPaymentSheet");
  };

  return (
    <PrimaryButton
      title="Pay Now"
      className="my-10"
      onPress={openPaymentSheet}
    />
  );
};

export default Payment;
