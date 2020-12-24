import { DbEnv } from "../../databaseProperties.js";
import Inventory from "./Inventory.js";


// Find
export function findById(id_user: number, id_ingredient: number) {
  return DbEnv.table('inventory')
    .select("id_user", "id_ingredient", "quantity")
    .where({
      id_user: id_user,
      id_ingredient: id_ingredient
    })
}

export function findByIdUser(id_user: number) {
  return DbEnv.table('inventory')
    .select("id_user", "id_ingredient", "quantity")
    .where({
      id_user: id_user
    })
}

export function findByIdIngredient(id_ingredient: number) {
  return DbEnv.table('inventory')
    .select("id_user", "id_ingredient", "quantity")
    .where({
      id_ingredient: id_ingredient
    })
}

export function findAll() {
  return DbEnv.table('inventory')
    .select("id_user", "id_ingredient", "quantity")
}

// Operations
export function create(Inventory: Inventory) {
  return DbEnv.insert([Inventory]).into("inventory")
}

export function update(Inventory: Inventory) {
  return DbEnv.table('inventory')
    .where({
      id_user: Inventory.getIdUser,
      id_ingredient: Inventory.getIdIngredient
    }).update(Inventory)
}

export function remove(id_user: number, id_ingredient: number) {
  return DbEnv.table('inventory')
    .where({
      id_user: id_user,
      id_ingredient: id_ingredient
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'inventory' in PROD")
  else
    DbEnv.table("inventory").truncate()
}