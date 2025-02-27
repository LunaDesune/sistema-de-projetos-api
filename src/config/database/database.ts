import { Pool }from "pg";
import dotenv from "dotenv"

dotenv.config();

const database = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: 5432
});

export default database;

