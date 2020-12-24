import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";

import * as QueryTableUser from "./QueryTableUser.js";
import * as QueryTableSession from "../Session/QueryTableSession.js";

import User from "./User.js";
import Session from "../Session/Session.js";

import bcrypt from "bcrypt";
import { TokenGenerator } from "ts-token-generator";

const saltRounds = 10;

// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


async function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_user,
    username,
    password,
    id_permission
  } = req.body

  let encryptedPassword = await bcrypt.hash(password, saltRounds)

  const user: User = new User(
    {
      id_user,
      username,
      password: encryptedPassword,
      id_permission
    })

  return user
}

export function findById(req: Request, res: Response): void {

  QueryTableUser.findById(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByName(req: Request, res: Response): void {

  QueryTableUser.findByName(String(req.params.name))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableUser.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export async function create(req: Request, res: Response): Promise<void> {

  let user = await getDataFromRequest(req)

  QueryTableUser.create(user)
    .then(() => res.status(201).json({ user }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export async function update(req: Request, res: Response<any>): Promise<void> {

  let user = await getDataFromRequest(req)

  QueryTableUser.update(user)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableUser.remove(Number(req.params.id))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableUser.clearTable()
}

/*
##        #######   ######   #### ##    ## 
##       ##     ## ##    ##   ##  ###   ## 
##       ##     ## ##         ##  ####  ## 
##       ##     ## ##   ####  ##  ## ## ## 
##       ##     ## ##    ##   ##  ##  #### 
##       ##     ## ##    ##   ##  ##   ### 
########  #######   ######   #### ##    ## 
*/


export async function login(req: Request, res: Response): Promise<void> {

  QueryTableUser.loginAttempt(String(req.body.username))
    .then(async (rs: any) => {

      let result = await processLogin(rs, req.body.password)

      if (result != undefined) {
        createSession(result.id_user, result.newToken, String(req.connection.remoteAddress))
        res.status(200).json(result.newToken)
      }

      else
        res.status(401).json("Invalid credentials")
    })
    .catch((err: any) => ErrorManager.onError(res, err))
}

async function processLogin(res: any, attemptedPassword: any) {

  let id_user: any = res[0].id_user
  let storedHash: any = res[0].password
  let isIdentical = await bcrypt.compare(attemptedPassword, storedHash)

  let newToken = undefined

  if (isIdentical) {
    const tokgen = new TokenGenerator(); // Default is a 128-bit token encoded in base58
    newToken = tokgen.generate();
    return { id_user, newToken }
  }

  return undefined
}

async function createSession(id_user: number, newToken: string, ipv4: string) {

  let expiration = 6 // In hours

  let session: Session = new Session({ token: newToken, expiration, ipv4, id_user })

  QueryTableSession.create(session)
    .then((rs: any) => console.log(rs))
}