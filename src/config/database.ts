/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PWD,
  database: process.env.DATABASE_LIB,
}));
