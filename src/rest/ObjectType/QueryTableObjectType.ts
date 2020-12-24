import { DbEnv } from "../../databaseProperties.js";
import ObjectType from "./ObjectType.js";


// Find
export function findById(id_object_type: number) {
  return DbEnv.table('object_type')
    .select("id_object_type", "name", "description")
    .where({
      id_object_type: id_object_type
    })
}

export function findAll() {
  return DbEnv.table('object_type')
    .select("id_object_type", "name", "description")
}

// Operations
export function create(ObjectType: ObjectType) {
  return DbEnv.insert([ObjectType]).into("object_type")
}

export function update(ObjectType: ObjectType) {
  return DbEnv.table('object_type')
    .where({
      id_object_type: ObjectType.getIdObjectType
    }).update(ObjectType)
}

export function remove(id_object_type: number) {
  return DbEnv.table('object_type')
    .where({
      id_object_type: id_object_type
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'object_type' in PROD")
  else
    DbEnv.table("object_type").truncate()
}