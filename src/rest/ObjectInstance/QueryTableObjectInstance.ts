import { DbEnv } from "../../databaseProperties.js";
import ObjectInstance from "./ObjectInstance.js";


// Find
export function findById(id_object_instance: number) {
  return DbEnv.table('object_instance')
    .select("id_object_instance", "name", "image_url", "description", "id_object_type", "id_version_specific")
    .where({
      id_object_instance: id_object_instance
    })
}

export function findAll() {
  return DbEnv.table('object_instance')
    .select("id_object_instance", "name", "image_url", "description", "id_object_type", "id_version_specific")
}

// Operations
export function create(ObjectInstance: ObjectInstance) {
  return DbEnv.insert([ObjectInstance]).into("object_instance")
}

export function update(ObjectInstance: ObjectInstance) {
  return DbEnv.table('object_instance')
    .where({
      id_object_instance: ObjectInstance.getIdObjectInstance
    }).update(ObjectInstance)
}

export function remove(id_object_instance: number) {
  return DbEnv.table('object_instance')
    .where({
      id_object_instance: id_object_instance
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'object_instance' in PROD")
  else
    DbEnv.table("object_instance").truncate()
}