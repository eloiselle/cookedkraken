import { DbEnv } from "../../databaseProperties.js";
import Ingredient from "./Ingredient.js";


// Find
export function findById(id_ingredient: number) {
  return DbEnv.table('ingredient')
    .select("id_ingredient", "name", "image_url", "description", "hp_value", "hunger_value", "sanity_value", "spoil_time", "can_cook", "id_version_specific")
    .where({
      id_ingredient: id_ingredient
    })
}

export function findByName(name: String) {
  return DbEnv.table('ingredient')
    .select("id_ingredient", "name", "image_url", "description", "hp_value", "hunger_value", "sanity_value", "spoil_time", "can_cook", "id_version_specific")
    .where({
      name: name
    })
}

export function findAll() {
  return DbEnv.table('ingredient')
    .select("id_ingredient", "name", "image_url", "description", "hp_value", "hunger_value", "sanity_value", "spoil_time", "can_cook", "id_version_specific")
}

// Operations
export function create(Ingredient: Ingredient) {
  return DbEnv.insert([Ingredient]).into("ingredient")
}

export function update(Ingredient: Ingredient) {
  return DbEnv.table('ingredient')
    .where({
      id_ingredient: Ingredient.getIdIngredient
    }).update(Ingredient)
}

export function remove(id_ingredient: number) {
  return DbEnv.table('ingredient')
    .where({
      id_ingredient: id_ingredient
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'ingredient' in PROD")
  else
    DbEnv.table("ingredient").truncate()
}

