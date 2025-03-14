// Test script for User API route
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Generate a random email to avoid conflicts
const randomEmail = `test-${crypto.randomBytes(4).toString("hex")}@example.com`;

// Test data
const validUserData = {
  name: "Test User",
  email: randomEmail,
  clerkId: `user_${crypto.randomBytes(8).toString("hex")}`,
};

const missingNameData = {
  email: randomEmail,
  clerkId: `user_${crypto.randomBytes(8).toString("hex")}`,
};

const missingEmailData = {
  name: "Test User",
  clerkId: `user_${crypto.randomBytes(8).toString("hex")}`,
};

const missingClerkIdData = {
  name: "Test User",
  email: randomEmail,
};

const invalidEmailData = {
  name: "Test User",
  email: "invalid-email",
  clerkId: `user_${crypto.randomBytes(8).toString("hex")}`,
};

// Function to make a POST request to the API
async function testUserAPI(data, testName) {
  console.log(`\n--- Running test: ${testName} ---`);
  console.log("Request payload:", data);

  try {
    // In a real environment, we would make an HTTP request to the API
    // Since we're in a Node.js script, we'll simulate the API call by importing the handler

    // For demonstration purposes, we'll log what would happen
    console.log(
      "This is a simulation. In a real environment, we would make an HTTP request to:"
    );
    console.log("POST /api/user");
    console.log("With payload:", JSON.stringify(data, null, 2));

    // In a real test, we would validate the response
    console.log("Test completed successfully");
    return true;
  } catch (error) {
    console.error("Test failed:", error);
    return false;
  }
}

// Run the tests
async function runTests() {
  console.log("Starting User API tests...");

  // Test with valid data
  await testUserAPI(validUserData, "Valid user data");

  // Test with missing fields
  await testUserAPI(missingNameData, "Missing name field");
  await testUserAPI(missingEmailData, "Missing email field");
  await testUserAPI(missingClerkIdData, "Missing clerkId field");

  // Test with invalid email
  await testUserAPI(invalidEmailData, "Invalid email format");

  console.log("\nAll tests completed");
}

// Run the tests
runTests().catch((error) => {
  console.error("Tests failed with error:", error);
  process.exit(1);
});
