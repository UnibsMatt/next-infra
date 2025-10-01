"use server";
import { createUser, emailExists } from './db';
import bcrypt from 'bcryptjs';
import { getRedisClient } from '@/db/redis_client';



/**
 * Retrieve the sessionId from localStorage (on client) or from argument (on server),
 * and check if the token associated with that sessionId in Redis is valid (exists and not expired).
 * 
 * @param {string} sessionId - The session ID to check in Redis.
 * @returns {Promise<{ valid: boolean, token?: string }>} - Whether the session is valid and the token if valid.
 */
export async function checkSessionToken(sessionId: string): Promise<{ valid: boolean, token?: string }> {
  if (!sessionId) {
    return { valid: false };
  }
  
  const redis = getRedisClient();
  
  try {
    // Assume the token is stored in Redis with the sessionId as the key
    const token = await redis.get(`session:${sessionId}`);
    if (token) {
      // Call Django /api/token/verify endpoint to verify the token
      const response = await fetch("http://127.0.0.1:8000/api/token/verify/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        return { valid: false };
      }
      return { valid: true };
    } else {
      return { valid: false };
    }
  } catch (error) {
    console.error('Error checking session token in Redis:', error);
    return { valid: false };
  }
}


/**
 * Authenticate a user with email and password
 * 
 * This server action handles user login by:
 * 1. Validating username and password are provided
 * 2. Retrieving user from database by username
 * 3. Checking if user account is active
 * 4. Verifying password using bcrypt
 * 5. Updating last login timestamp
 * 6. Creating a JWT token with 1-hour expiration
 * 7. Storing the token in Redis for session management
 * 
 * @param {FormData} formData - Form data containing email and password
 * @returns {Promise<{success: boolean, token?: string, error?: string}>} Login result with token on success or error message
 * 
 * @example
 * ```typescript
 * const formData = new FormData();
 * formData.append('email', 'user@example.com');
 * formData.append('password', 'userpassword');
 * 
 * const result = await loginUser(formData);
 * if (result.success) {
 *   // Store token for authenticated requests
 *   localStorage.setItem('token', result.token);
 * }
 * ```
 */
export async function loginUser(formData: FormData) {
  try {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (!username || !password) {
      return { success: false, error: 'Username and password are required' };
    }

    // Call Django /api/token endpoint to obtain JWT tokens
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return { success: false, error: data.detail || 'Invalid credentials' };
    }
    // Parse the response to get tokens
    const tokenData: { access: string, refresh: string } = await response.json();
    // tokenData should have { access, refresh }
    if (!tokenData.access || !tokenData.refresh) {
      return { success: false, error: 'Token not received from backend' };
    }

    // Store token in Redis
    const redis = getRedisClient();
    
    // Store token with expiration (1 hours) using a random unique session id
    const sessionId = crypto.randomUUID();
    await redis.setEx(`session:${sessionId}`, 18000, tokenData.access);

    return { success: true, sessionId: sessionId };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'An error occurred during login' };
  }
}

/**
 * Register a new user account
 * 
 * This server action handles user registration by:
 * 1. Validating required fields (email and password)
 * 2. Checking if email already exists in database
 * 3. Hashing password with bcrypt (12 rounds)
 * 4. Creating new user record in database
 * 5. Returning success confirmation with user ID
 * 
 * @param {FormData} formData - Form data containing email, password, firstName, and lastName
 * @returns {Promise<{success: boolean, message?: string, userId?: number, error?: string}>} Registration result with user ID on success or error message
 * 
 * @example
 * ```typescript
 * const formData = new FormData();
 * formData.append('email', 'newuser@example.com');
 * formData.append('password', 'securepassword');
 * formData.append('firstName', 'John');
 * formData.append('lastName', 'Doe');
 * 
 * const result = await registerUser(formData);
 * if (result.success) {
 *   console.log(`User created with ID: ${result.userId}`);
 * }
 * ```
 */
export async function registerUser(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    // Check if email already exists
    const emailAlreadyExists = await emailExists(email);
    if (emailAlreadyExists) {
      return { success: false, error: 'Email already registered' };
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user in database
    const user = await createUser({
      email,
      password_hash: passwordHash,
      first_name: firstName || undefined,
      last_name: lastName || undefined,
    });

    return { 
      success: true, 
      message: 'User registered successfully',
      userId: user.id 
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'An error occurred during registration' };
  }
}
