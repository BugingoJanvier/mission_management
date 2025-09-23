// config/connection.js
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    driver: process.env.DB_DRIVER,
    timezone: process.env.TZ,
    DATABASE_INSTANCE_NAME: process.env.DATABASE_INSTANCE_NAME || '',
  },
};

// Sequelize connection without DB (for admin operations like CREATE DATABASE)
const adminSequelize = new Sequelize('', config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.db.driver,
  timezone: config.db.timezone,
  logging: false,
});

// Sequelize connection with DB (for normal usage after DB is created)
const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.driver,
    timezone: config.db.timezone,
    logging: false,
  }
);

export { adminSequelize, sequelize };
export default config;
