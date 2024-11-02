import dotenv from 'dotenv';
import { NextConfig } from 'next';
dotenv.config({ path: '../back-end/.env' });


const nextConfig: NextConfig = {
  env: {
    SERVER_PORT: process.env.SERVER_PORT,
    DB_HOST: process.env.DB_HOST,
  },
};

export default nextConfig;
