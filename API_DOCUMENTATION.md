# JWT Authentication Implementation - API Documentation

## Overview

This API implements JWT (JSON Web Token) authentication with role-based authorization. The API provides endpoints for user management, quote management, and authentication.

## Base URL

```
http://localhost:3000
```

## Authentication

Most endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Roles

- **user**: Can create quotes, view their own details
- **admin**: Can manage all users and quotes (full CRUD operations)

---

## Authentication Endpoints

### POST /auth/login

**Public** - Login with email and password to receive a JWT token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "role": "user"
  }
}
```

---

## User Endpoints

### POST /users

**Public** - Register a new user account.

**Request Body:**

```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "role": "user" // Optional, defaults to "user"
}
```

**Response:**

```json
{
  "id": 1,
  "email": "newuser@example.com",
  "role": "user",
  "createdAt": "2025-11-20T10:00:00.000Z"
}
```

### GET /users

**Requires Authentication + Admin Role**

Retrieves all users. Optional query parameter: `?limit=10`

**Response:**

```json
[
  {
    "id": 1,
    "email": "user@example.com",
    "role": "user",
    "createdAt": "2025-11-20T10:00:00.000Z"
  },
  ...
]
```

### GET /users/:id

**Requires Authentication + Admin or User Role**

Retrieves a specific user by ID.

**Response:**

```json
{
  "id": 1,
  "email": "user@example.com",
  "role": "user",
  "createdAt": "2025-11-20T10:00:00.000Z"
}
```

### PUT /users/:id

**Requires Authentication + Admin Role**

Updates a user. Can update email, password, or role.

**Request Body:**

```json
{
  "email": "updated@example.com",
  "password": "newpassword123",
  "role": "admin"
}
```

### DELETE /users/:id

**Requires Authentication + Admin Role**

Deletes a user by ID.

---

## Quote Endpoints

### GET /quotes

**Public** - Retrieves all quotes.

Optional query parameters:

- `?limit=10` - Limit number of results
- `?author=Einstein` - Filter by author

**Response:**

```json
[
  {
    "id": 1,
    "text": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs",
    "createdAt": "2025-11-20T10:00:00.000Z"
  },
  ...
]
```

### GET /quotes/:id

**Public** - Retrieves a specific quote by ID.

**Response:**

```json
{
  "id": 1,
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "createdAt": "2025-11-20T10:00:00.000Z"
}
```

### POST /quotes

**Requires Authentication + Admin or User Role**

Creates a new quote.

**Request Body:**

```json
{
  "text": "Be yourself; everyone else is already taken.",
  "author": "Oscar Wilde"
}
```

**Response:**

```json
{
  "id": 2,
  "text": "Be yourself; everyone else is already taken.",
  "author": "Oscar Wilde",
  "createdAt": "2025-11-20T10:15:00.000Z"
}
```

### PUT /quotes/:id

**Requires Authentication + Admin Role**

Updates an existing quote.

**Request Body:**

```json
{
  "text": "Updated quote text",
  "author": "Updated Author"
}
```

### DELETE /quotes/:id

**Requires Authentication + Admin Role**

Deletes a quote by ID.

---

## Web Interface

A web interface is available at `http://localhost:3000` that provides:

- User registration and login
- Quote browsing (public)
- Quote creation (authenticated users)
- Quote deletion (authenticated users)
- User management (authenticated users)

---

## Error Responses

### 401 Unauthorized

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 403 Forbidden

```json
{
  "statusCode": 403,
  "message": "Forbidden resource"
}
```

### 404 Not Found

```json
{
  "statusCode": 404,
  "message": "User with ID 999 not found"
}
```

### 409 Conflict

```json
{
  "statusCode": 409,
  "message": "Email already exists"
}
```

---

## Security Notes

1. **JWT Secret**: The current implementation uses a hardcoded secret key. In production, move this to environment variables.
2. **Password Hashing**: Passwords are hashed using bcrypt with a salt round of 10.
3. **Token Expiration**: JWT tokens expire after 1 day.
4. **CORS**: CORS is enabled for frontend access.

---

## Testing with cURL

### Register a new user:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Login:

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Get all quotes (public):

```bash
curl http://localhost:3000/quotes
```

### Create a quote (requires authentication):

```bash
curl -X POST http://localhost:3000/quotes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"text":"Test quote","author":"Test Author"}'
```

---

## Implementation Details

### Authentication Flow

1. User registers via POST /users (public)
2. User logs in via POST /auth/login (public)
3. Server validates credentials and returns JWT token
4. Client includes JWT token in Authorization header for protected routes
5. Server validates token and checks user role for authorization

### Authorization Levels

- **Public Routes**: /auth/login, POST /users, GET /quotes, GET /quotes/:id
- **User + Admin Routes**: POST /quotes, GET /users/:id
- **Admin Only Routes**: GET /users, PUT /users/:id, DELETE /users/:id, PUT /quotes/:id, DELETE /quotes/:id

### Guards

- **JwtAuthGuard**: Validates JWT token for protected routes
- **LocalAuthGuard**: Validates email/password for login
- **RolesGuard**: Checks if user has required role for authorization

### Decorators

- **@Public()**: Marks a route as public (skips authentication)
- **@Roles('admin', 'user')**: Specifies required roles for a route
