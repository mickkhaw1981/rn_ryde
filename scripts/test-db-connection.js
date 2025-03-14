// Test script for database connection
const { neon } = require("@neondatabase/serverless");
const fs = require("fs");
const path = require("path");

// Read .env.local file
const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
const envVars = envContent.split("\n").reduce((acc, line) => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    acc[match[1]] = match[2];
  }
  return acc;
}, {});

// Set environment variables
Object.entries(envVars).forEach(([key, value]) => {
  process.env[key] = value;
});

// Validate DATABASE_URL environment variable
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

console.log("Initializing database connection...");
console.log(
  "Using DATABASE_URL:",
  process.env.DATABASE_URL.substring(0, 30) + "..."
);

// Create sql tagged template function
const sql = neon(process.env.DATABASE_URL);

// Test database connection function
async function testConnection() {
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

// Run the test
testConnection()
  .then((connected) => {
    console.log("Connection test result:", connected);
    process.exit(connected ? 0 : 1);
  })
  .catch((error) => {
    console.error("Test failed with error:", error);
    process.exit(1);
  });
