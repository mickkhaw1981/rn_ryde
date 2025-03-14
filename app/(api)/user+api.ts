import { sql, testConnection, User, CreateUserRequest } from "../../lib/db";

export async function POST(request: Request) {
  console.log("Handling user creation request...");

  try {
    // Verify database connection
    const isConnected = await testConnection();
    if (!isConnected) {
      console.error("Database connection failed during request handling");
      return Response.json(
        { success: false, error: "Database connection failed" },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, clerkId } = body as CreateUserRequest;

    console.log(
      `Received user creation request for: ${name}, ${email.substring(0, 3)}***`
    );

    // Validate request data
    if (!name || name.trim() === "") {
      return Response.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email || email.trim() === "") {
      return Response.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    if (!clerkId || clerkId.trim() === "") {
      return Response.json(
        { success: false, error: "Clerk ID is required" },
        { status: 400 }
      );
    }

    // Execute SQL query
    console.log("Executing SQL query to create user...");
    const result = await sql`
      INSERT INTO users (name, email, clerk_id)
      VALUES (${name}, ${email}, ${clerkId})
      RETURNING *;
    `;

    const createdUser = result[0] as User;
    console.log(`User created successfully with ID: ${createdUser.id}`);

    // Return success response
    return Response.json(
      {
        success: true,
        data: createdUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    // Check for specific error types
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    // Handle unique constraint violations
    if (
      errorMessage.includes("unique constraint") ||
      errorMessage.includes("duplicate key")
    ) {
      return Response.json(
        {
          success: false,
          error: "User with this email or clerk ID already exists",
        },
        { status: 409 }
      );
    }

    // Handle general server errors
    return Response.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}
