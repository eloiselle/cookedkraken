import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableTaIngredientIngredientType from "./QueryTableTaIngredientIngredientType.js"
import TaIngredientIngredientType from "./TaIngredientIngredientType.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_ingredient_type,
    id_ingredient,
    type_value
  } = req.body

  const taIngredientIngredientType: TaIngredientIngredientType = new TaIngredientIngredientType(
    {
      id_ingredient_type,
      id_ingredient,
      type_value
    })

  return taIngredientIngredientType
}

export function findById(req: Request, res: Response): void {

  QueryTableTaIngredientIngredientType.findById(Number(req.body.id_ingredient_type), Number(req.body.id_ingredient))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdIngredientType(req: Request, res: Response): void {

  QueryTableTaIngredientIngredientType.findByIdIngredientType(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdIngredient(req: Request, res: Response): void {

  QueryTableTaIngredientIngredientType.findByIdIngredient(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableTaIngredientIngredientType.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let taIngredientIngredientType = getDataFromRequest(req)

  QueryTableTaIngredientIngredientType.create(taIngredientIngredientType)
    .then(() => res.status(201).json({ taIngredientIngredientType }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let taIngredientIngredientType = getDataFromRequest(req)

  QueryTableTaIngredientIngredientType.update(taIngredientIngredientType)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableTaIngredientIngredientType.remove(Number(req.body.id_ingredient_type), Number(req.body.id_ingredient))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableTaIngredientIngredientType.clearTable()
}

