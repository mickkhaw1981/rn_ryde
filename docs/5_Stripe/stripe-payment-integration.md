# Stripe Payment Integration for React Native

This guide explains how to integrate Stripe payments into your React Native application.

## Overview

This integration combines all of the steps required to pay—collecting payment details and confirming the payment—into a single sheet that displays on top of your app.

## Prerequisites

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

## Installation

### Server-side Setup

This integration requires endpoints on your server that talk to the Stripe API. Use the official libraries for access to the Stripe API from your server:

```bash
# Install with npm
npm install stripe --save
```

### Client-side Setup

The [React Native SDK](https://github.com/stripe/stripe-react-native) is open source and fully documented. Internally, it uses the [native iOS](https://github.com/stripe/stripe-ios) and [Android](https://github.com/stripe/stripe-android) SDKs.

Install Stripe's React Native SDK:

```bash
yarn add @stripe/stripe-react-native
```

Additional dependencies:

- For iOS: Navigate to the **ios** directory and run `pod install`
- For Android: No additional dependencies required

## Implementation

### 1. Stripe Initialization

Initialize Stripe in your React Native app using the `StripeProvider` component:

```javascript
import { StripeProvider } from "@stripe/stripe-react-native";

function App() {
  const [publishableKey, setPublishableKey] = useState("");

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      // Your app code here
    </StripeProvider>
  );
}
```

> **Note**: Use API keys for test mode while testing and development, and live mode keys when publishing your app.

### 2. Server-side Implementation

Create an endpoint on your server that:

1. Retrieves or creates a Customer
2. Creates an Ephemeral Key for the Customer
3. Creates a PaymentIntent
4. Returns necessary data to the client

Example server implementation:

```javascript
const stripe = require("stripe")("sk_test_...");

app.post("/payment-sheet", async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2025-02-24.acacia" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: "pk_test_...",
  });
});
```

### 3. Client-side Implementation

Implement the payment flow in your checkout screen:

```javascript
export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <Screen>
      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </Screen>
  );
}
```

### 4. Return URL Setup (iOS only)

Set up URL handling for returning to your app after external authentication:

```javascript
import React, { useEffect, useCallback } from 'react';
import { Linking } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

export default function MyApp() {
  const { handleURLCallback } = useStripe();

  const handleDeepLink = useCallback(
    async (url: string | null) => {
      if (url) {
        const stripeHandled = await handleURLCallback(url);
        if (stripeHandled) {
          // This was a Stripe URL - add extra handling here if needed
        } else {
          // This was NOT a Stripe URL – handle normally
        }
      }
    },
    [handleURLCallback]
  );

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      handleDeepLink(initialUrl);
    };

    getUrlAsync();

    const deepLinkListener = Linking.addEventListener(
      'url',
      (event: { url: string }) => {
        handleDeepLink(event.url);
      }
    );

    return () => deepLinkListener.remove();
  }, [handleDeepLink]);

  return (
    <View>
      <AwesomeAppComponent />
    </View>
  );
}
```

Also set the `returnURL` in `initPaymentSheet`:

```javascript
await initPaymentSheet({
  ...
  returnURL: 'your-app://stripe-redirect',
  ...
});
```

## Webhook Events

Handle these important webhook events for a complete integration:

| Event                           | Description                        | Action                                    |
| ------------------------------- | ---------------------------------- | ----------------------------------------- |
| `payment_intent.succeeded`      | Payment completed successfully     | Send order confirmation and fulfill order |
| `payment_intent.processing`     | Payment initiated but not complete | Send pending confirmation                 |
| `payment_intent.payment_failed` | Payment attempt failed             | Offer another payment attempt             |

## Testing

Use these test card numbers for different scenarios:

| Card Number         | Scenario                                  | How to Test                          |
| ------------------- | ----------------------------------------- | ------------------------------------ |
| 4242424242424242    | Successful payment without authentication | Use any expiry, CVC, and postal code |
| 4000002500003155    | Payment requires authentication           | Use any expiry, CVC, and postal code |
| 4000000000009995    | Payment declined (insufficient funds)     | Use any expiry, CVC, and postal code |
| 6205500000000000004 | UnionPay card (13-19 digits)              | Use any expiry, CVC, and postal code |

For more detailed testing information, refer to the [Stripe Testing documentation](https://stripe.com/docs/testing).
