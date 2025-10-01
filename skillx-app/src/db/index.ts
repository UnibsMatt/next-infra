// Database connection and utilities
export { getConnection, query, runMigrations, pool } from './connection';

// User functions
export {
  createUser,
  getUserById,
  getUserByEmail,
  getUsers,
  getActiveUsers,
  updateUser,
  deleteUser,
  permanentlyDeleteUser,
  verifyUser,
  updateLastLogin,
  emailExists,
  getUserCount,
  getActiveUserCount
} from './users';

// Types
export type { User, CreateUserData, UpdateUserData } from './types';
