/**
 * Represents a user in the system
 * 
 * This interface defines the structure of user data as stored in the database.
 * All fields except optional ones are required when creating or updating a user.
 */
export interface User {
  /** Unique identifier for the user */
  id: number;
  /** User's email address (must be unique) */
  email: string;
  /** Hashed password using bcrypt */
  password_hash: string;
  /** User's first name (optional) */
  first_name?: string;
  /** User's last name (optional) */
  last_name?: string;
  /** Whether the user account is active */
  is_active: boolean;
  /** Whether the user's email has been verified */
  is_verified: boolean;
  /** Timestamp when the user was created */
  created_at: Date;
  /** Timestamp when the user was last updated */
  updated_at: Date;
  /** Timestamp of the user's last login (optional) */
  last_login?: Date;
}

/**
 * Data required to create a new user
 * 
 * This interface defines the minimum required fields for user creation.
 * The password should already be hashed before passing to createUser function.
 */
export interface CreateUserData {
  /** User's email address (must be unique) */
  email: string;
  /** Pre-hashed password using bcrypt */
  password_hash: string;
  /** User's first name (optional) */
  first_name?: string;
  /** User's last name (optional) */
  last_name?: string;
}

/**
 * Data that can be updated for an existing user
 * 
 * This interface defines the fields that can be modified when updating a user.
 * All fields are optional - only provided fields will be updated.
 */
export interface UpdateUserData {
  /** User's first name (optional) */
  first_name?: string;
  /** User's last name (optional) */
  last_name?: string;
  /** Whether the user account is active (optional) */
  is_active?: boolean;
  /** Whether the user's email has been verified (optional) */
  is_verified?: boolean;
  /** Timestamp of the user's last login (optional) */
  last_login?: Date;
}
