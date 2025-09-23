import { adminSequelize } from '../config/connection.js';

async function createDatabase() {
  try {
    const dbName = process.env.DB_NAME;

    // Create database if it does not exist
    await adminSequelize.query(`
      IF NOT EXISTS (
        SELECT name FROM sys.databases WHERE name = '${dbName}'
      ) CREATE DATABASE [${dbName}]
    `);

    console.log(`✅ Database '${dbName}' is ready!`);
  } catch (error) {
    console.error('❌ Error creating database:', error);
  } finally {
    await adminSequelize.close();
  }
}

export default createDatabase;
