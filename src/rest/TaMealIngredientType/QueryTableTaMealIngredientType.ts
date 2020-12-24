import { DbEnv } from "../../databaseProperties.js";
import TaMealIngredientType from "./TaMealIngredientType.js";


// Find
export function findById(id_ingredient_type: number, id_meal: number) {
  return DbEnv.table('ta_meal_ingredient_type')
    .select("id_ingredient_type", "id_meal", "type_value")
    .where({
      id_ingredient_type: id_ingredient_type,
      id_meal: id_meal
    })
}

export function findByIdIngredientType(id_ingredient_type: number) {
  return DbEnv.table('ta_meal_ingredient_type')
    .select("id_ingredient_type", "id_meal", "type_value")
    .where({
      id_ingredient_type: id_ingredient_type
    })
}

export function findByIdMeal(id_meal: number) {
  return DbEnv.table('ta_meal_ingredient_type')
    .select("id_ingredient_type", "id_meal", "type_value")
    .where({
      id_meal: id_meal
    })
}

export function findAll() {
  return DbEnv.table('ta_meal_ingredient_type')
    .select("id_ingredient_type", "id_meal", "type_value")
}

// Operations
export function create(TaMealIngredientType: TaMealIngredientType) {
  return DbEnv.insert([TaMealIngredientType]).into("ta_meal_ingredient_type")
}

export function update(TaMealIngredientType: TaMealIngredientType) {
  return DbEnv.table('ta_meal_ingredient_type')
    .where({
      id_ingredient_type: TaMealIngredientType.getIdIngredientType,
      id_meal: TaMealIngredientType.getIdMeal
    }).update(TaMealIngredientType)
}

export function remove(id_ingredient_type: number, id_meal: number) {
  return DbEnv.table('ta_meal_ingredient_type')
    .where({
      id_ingredient_type: id_ingredient_type,
      id_meal: id_meal
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'ta_meal_ingredient_type' in PROD")
  else
    DbEnv.table("ta_meal_ingredient_type").truncate()
}

