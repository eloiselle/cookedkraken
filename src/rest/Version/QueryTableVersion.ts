import { DbEnv } from "../../databaseProperties.js";
import Version from "./Version.js";

// Find
export function findById(id_version_specific: number) {
  return DbEnv.table('version')
    .select("id_version_specific", "name", "description")
    .where({
      id_version_specific: id_version_specific
    })
}

export function findAll() {
  return DbEnv.table('version')
    .select("id_version_specific", "name", "description")
}

// Operations
export function create(Version: Version) {
  return DbEnv.insert([Version]).into("version")
}

export function update(Version: Version) {
  return DbEnv.table('version')
    .where({
      id_version_specific: Version.getIdVersionSpecific
    }).update(Version)
}

export function remove(id_version_specific: number) {
  return DbEnv.table('version')
    .where({
      id_version_specific: id_version_specific
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'version' in PROD")
  else
    DbEnv.table("version").truncate()
}

