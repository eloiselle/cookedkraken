import { Request, Response } from "express";
import * as QueryTableSession from "./QueryTableSession.js"
import * as ErrorManager from "../../errorManager.js";
import Session from "./Session.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_session,
    token,
    expiration,
    ipv4,
    id_user
  } = req.body

  const session: Session = new Session({
    id_session,
    token,
    expiration,
    ipv4,
    id_user
  })

  return session
}

export function findById(req: Request, res: Response): void {

  QueryTableSession.findById(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByToken(req: Request, res: Response): void {

  QueryTableSession.findByToken(String(req.params.token))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableSession.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let session = getDataFromRequest(req)

  QueryTableSession.create(session)
    .then(() => res.status(201).json({ session }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let session = getDataFromRequest(req)

  QueryTableSession.update(session)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableSession.remove(Number(req.params.id))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableSession.clearTable()
}

