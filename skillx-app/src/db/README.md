# Database Setup

This directory contains the database configuration, migrations, and user management functions for the SkillX application.

## Structure

- `migrations/` - SQL migration files
- `connection.ts` - Database connection and query utilities
- `users.ts` - User management functions
- `types.ts` - TypeScript type definitions
- `init.ts` - Database initialization script
- `index.ts` - Main exports

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Make sure your `.env` file contains:
   ```
   DATABASE_URL=postgresql://postgres:password@localhost:5432/skillx_db
   ```

3. **Start the database:**
   ```bash
   docker-compose up postgres -d
   ```

4. **Initialize the database:**
   ```bash
   npm run db:init
   ```

## Available Functions

### User Management
- `createUser(userData)` - Create a new user
- `getUserById(id)` - Get user by ID
- `getUserByEmail(email)` - Get user by email
- `getUsers(limit, offset)` - Get all users with pagination
- `getActiveUsers(limit, offset)` - Get active users only
- `updateUser(id, userData)` - Update user information
- `deleteUser(id)` - Soft delete user (sets is_active to false)
- `permanentlyDeleteUser(id)` - Permanently delete user
- `verifyUser(id)` - Mark user as verified
- `updateLastLogin(id)` - Update last login timestamp
- `emailExists(email)` - Check if email exists
- `getUserCount()` - Get total user count
- `getActiveUserCount()` - Get active user count

### Database Utilities
- `runMigrations()` - Run all pending migrations
- `query(sql, params)` - Execute raw SQL query
- `getConnection()` - Get database connection

## Sample Data

The initialization script creates a sample admin user:
- Email: `admin@example.com`
- Password: `password`

## Migration Files

Migrations are automatically run when the application starts. To add a new migration:

1. Create a new SQL file in `migrations/` with the format: `XXX_description.sql`
2. Use `CREATE TABLE IF NOT EXISTS` and `CREATE INDEX IF NOT EXISTS` for idempotency
3. The migration will be automatically executed

## Database Schema

### Users Table
- `id` - Primary key (SERIAL)
- `email` - Unique email address
- `password_hash` - Bcrypt hashed password
- `first_name` - User's first name (optional)
- `last_name` - User's last name (optional)
- `is_active` - Account status (default: true)
- `is_verified` - Email verification status (default: false)
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp (auto-updated)
- `last_login` - Last login timestamp (optional)
