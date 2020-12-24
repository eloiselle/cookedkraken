import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableTaMealIngredientType from "./QueryTableTaMealIngredientType.js"
import TaMealIngredientType from "./TaMealIngredientType.js";


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

  const taMealIngredientType: TaMealIngredientType = new TaMealIngredientType(
    {
      id_ingredient_type,
      id_ingredient,
      type_value
    })

  return taMealIngredientType
}

export function findById(req: Request, res: Response): void {

  QueryTableTaMealIngredientType.findById(Number(req.body.id_ingredient_type), Number(req.body.id_ingredient))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdIngredientType(req: Request, res: Response): void {

  QueryTableTaMealIngredientType.findByIdIngredientType(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdMeal(req: Request, res: Response): void {

  QueryTableTaMealIngredientType.findByIdMeal(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableTaMealIngredientType.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let taMealIngredientType = getDataFromRequest(req)

  QueryTableTaMealIngredientType.create(taMealIngredientType)
    .then(() => res.status(201).json({ taMealIngredientType }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let taMealIngredientType = getDataFromRequest(req)

  QueryTableTaMealIngredientType.update(taMealIngredientType)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableTaMealIngredientType.remove(Number(req.body.id_ingredient_type), Number(req.body.id_ingredient))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableTaMealIngredientType.clearTable()
}

