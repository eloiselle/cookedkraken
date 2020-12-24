import { DbEnv } from "../../databaseProperties.js";
import Permission from "./Permission.js";


// Find
export function findById(id_permission: number) {
  return DbEnv.table('permission')
    .select("id_permission", "name", "description")
    .where({
      id_permission: id_permission
    })
}

export function findAll() {
  return DbEnv.table('permission')
    .select("id_permission", "name", "description")
}

// Operations
export function create(Permission: Permission) {
  return DbEnv.insert([Permission]).into("permission")
}

export function update(Permission: Permission) {
  return DbEnv.table('permission')
    .where({
      id_permission: Permission.getIdPermission
    }).update(Permission)
}

export function remove(id_permission: number) {
  return DbEnv.table('permission')
    .where({
      id_permission: id_permission
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'permission' in PROD")
  else
    DbEnv.table("permission").truncate()
}