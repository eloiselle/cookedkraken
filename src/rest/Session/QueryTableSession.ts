import { DbEnv } from "../../databaseProperties.js";
import Session from "./Session";

// Find
export function findById(id_session: number) {
  return DbEnv.table('session')
    .select("id_session", "token", "expiration", "ipv4", "id_user")
    .where({
      id_session: id_session
    })
}

export function findByToken(token: string) {
  return DbEnv.table('session')
    .select("id_session", "token", "expiration", "ipv4", "id_user")
    .where({
      token: token
    })
}

export function findAll() {
  return DbEnv.table('session')
    .select("id_session", "token", "expiration", "ipv4", "id_user")
}

// Operations
export function create(Session: Session) {
  return DbEnv.insert([Session]).into("session")
}

export function update(Session: Session) {
  return DbEnv.table('session')
    .where({
      id_session: Session.getIdSession
    }).update(Session)
}

export function remove(id_session: number) {
  return DbEnv.table('session')
    .where({
      id_session: id_session
    }).delete()
}

// Clear
export function clearTable() {
  if (process.env.NODE_ENV == "prod" || process.env.NODE_ENV == "production")
    throw Error("You should never clear the table 'session' in PROD")
  else
    DbEnv.table("session").truncate()
}