import { DbEnv } from "../../databaseProperties.js";
import Favorite from "./Favorite.js";

// Find
export function findById(id_meal: number, id_user: number) {
  return DbEnv.table('favorite')
    .select("id_user", "id_meal")
    .where({
      id_meal: id_meal,
      id_user: id_user
    })
}

export function findByIdUser(id_user: number) {
  return DbEnv.table('favorite')
    .select("id_user", "id_meal")
    .where({
      id_user: id_user
    })
}

export function findByIdMeal(id_meal: number) {
  return DbEnv.table('favorite')
    .select("id_user", "id_meal")
    .where({
      id_meal: id_meal
    })
}

export function findAll() {
  return DbEnv.table('favorite')
    .select("id_user", "id_meal")
}

// Operations
export function create(Favorite: Favorite) {
  return DbEnv.insert([Favorite]).into("favorite")
}

export function update(Favorite: Favorite) {
  return DbEnv.table('favorite')
    .where({
      id_user: Favorite.getIdUser,
      id_meal: Favorite.getIdMeal
    }).update(Favorite)
}

export function remove(id_user: number, id_meal: number) {
  return DbEnv.table('favorite')
    .where({
      id_user: id_user,
      id_meal: id_meal
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'favorite' in PROD")
  else
    DbEnv.table("favorite").truncate()
}