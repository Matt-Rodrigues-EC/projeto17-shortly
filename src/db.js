import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg

const configDatabase = {
    connectionString: process.env.DATABASE_URL
};
console.log("DataBase connected...");

if(process.env.MODE === "prod") configDatabase.ssl = true;

export const db = new Pool(configDatabase);