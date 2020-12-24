import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableObjectType from "./QueryTableObjectType.js"
import ObjectType from "./ObjectType.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_object_type,
    name,
    description
  } = req.body

  const object_type: ObjectType = new ObjectType(
    {
      id_object_type,
      name,
      description
    })

  return object_type
}

export function findById(req: Request, res: Response): void {

  QueryTableObjectType.findById(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableObjectType.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let object_type = getDataFromRequest(req)

  QueryTableObjectType.create(object_type)
    .then(() => res.status(201).json({ object_type }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let object_type = getDataFromRequest(req)

  QueryTableObjectType.update(object_type)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableObjectType.remove(Number(req.params.id))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableObjectType.clearTable()
}

