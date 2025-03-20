import { sql } from "@/lib/db";

// Define Ride type based on actual database schema
type Ride = {
  ride_id?: number;
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
  user_id: string; // Changed from user_email to match DB schema
  created_at?: Date;
};

export async function POST(request: Request) {
  try {
    const rideData = await request.json();

    // Convert user_email to user_id if needed
    const ride: Ride = {
      ...rideData,
      user_id: rideData.user_email || rideData.user_id,
    };

    // Validate required fields
    if (
      !ride.origin_address ||
      !ride.destination_address ||
      !ride.origin_latitude ||
      !ride.origin_longitude ||
      !ride.destination_latitude ||
      !ride.destination_longitude ||
      !ride.ride_time ||
      !ride.fare_price ||
      !ride.driver_id ||
      !ride.user_id
    ) {
      throw new Error("Missing required ride fields");
    }

    // Insert ride record
    const result = await sql`
      INSERT INTO rides (
        origin_address, destination_address, origin_latitude, origin_longitude,
        destination_latitude, destination_longitude, ride_time, fare_price,
        payment_status, driver_id, user_id
      ) VALUES (
        ${ride.origin_address},
        ${ride.destination_address},
        ${ride.origin_latitude},
        ${ride.origin_longitude},
        ${ride.destination_latitude},
        ${ride.destination_longitude},
        ${ride.ride_time},
        ${ride.fare_price},
        ${ride.payment_status || "paid"},
        ${ride.driver_id},
        ${ride.user_id}
      ) RETURNING *
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
    console.error("Error creating ride record:", error);
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
