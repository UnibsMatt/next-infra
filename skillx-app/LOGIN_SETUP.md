# Login Form Setup

This project includes a login form that creates JWT tokens and stores them in Redis.

## Features

- Simple login form with email and password fields
- Server-side JWT token creation
- Redis storage for token management
- Form validation and error handling
- Responsive design with Tailwind CSS

## Setup

### 1. Install Dependencies

The required dependencies are already installed:
- `jsonwebtoken` - For JWT token creation
- `@types/jsonwebtoken` - TypeScript types
- `redis` - Redis client
- `@types/redis` - TypeScript types

### 2. Environment Variables

Create a `.env.local` file in the root directory with:

```env
JWT_SECRET=your-super-secret-jwt-key-here
REDIS_URL=redis://localhost:6379
```

### 3. Redis Setup

Make sure Redis is running on your system:

**Windows:**
- Download Redis from https://github.com/microsoftarchive/redis/releases
- Or use Docker: `docker run -d -p 6379:6379 redis:alpine`

**macOS:**
```bash
brew install redis
brew services start redis
```

**Linux:**
```bash
sudo apt-get install redis-server
sudo systemctl start redis
```

### 4. Demo Credentials

Use these credentials to test the login:
- Email: `admin@example.com`
- Password: `password`

## How It Works

1. User submits login form with email and password
2. Server action `loginUser` validates credentials
3. If valid, creates a JWT token with user information
4. Token is stored in Redis with 24-hour expiration
5. Success/error message is displayed to user

## Security Notes

- Change the JWT_SECRET to a strong, random string in production
- Implement proper password hashing (bcrypt, etc.)
- Add rate limiting for login attempts
- Use HTTPS in production
- Validate and sanitize all inputs
- Implement proper user authentication against a real database

## File Structure

- `src/actions.tsx` - Server actions for login logic
- `src/components/LoginForm.tsx` - Client-side login form component
- `src/app/page.tsx` - Main page with login form
