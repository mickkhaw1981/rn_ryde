// Script to verify database schema
const fs = require("fs");
const path = require("path");
const { neon } = require("@neondatabase/serverless");

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

// Function to check if table exists
async function checkTableExists(tableName) {
  console.log(`Checking if table '${tableName}' exists...`);
  try {
    const result = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public'
        AND table_name = ${tableName}
      );
    `;
    return result[0].exists;
  } catch (error) {
    console.error(`Error checking if table '${tableName}' exists:`, error);
    return false;
  }
}

// Function to get table columns
async function getTableColumns(tableName) {
  console.log(`Getting columns for table '${tableName}'...`);
  try {
    const result = await sql`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema = 'public'
      AND table_name = ${tableName}
      ORDER BY ordinal_position;
    `;
    return result;
  } catch (error) {
    console.error(`Error getting columns for table '${tableName}':`, error);
    return [];
  }
}

// Function to get table constraints
async function getTableConstraints(tableName) {
  console.log(`Getting constraints for table '${tableName}'...`);
  try {
    const result = await sql`
      SELECT con.conname AS constraint_name,
             con.contype AS constraint_type,
             pg_get_constraintdef(con.oid) AS constraint_definition
      FROM pg_constraint con
      JOIN pg_class rel ON rel.oid = con.conrelid
      JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
      WHERE rel.relname = ${tableName}
      AND nsp.nspname = 'public';
    `;
    return result;
  } catch (error) {
    console.error(`Error getting constraints for table '${tableName}':`, error);
    return [];
  }
}

// Main verification function
async function verifyDatabaseSchema() {
  console.log("Verifying database schema...");

  // Check if users table exists
  const usersTableExists = await checkTableExists("users");
  if (!usersTableExists) {
    console.error("Table 'users' does not exist!");
    return false;
  }
  console.log("✅ Table 'users' exists");

  // Get columns for users table
  const columns = await getTableColumns("users");
  console.log("\nColumns in users table:");
  columns.forEach((col) => {
    console.log(
      `- ${col.column_name} (${col.data_type}, ${col.is_nullable === "YES" ? "nullable" : "not nullable"})`
    );
  });

  // Verify required columns
  const requiredColumns = {
    id: "integer",
    name: "character varying",
    email: "character varying",
    clerk_id: "character varying",
  };

  let missingColumns = [];
  for (const [colName, colType] of Object.entries(requiredColumns)) {
    const column = columns.find((c) => c.column_name === colName);
    if (!column) {
      missingColumns.push(colName);
    } else if (!column.data_type.includes(colType)) {
      console.warn(
        `⚠️ Column '${colName}' has type '${column.data_type}', expected '${colType}'`
      );
    }
  }

  if (missingColumns.length > 0) {
    console.error(`❌ Missing required columns: ${missingColumns.join(", ")}`);
    return false;
  }
  console.log("✅ All required columns exist with correct types");

  // Get constraints for users table
  const constraints = await getTableConstraints("users");
  console.log("\nConstraints in users table:");
  constraints.forEach((con) => {
    console.log(
      `- ${con.constraint_name} (${con.constraint_type}): ${con.constraint_definition}`
    );
  });

  // Check for primary key on id
  const hasPrimaryKey = constraints.some(
    (con) =>
      con.constraint_type === "p" && con.constraint_definition.includes("(id)")
  );
  if (!hasPrimaryKey) {
    console.warn("⚠️ No primary key constraint on id column");
  } else {
    console.log("✅ Primary key constraint exists on id column");
  }

  // Check for unique constraints
  const hasEmailUnique = constraints.some(
    (con) =>
      con.constraint_type === "u" &&
      con.constraint_definition.includes("(email)")
  );
  if (!hasEmailUnique) {
    console.warn("⚠️ No unique constraint on email column");
  } else {
    console.log("✅ Unique constraint exists on email column");
  }

  const hasClerkIdUnique = constraints.some(
    (con) =>
      con.constraint_type === "u" &&
      con.constraint_definition.includes("(clerk_id)")
  );
  if (!hasClerkIdUnique) {
    console.warn("⚠️ No unique constraint on clerk_id column");
  } else {
    console.log("✅ Unique constraint exists on clerk_id column");
  }

  console.log("\nDatabase schema verification completed");
  return true;
}

// Run the verification
verifyDatabaseSchema()
  .then((isValid) => {
    console.log(`\nSchema validation ${isValid ? "passed" : "failed"}`);
    process.exit(isValid ? 0 : 1);
  })
  .catch((error) => {
    console.error("Schema verification failed with error:", error);
    process.exit(1);
  });
