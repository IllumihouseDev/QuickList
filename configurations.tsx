import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { Database } from "./databaseTypes";

import dotenv from "dotenv";

dotenv.config();

// Export the environment variables
export const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } =
  process.env;

try {
  const db = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    }),
  });
  console.log("Connection established");
} catch (error) {
  console.log("Error connecting to the database:", error);
}
