import { DbEnv } from "../../databaseProperties.js";
import TaMealIngredient from "./TaMealIngredient.js";


// Find
export function findById(id_meal: number, id_ingredient: number) {
  return DbEnv.table('ta_meal_ingredient')
    .select("id_meal", "id_ingredient", "quantity")
    .where({
      id_meal: id_meal,
      id_ingredient: id_ingredient
    })
}

export function findByIdMeal(id_meal: number) {
  return DbEnv.table('ta_meal_ingredient')
    .select("id_meal", "id_ingredient", "quantity")
    .where({
      id_meal: id_meal
    })
}

export function findByIdIngredient(id_ingredient: number) {
  return DbEnv.table('ta_meal_ingredient')
    .select("id_meal", "id_ingredient", "quantity")
    .where({
      id_ingredient: id_ingredient
    })
}

export function findAll() {
  return DbEnv.table('ta_meal_ingredient')
    .select("id_meal", "id_ingredient", "quantity")
}

// Operations
export function create(TaMealIngredient: TaMealIngredient) {
  return DbEnv.insert([TaMealIngredient]).into("ta_meal_ingredient")
}

export function update(TaMealIngredient: TaMealIngredient) {
  return DbEnv.table('ta_meal_ingredient')
    .where({
      id_meal: TaMealIngredient.getIdMeal,
      id_ingredient: TaMealIngredient.getIdIngredient
    }).update(TaMealIngredient)
}

export function remove(id_meal: number, id_ingredient: number) {
  return DbEnv.table('ta_meal_ingredient')
    .where({
      id_meal: id_meal,
      id_ingredient: id_ingredient
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'ta_meal_ingredient' in PROD")
  else
    DbEnv.table("ta_meal_ingredient").truncate()
}

