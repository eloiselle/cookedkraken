import { DbEnv } from "../../databaseProperties.js";
import TaIngredientIngredientType from "./TaIngredientIngredientType.js";


// Find
export function findById(id_ingredient_type: number, id_ingredient: number) {
  return DbEnv.table('ta_ingredient_ingredient_type')
    .select("id_ingredient_type", "id_ingredient", "type_value")
    .where({
      id_ingredient_type: id_ingredient_type,
      id_ingredient: id_ingredient
    })
}

export function findByIdIngredientType(id_ingredient_type: number) {
  return DbEnv.table('ta_ingredient_ingredient_type')
    .select("id_ingredient_type", "id_ingredient", "type_value")
    .where({
      id_ingredient_type: id_ingredient_type
    })
}

export function findByIdIngredient(id_ingredient: number) {
  return DbEnv.table('ta_ingredient_ingredient_type')
    .select("id_ingredient_type", "id_ingredient", "type_value")
    .where({
      id_ingredient: id_ingredient
    })
}

export function findAll() {
  return DbEnv.table('ta_ingredient_ingredient_type')
    .select("id_ingredient_type", "id_ingredient", "type_value")
}

// Operations
export function create(TaIngredientIngredientType: TaIngredientIngredientType) {
  return DbEnv.insert([TaIngredientIngredientType]).into("ta_ingredient_ingredient_type")
}

export function update(TaIngredientIngredientType: TaIngredientIngredientType) {
  return DbEnv.table('ta_ingredient_ingredient_type')
    .where({
      id_ingredient_type: TaIngredientIngredientType.getIdIngredientType,
      id_ingredient: TaIngredientIngredientType.getIdIngredient
    }).update(TaIngredientIngredientType)
}

export function remove(id_ingredient_type: number, id_ingredient: number) {
  return DbEnv.table('ta_ingredient_ingredient_type')
    .where({
      id_ingredient_type: id_ingredient_type,
      id_ingredient: id_ingredient
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'ta_ingredient_ingredient_type' in PROD")
  else
    DbEnv.table("ta_ingredient_ingredient_type").truncate()
}

