import { DbEnv } from "../../databaseProperties.js";
import Meal from "./Meal.js";

// Find
export function findById(id_meal: number) {
  return DbEnv.table('meal')
    .select("id_meal", "name", "description", "image_url", "cook_time", "hp_value", "hunger_value", "sanity_value", "spoil_time", "priority", "id_version_specific")
    .where({
      id_meal: id_meal
    })
}

export function findByName(name: string) {
  return DbEnv.table('meal')
    .select("id_meal", "name", "description", "image_url", "cook_time", "hp_value", "hunger_value", "sanity_value", "spoil_time", "priority", "id_version_specific")
    .where({
      name: name
    })
}

export function findAll() {
  return DbEnv.table('meal')
    .select("id_meal", "name", "description", "image_url", "cook_time", "hp_value", "hunger_value", "sanity_value", "spoil_time", "priority", "id_version_specific")
}

// Operations
export function create(Meal: Meal) {
  return DbEnv.insert([Meal]).into('meal')
}

export function update(Meal: Meal) {
  return DbEnv.table('meal')
    .where({
      id_meal: Meal.getIdMeal
    }).update(Meal)
}

export function remove(id_meal: number) {
  return DbEnv.table('meal')
    .where({
      id_meal: id_meal
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'meal' in PROD")
  else
    DbEnv.table("meal").truncate()
}

