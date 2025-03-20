import { sql, testConnection } from "../../lib/db";

type Ride = {
  origin_address: string;
  destination_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  ride_time: number;
  fare_price: number;
  payment_status: string;
  driver_id: number;
  user_email: string;
};

export async function POST(request: Request) {
  try {
    // Verify database connection
    const isConnected = await testConnection();
    if (!isConnected) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Database connection failed",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const ride: Ride = await request.json();

    // Basic validation
    if (
      !ride.origin_address ||
      !ride.destination_address ||
      ride.origin_latitude === undefined ||
      ride.origin_longitude === undefined ||
      ride.destination_latitude === undefined ||
      ride.destination_longitude === undefined ||
      ride.ride_time === undefined ||
      ride.fare_price === undefined ||
      !ride.payment_status ||
      ride.driver_id === undefined ||
      !ride.user_email
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required ride fields",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert ride into the database
    const result = await sql`
      INSERT INTO rides (
        origin_address,
        destination_address,
        origin_latitude,
        origin_longitude,
        destination_latitude,
        destination_longitude,
        ride_time,
        fare_price,
        payment_status,
        driver_id,
        user_email
      ) VALUES (
        ${ride.origin_address},
        ${ride.destination_address},
        ${ride.origin_latitude},
        ${ride.origin_longitude},
        ${ride.destination_latitude},
        ${ride.destination_longitude},
        ${ride.ride_time},
        ${ride.fare_price},
        ${ride.payment_status},
        ${ride.driver_id},
        ${ride.user_email}
      )
      RETURNING *;
    `;

    const createdRide = result[0];

    return new Response(
      JSON.stringify({
        success: true,
        data: createdRide,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error creating ride:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Something went wrong creating the ride",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}