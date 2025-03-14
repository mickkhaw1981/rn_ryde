import { neon } from "@neondatabase/serverless";
import "dotenv/config";

// Validate DATABASE_URL environment variable
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set");
  throw new Error("DATABASE_URL environment variable is not set");
}

console.log("Initializing database connection...");

// Create and export sql tagged template function
export const sql = neon(process.env.DATABASE_URL);

// Test database connection function
export async function testConnection(): Promise<boolean> {
  console.log("Testing database connection...");
  try {
    const result = await sql`SELECT NOW()`;
    console.log(
      `Database connection successful. Server time: ${result[0].now}`
    );
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

// Test connection on module initialization
testConnection().catch((error) => {
  console.error("Initial connection test failed:", error);
});

// User interface definition
export interface User {
  id: number;
  name: string;
  email: string;
  clerk_id: string;
}

// CreateUserRequest interface definition
export interface CreateUserRequest {
  name: string;
  email: string;
  clerkId: string;
}
