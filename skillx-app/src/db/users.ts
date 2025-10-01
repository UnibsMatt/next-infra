import { query } from './connection';
import { User, CreateUserData, UpdateUserData } from './types';

/**
 * Create a new user in the database
 */
export async function createUser(userData: CreateUserData): Promise<User> {
  const { email, password_hash, first_name, last_name } = userData;
  
  const result = await query(
    `INSERT INTO users (email, password_hash, first_name, last_name)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [email, password_hash, first_name || null, last_name || null]
  );
  
  return result.rows[0];
}

/**
 * Get a user by ID
 */
export async function getUserById(id: number): Promise<User | null> {
  const result = await query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  
  return result.rows[0] || null;
}

/**
 * Get a user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  
  return result.rows[0] || null;
}

/**
 * Get all users (with optional pagination)
 */
export async function getUsers(limit: number = 50, offset: number = 0): Promise<User[]> {
  const result = await query(
    'SELECT * FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2',
    [limit, offset]
  );
  
  return result.rows;
}

/**
 * Get active users only
 */
export async function getActiveUsers(limit: number = 50, offset: number = 0): Promise<User[]> {
  const result = await query(
    'SELECT * FROM users WHERE is_active = true ORDER BY created_at DESC LIMIT $1 OFFSET $2',
    [limit, offset]
  );
  
  return result.rows;
}

/**
 * Update a user by ID
 */
export async function updateUser(id: number, userData: UpdateUserData): Promise<User | null> {
  const fields = [];
  const values = [];
  let paramCount = 1;

  if (userData.first_name !== undefined) {
    fields.push(`first_name = $${paramCount}`);
    values.push(userData.first_name);
    paramCount++;
  }
  
  if (userData.last_name !== undefined) {
    fields.push(`last_name = $${paramCount}`);
    values.push(userData.last_name);
    paramCount++;
  }
  
  if (userData.is_active !== undefined) {
    fields.push(`is_active = $${paramCount}`);
    values.push(userData.is_active);
    paramCount++;
  }
  
  if (userData.is_verified !== undefined) {
    fields.push(`is_verified = $${paramCount}`);
    values.push(userData.is_verified);
    paramCount++;
  }
  
  if (userData.last_login !== undefined) {
    fields.push(`last_login = $${paramCount}`);
    values.push(userData.last_login);
    paramCount++;
  }

  if (fields.length === 0) {
    throw new Error('No fields to update');
  }

  values.push(id); // Add ID as the last parameter

  const result = await query(
    `UPDATE users SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
    values
  );
  
  return result.rows[0] || null;
}

/**
 * Delete a user by ID (soft delete - sets is_active to false)
 */
export async function deleteUser(id: number): Promise<boolean> {
  const result = await query(
    'UPDATE users SET is_active = false WHERE id = $1',
    [id]
  );
  
  return result.rowCount !== null && result.rowCount > 0;
}

/**
 * Permanently delete a user by ID
 */
export async function permanentlyDeleteUser(id: number): Promise<boolean> {
  const result = await query(
    'DELETE FROM users WHERE id = $1',
    [id]
  );
  
  return result.rowCount !== null && result.rowCount > 0;
}

/**
 * Verify a user's email
 */
export async function verifyUser(id: number): Promise<User | null> {
  const result = await query(
    'UPDATE users SET is_verified = true WHERE id = $1 RETURNING *',
    [id]
  );
  
  return result.rows[0] || null;
}

/**
 * Update user's last login timestamp
 */
export async function updateLastLogin(id: number): Promise<void> {
  await query(
    'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1',
    [id]
  );
}

/**
 * Check if email already exists
 */
export async function emailExists(email: string): Promise<boolean> {
  const result = await query(
    'SELECT 1 FROM users WHERE email = $1 LIMIT 1',
    [email]
  );
  
  return result.rows.length > 0;
}

/**
 * Get user count
 */
export async function getUserCount(): Promise<number> {
  const result = await query('SELECT COUNT(*) as count FROM users');
  return parseInt(result.rows[0].count);
}

/**
 * Get active user count
 */
export async function getActiveUserCount(): Promise<number> {
  const result = await query('SELECT COUNT(*) as count FROM users WHERE is_active = true');
  return parseInt(result.rows[0].count);
}
