import { DbEnv } from "../../databaseProperties.js";
import TaIngredientObjectInstance from "./TaIngredientObjectInstance.js";


// Find
export function findById(id_object_instance: number, id_ingredient: number) {
  return DbEnv.table('ta_ingredient_object_instance')
    .select("id_object_instance", "id_ingredient", "drop_chance")
    .where({
      id_object_instance: id_object_instance,
      id_ingredient: id_ingredient
    })
}

export function findByIdObjectInstance(id_object_instance: number) {
  return DbEnv.table('ta_ingredient_object_instance')
    .select("id_object_instance", "id_ingredient", "drop_chance")
    .where({
      id_object_instance: id_object_instance
    })
}

export function findByIdIngredient(id_ingredient: number) {
  return DbEnv.table('ta_ingredient_object_instance')
    .select("id_object_instance", "id_ingredient", "drop_chance")
    .where({
      id_ingredient: id_ingredient
    })
}

export function findAll() {
  return DbEnv.table('ta_ingredient_object_instance')
    .select("id_object_instance", "id_ingredient", "drop_chance")
}

// Operations
export function create(TaIngredientObjectInstance: TaIngredientObjectInstance) {
  return DbEnv.insert([TaIngredientObjectInstance]).into("ta_ingredient_object_instance")
}

export function update(TaIngredientObjectInstance: TaIngredientObjectInstance) {
  return DbEnv.table('ta_ingredient_object_instance')
    .where({
      id_object_instance: TaIngredientObjectInstance.getIdObjectInstance,
      id_ingredient: TaIngredientObjectInstance.getIdIngredient
    }).update(TaIngredientObjectInstance)
}

export function remove(id_object_instance: number, id_ingredient: number) {
  return DbEnv.table('ta_ingredient_object_instance')
    .where({
      id_object_instance: id_object_instance,
      id_ingredient: id_ingredient
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'ta_ingredient_object_instance' in PROD")
  else
    DbEnv.table("ta_ingredient_object_instance").truncate()
}

