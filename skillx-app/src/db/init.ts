import "dotenv/config";
import { runMigrations, createUser } from './index';
import bcrypt from 'bcryptjs';

/**
 * Initialize the database with schema migrations and sample data
 * 
 * This function performs the following operations:
 * 1. Loads environment variables from .env file
 * 2. Runs all database migrations to set up schema
 * 3. Creates a sample admin user if it doesn't already exist
 * 4. Provides console output for monitoring initialization progress
 * 
 * The sample admin user has the following credentials:
 * - Email: admin@example.com
 * - Password: password
 * - Name: Admin User
 * 
 * @returns {Promise<void>} Resolves when initialization is complete
 * @throws {Error} If migration fails or user creation fails
 * 
 * @example
 * ```typescript
 * try {
 *   await initializeDatabaseWithSampleData();
 *   console.log('Database ready for use');
 * } catch (error) {
 *   console.error('Database initialization failed:', error);
 * }
 * ```
 */
export async function initializeDatabaseWithSampleData() {
  console.log("Environment:", {
    DATABASE_URL: process.env.DATABASE_URL
  });
  try {
    console.log('Running database migrations...');
    await runMigrations();
    console.log('Migrations completed successfully');

    // Check if admin user already exists
    const { getUserByEmail } = await import('./users');
    const existingAdmin = await getUserByEmail('admin@example.com');
    
    if (!existingAdmin) {
      console.log('Creating sample admin user...');
      const hashedPassword = await bcrypt.hash('password', 12);
      console.log('Hashed password:', hashedPassword);
      
      await createUser({
        email: 'admin@example.com',
        password_hash: hashedPassword,
        first_name: 'Admin',
        last_name: 'User',
      });
      
      console.log('Sample admin user created:');
      console.log('Email: admin@example.com');
      console.log('Password: password');
    } else {
      console.log('Admin user already exists');
    }

    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}

/**
 * Execute database initialization when this file is run directly
 * 
 * This allows the initialization script to be run from the command line:
 * ```bash
 * npx tsx src/db/init.ts
 * ```
 * 
 * The script will exit with code 0 on success or code 1 on failure.
 */
if (require.main === module) {
  initializeDatabaseWithSampleData()
    .then(() => {
      console.log('Initialization complete');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Initialization failed:', error);
      process.exit(1);
    });
}
