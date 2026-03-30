import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import pg from "pg";
import "dotenv/config";

// Create a PostgreSQL pool using your DATABASE_URL
const connectionString = process.env.DATABASE_URL || "";
const pool = new pg.Pool({ connectionString });

// Use the Prisma PostgreSQL adapter
const adapter = new PrismaPg(pool);

// Construct Prisma client with adapter
const prisma = new PrismaClient({ adapter });

// export default prisma;

export default {
  datasource: {
    url: process.env.DATABASE_URL,
  },
};
