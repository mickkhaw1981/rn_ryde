# Stripe Payment Flow

## High-Level Flow Summary

1. **Setup & Initialization**

   - Initialize Stripe SDK
   - Configure StripeProvider in app root

2. **Payment Process**
   - User initiates checkout
   - Create payment intent on server
   - Present payment sheet
   - Handle payment result
   - Process webhooks for confirmation

## Detailed Flow

### 1. Initial Setup

1. Install required dependencies

   - Server: `stripe` npm package
   - Client: `@stripe/stripe-react-native`
   - iOS: Run `pod install`

2. Configure Stripe Provider
   ```javascript
   <StripeProvider
     publishableKey={publishableKey}
     merchantIdentifier="merchant.identifier"
     urlScheme="your-url-scheme"
   >
     <App />
   </StripeProvider>
   ```

### 2. Server-Side Flow

1. Create endpoint for payment sheet initialization
2. When endpoint is called:
   - Create or retrieve Customer object
   - Generate Ephemeral Key for the customer
   - Create PaymentIntent with amount and currency
   - Return required secrets and keys to client

### 3. Client-Side Flow

1. **Initialize Payment**

   - Call server endpoint to get payment parameters
   - Initialize payment sheet with returned data

   ```javascript
   const { error } = await initPaymentSheet({
     merchantDisplayName: "Example, Inc.",
     customerId: customer,
     customerEphemeralKeySecret: ephemeralKey,
     paymentIntentClientSecret: paymentIntent,
   });
   ```

2. **Present Payment Sheet**
   - User taps checkout button
   - Present payment sheet UI
   - Handle payment result
   ```javascript
   const { error } = await presentPaymentSheet();
   if (error) {
     // Handle error
   } else {
     // Payment successful
   }
   ```

### 4. Payment Processing

1. **Client-Side**

   - Payment sheet closes automatically
   - Show success/error message to user
   - Handle return to app (for 3D Secure/bank redirects)

2. **Server-Side**
   - Listen for webhook events
   - Handle different payment states:
     - `payment_intent.succeeded`: Complete order
     - `payment_intent.processing`: Mark as pending
     - `payment_intent.payment_failed`: Handle failure

### 5. Post-Payment Flow

1. **Success Path**

   - Receive `payment_intent.succeeded` webhook
   - Update order status
   - Send confirmation to customer
   - Fulfill order

2. **Processing Path**

   - Receive `payment_intent.processing` webhook
   - Mark order as pending
   - Wait for final success/failure webhook

3. **Failure Path**
   - Receive `payment_intent.payment_failed` webhook
   - Update order status
   - Notify customer
   - Offer retry payment option

### 6. Error Handling

1. **Client-Side Errors**

   - Payment sheet presentation errors
   - Network errors
   - Authentication errors (3D Secure)

2. **Server-Side Errors**
   - Invalid payment method
   - Insufficient funds
   - Fraud detection
   - Webhook processing errors

### 7. Testing Considerations

1. **Test Cards**

   - Standard success: 4242424242424242
   - Authentication required: 4000002500003155
   - Payment failure: 4000000000009995

2. **Test Scenarios**
   - Successful payment flow
   - 3D Secure authentication
   - Payment failure handling
   - Webhook processing
   - Return URL handling (iOS)
