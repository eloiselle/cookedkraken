import knex from "knex"
import mdb from "knex-mariadb"
import dotenv from "dotenv";
dotenv.config()

const defaultConnection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

export const DbEnv = knex({
  client: mdb,
  connection: defaultConnection,
  pool: { min: 0, max: 7 }
})