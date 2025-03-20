import Stripe from "stripe";

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia", // Updated to latest API version
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate required fields
    const { amount, currency = "usd", customer_email } = body;

    if (!amount) {
      throw new Error("Amount is required");
    }

    if (!customer_email) {
      throw new Error("Customer email is required");
    }

    // Create or retrieve a customer
    const customerQuery = await stripe.customers.list({
      email: customer_email,
      limit: 1,
    });

    let customerId;

    if (customerQuery.data.length > 0) {
      // Customer exists, use the existing ID
      customerId = customerQuery.data[0].id;
    } else {
      // Customer doesn't exist, create a new one
      const newCustomer = await stripe.customers.create({
        email: customer_email,
      });
      customerId = newCustomer.id;
    }

    // Create ephemeral key for the customer
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customerId },
      { apiVersion: "2025-02-24.acacia" }
    );

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customerId,
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          paymentIntent: paymentIntent.client_secret,
          ephemeralKey: ephemeralKey.secret,
          customer: customerId,
        },
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error creating payment intent:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Something went wrong",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
