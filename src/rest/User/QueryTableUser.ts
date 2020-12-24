import { DbEnv } from "../../databaseProperties.js";
import User from "./User.js";

// Login
export function loginAttempt(username: string) {
  console.log("Login attempt on username: '" + username + "'")
  return DbEnv.table('user')
    .select("id_user", "username", "password", "id_permission")
    .where({ username })
}

// Find
export function findById(id_user: number) {
  return DbEnv.table('user')
    .select("id_user", "username", "password", "id_permission")
    .where({
      id_user: id_user
    })
}

export function findByName(username: string) {
    return DbEnv.table('user')
        .select("id_user", "username", "password", "id_permission")
        .where({
            username: username
        })
}

export function findAll() {
  return DbEnv.table('user')
    .select("id_user", "username", "password", "id_permission")
}

// Operations
export function create(User: User) {
  return DbEnv.insert([User]).into("user")
}

export function update(User: User) {
  return DbEnv.table('user')
    .where({
      id_user: User.id_user
    }).update(User)
}

export function remove(id_user: number) {
  return DbEnv.table('user')
    .where({
      id_user: id_user
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'user' in PROD")
  else
    DbEnv.table("user").truncate()
}

