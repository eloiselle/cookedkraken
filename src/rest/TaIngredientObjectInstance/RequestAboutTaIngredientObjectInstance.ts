import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableTaIngredientObjectInstance from "./QueryTableTaIngredientObjectInstance.js"
import TaIngredientObjectInstance from "./TaIngredientObjectInstance.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_object_instance,
    id_ingredient,
    drop_chance
  } = req.body

  const taIngredientObjectInstance: TaIngredientObjectInstance = new TaIngredientObjectInstance(
    {
      id_object_instance,
      id_ingredient,
      drop_chance
    })

  return taIngredientObjectInstance
}

export function findById(req: Request, res: Response): void {

  QueryTableTaIngredientObjectInstance.findById(Number(req.body.id_object_instance), Number(req.body.id_ingredient))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdObjectInstance(req: Request, res: Response): void {

  QueryTableTaIngredientObjectInstance.findByIdObjectInstance(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdIngredient(req: Request, res: Response): void {

  QueryTableTaIngredientObjectInstance.findByIdIngredient(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableTaIngredientObjectInstance.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let taIngredientObjectInstance = getDataFromRequest(req)

  QueryTableTaIngredientObjectInstance.create(taIngredientObjectInstance)
    .then(() => res.status(201).json({ taIngredientObjectInstance }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let taIngredientObjectInstance = getDataFromRequest(req)

  QueryTableTaIngredientObjectInstance.update(taIngredientObjectInstance)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableTaIngredientObjectInstance.remove(Number(req.body.id_object_instance), Number(req.body.id_ingredient))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableTaIngredientObjectInstance.clearTable()
}

