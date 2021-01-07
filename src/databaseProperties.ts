import knex from "knex"
import dotenv from "dotenv";
import { recreateTables } from "./database/QueryDatabase.js";
import nconf from "nconf"
dotenv.config()

const latestDbVersion = "1.1.2"

const defaultConnection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

export const DbEnv = knex({
  client: "mysql",
  connection: defaultConnection,
  pool: { min: 0, max: 7 }
})

export function updateDatabase() {

  nconf.use('file', { file: './database_config.json' });
  nconf.load();

  let dbVersion = nconf.get('DATABASE_VERSION') as String

  // If the version is undefined, create the database and insert curernt version
  if (dbVersion == undefined) {
    console.log("Database non-existant. Creating...")

    recreateTables()

    nconf.set('DATABASE_VERSION', latestDbVersion)
    console.log("Database recreated. New database version:", nconf.get('DATABASE_VERSION'))

    nconfSave()
    return
  }

  let delims = ".";
  let currentDbTokens = dbVersion.split(delims);
  let latestDbTokens = latestDbVersion.split(delims);

  // Parse the version with each numbers
  const latestDbVersion_major = Number(latestDbTokens[0])
  const latestDbVersion_minor = Number(latestDbTokens[1])
  const latestDbVersion_patch = Number(latestDbTokens[2])

  let currentDbVersion_major = Number(currentDbTokens[0])
  let currentDbVersion_minor = Number(currentDbTokens[1])
  let currentDbVersion_patch = Number(currentDbTokens[2])

  // If the version is different, update the database
  if (currentDbVersion_major != latestDbVersion_major || currentDbVersion_minor != latestDbVersion_minor || currentDbVersion_patch != latestDbVersion_patch) {
    console.log("Database outdated. Updating...")

    nconf.set('DATABASE_VERSION', latestDbVersion)

    nconfSave()
    return
  }

  console.log("Database up-to-date.")
}

function nconfSave() {
  nconf.save(function (err: { message: any; }) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Configuration saved successfully.');
  });
}