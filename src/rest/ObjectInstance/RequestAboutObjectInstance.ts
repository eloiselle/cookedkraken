import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableObjectInstance from "./QueryTableObjectInstance.js"
import ObjectInstance from "./ObjectInstance.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_object_instance,
    name,
    image_url,
    description,
    id_object_type,
    id_version_specific
  } = req.body

  const object_instance: ObjectInstance = new ObjectInstance(
    {
      id_object_instance,
      name,
      image_url,
      description,
      id_object_type,
      id_version_specific
    })

  return object_instance
}

export function findById(req: Request, res: Response): void {

  QueryTableObjectInstance.findById(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableObjectInstance.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let object_instance = getDataFromRequest(req)

  QueryTableObjectInstance.create(object_instance)
    .then(() => res.status(201).json({ object_instance }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let object_instance = getDataFromRequest(req)

  QueryTableObjectInstance.update(object_instance)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableObjectInstance.remove(Number(req.params.id))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableObjectInstance.clearTable()
}

