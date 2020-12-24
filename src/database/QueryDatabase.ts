import knex from "knex"
import mdb from "knex-mariadb"

import { createTable } from "./QueryCreateTable.js"
import { insertData } from "./QueryInsertData.js"

export async function recreateTables() {

  // Temporary connection to drop and recreate the database
  let tempConnection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }

  let conn = knex({
    client: mdb,
    connection: tempConnection,
    pool: { min: 0, max: 7 }
  })

  let databaseName = process.env.DB_NAME
  await conn.raw('DROP DATABASE ' + databaseName + ';')
  await conn.raw('CREATE DATABASE ' + databaseName + ';')
  conn.destroy()

  // Create all the tables
  await createTable.version()
  await createTable.meal()
  await createTable.ingredient()
  await createTable.taMealIngredient()
  await createTable.objectType()
  await createTable.objectInstance()
  await createTable.taIngredientObjectInstance()
  await createTable.ingredientType()
  await createTable.taIngredientIngredientType()
  await createTable.taMealIngredientType()
  await createTable.permission()
  await createTable.user()
  await createTable.session()
  await createTable.favorite()
  await createTable.inventory()

  // Success!
  return "Database recreated."
}

export async function insertAllData() {

  // Insert all the data
  await insertData.version()
  await insertData.meal()
  await insertData.ingredient()
  await insertData.taMealIngredient()
  await insertData.objectType()
  await insertData.objectInstance()
  await insertData.taIngredientObjectInstance()
  await insertData.ingredientType()
  await insertData.taIngredientIngredientType()
  await insertData.taMealIngredientType()
  await insertData.permission()
  await insertData.user()
  await insertData.session()
  await insertData.favorite()
  await insertData.inventory()

  return "Data inserted."
}



