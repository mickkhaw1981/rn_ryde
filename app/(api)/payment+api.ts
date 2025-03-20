import Stripe from "stripe";

/**
 * POST /(api)/payment
 * Body expects: { amount: number, currency: string, customer_email: string }
 *
 * Response: { success: boolean, data?: { paymentIntent, ephemeralKey, customer }, error?: string }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { amount, currency, customer_email } = body;
    if (!amount || !currency || !customer_email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields: amount, currency, or customer_email.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Initialize Stripe with the secret key from environment
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2023-10-16",
    });

    // In a real app, you'd look up or create a customer record.
    // For demonstration, we'll create a new customer each time, or you might do a lookup by email
    const customer = await stripe.customers.create({
      email: customer_email,
    });

    // Create an ephemeral key for the customer so that the Payment Sheet can fetch updated info
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2023-10-16" }
    );

    // Create a Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // e.g. 2000 for $20.00
      currency, // e.g. "usd"
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          paymentIntent: paymentIntent.client_secret,
          ephemeralKey: ephemeralKey.secret,
          customer: customer.id,
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
        error: error.message || "Something went wrong creating the payment intent",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}