# User API Implementation Documentation

## Overview

This document provides information about the User API implementation in the Ryde application. The API allows for creating new users in the database.

## Database Connection

The database connection is established using the Neon Serverless PostgreSQL client. The connection is configured in the `lib/db.ts` file.

### Environment Variables

The following environment variables are required:

- `DATABASE_URL`: The connection string for the Neon PostgreSQL database.

Example:

```
DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require
```

## Database Schema

The User API relies on the following database schema:

### Users Table

| Column   | Type    | Constraints           |
| -------- | ------- | --------------------- |
| id       | integer | PRIMARY KEY, NOT NULL |
| name     | varchar | NOT NULL              |
| email    | varchar | UNIQUE, NOT NULL      |
| clerk_id | varchar | UNIQUE, NOT NULL      |

## API Endpoints

### Create User

**Endpoint:** `POST /api/user`

**Request Format:**

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "clerkId": "clerk_user_id"
}
```

**Success Response (201 Created):**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "clerk_id": "clerk_user_id"
  }
}
```

**Error Responses:**

- **400 Bad Request** - Missing required fields:

  ```json
  {
    "success": false,
    "error": "Name is required"
  }
  ```

- **409 Conflict** - User with email or clerk ID already exists:

  ```json
  {
    "success": false,
    "error": "User with this email or clerk ID already exists"
  }
  ```

- **500 Internal Server Error** - Database connection or other server error:
  ```json
  {
    "success": false,
    "error": "Failed to create user"
  }
  ```

## Error Handling

The API implements comprehensive error handling:

1. **Validation Errors**: All required fields are validated on the server side.
2. **Database Connection Errors**: The API checks for database connection before processing requests.
3. **Unique Constraint Violations**: The API handles cases where a user with the same email or clerk ID already exists.
4. **General Server Errors**: All other errors are caught and returned with appropriate status codes.

## Security Considerations

1. **SQL Injection Protection**: All SQL queries are parameterized using Neon's tagged template literals.
2. **Sensitive Information**: Email addresses are partially masked in logs.
3. **Error Messages**: Error responses do not expose sensitive information.
4. **Input Validation**: All user input is validated before processing.

## Testing

The API implementation includes test scripts:

1. **Database Connection Test**: `scripts/test-db-connection.js`
2. **User API Test**: `scripts/test-user-api.js`
3. **Database Schema Verification**: `scripts/verify-db-schema.js`

To run the tests:

```bash
node scripts/test-db-connection.js
node scripts/test-user-api.js
node scripts/verify-db-schema.js
```
