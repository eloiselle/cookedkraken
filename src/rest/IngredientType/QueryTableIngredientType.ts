import { DbEnv } from "../../databaseProperties.js";
import IngredientType from "./IngredientType.js";


// Find
export function findById(id_ingredient_type: number) {
  return DbEnv.table('ingredient_type')
    .select("id_ingredient_type", "name", "description")
    .where({
      id_ingredient_type: id_ingredient_type
    })
}

export function findAll() {
  return DbEnv.table('ingredient_type')
    .select("id_ingredient_type", "name", "description")
}

// Operations
export function create(IngredientType: IngredientType) {
  return DbEnv.insert([IngredientType]).into("ingredient_type")
}

export function update(IngredientType: IngredientType) {
  return DbEnv.table('ingredient_type')
    .where({
      id_ingredient_type: IngredientType.getIdIngredientType
    }).update(IngredientType)
}

export function remove(id_ingredient_type: number) {
  return DbEnv.table('ingredient_type')
    .where({
      id_ingredient_type: id_ingredient_type
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'ingredient_type' in PROD")
  else
    DbEnv.table("ingredient_type").truncate()
}

