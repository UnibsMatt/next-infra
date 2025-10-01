import { Pool, PoolClient, QueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
    
/**
 * PostgreSQL connection pool configuration
 * 
 * The pool manages a set of connections to the PostgreSQL database with the following settings:
 * - max: 20 - Maximum number of connections in the pool
 * - idleTimeoutMillis: 30000 - Close idle connections after 30 seconds
 * - connectionTimeoutMillis: 2000 - Timeout for new connections after 2 seconds
 * 
 * Connection parameters are loaded from environment variables:
 * - DB_USER, DB_HOST, DB_NAME, DB_PASSWORD for individual connection parameters
 * - DATABASE_URL as an alternative connection string
 */
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

/**
 * Get a connection from the pool
 * 
 * @returns {Promise<PoolClient>} A PostgreSQL client connection from the pool
 * @throws {Error} If connection fails or pool is exhausted
 * 
 * @example
 * ```typescript
 * const client = await getConnection();
 * try {
 *   const result = await client.query('SELECT * FROM users');
 *   return result.rows;
 * } finally {
 *   client.release();
 * }
 * ```
 */
export async function getConnection(): Promise<PoolClient> {
  return await pool.connect();
}

/**
 * Execute a SQL query with optional parameters
 * 
 * This is a convenience function that automatically manages connection lifecycle.
 * It gets a connection from the pool, executes the query, and releases the connection.
 * 
 * @param {string} text - The SQL query string
 * @param {any[]} [params] - Optional array of parameters for parameterized queries
 * @returns {Promise<any>} The query result object containing rows, rowCount, etc.
 * @throws {Error} If query execution fails or connection cannot be established
 * 
 * @example
 * ```typescript
 * // Simple query
 * const result = await query('SELECT * FROM users WHERE active = true');
 * 
 * // Parameterized query
 * const user = await query('SELECT * FROM users WHERE id = $1', [userId]);
 * ```
 */
type Params = (number | string | null | undefined | boolean | Date)[] | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function query(text: string, params?: Params): Promise<QueryResult<any>> {
  const client = await getConnection();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}

/**
 * Run database migrations from the migrations directory
 * 
 * This function reads all SQL files from the migrations directory, sorts them alphabetically,
 * and executes them in order. This ensures database schema is up to date.
 * 
 * Migration files should be named with a numeric prefix (e.g., 001_create_table.sql)
 * to ensure proper execution order.
 * 
 * @returns {Promise<void>} Resolves when all migrations are completed successfully
 * @throws {Error} If migration execution fails or migration files cannot be read
 * 
 * @example
 * ```typescript
 * try {
 *   await runMigrations();
 *   console.log('Database schema updated successfully');
 * } catch (error) {
 *   console.error('Migration failed:', error);
 * }
 * ```
 */
export async function runMigrations(): Promise<void> {
  const client = await getConnection();
  try {
    // Read and execute migration files
    
    const migrationsDir = path.join(process.cwd(), 'src', 'db', 'migrations');
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter((file: string) => file.endsWith('.sql'))
      .sort();

    for (const file of migrationFiles) {
      const migrationPath = path.join(migrationsDir, file);
      const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
      
      console.log(`Running migration: ${file}`);
      await client.query(migrationSQL);
    }
    
    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Migration error:', error);
    throw error;
  } finally {
    client.release();
  }
}

/**
 * Export the PostgreSQL connection pool for direct access when needed
 * 
 * This should be used sparingly. Prefer using the getConnection() or query() functions
 * for most database operations as they handle connection lifecycle automatically.
 */
export { pool };
