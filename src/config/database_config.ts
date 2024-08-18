import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 27017,
    pass: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    name: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT
  }
}));
