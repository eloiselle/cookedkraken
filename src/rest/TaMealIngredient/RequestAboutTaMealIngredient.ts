import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableTaMealIngredient from "./QueryTableTaMealIngredient.js"
import TaMealIngredient from "./TaMealIngredient.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_meal,
    id_ingredient,
    quantity
  } = req.body

  const taMealIngredient: TaMealIngredient = new TaMealIngredient(
    {
      id_meal,
      id_ingredient,
      quantity
    })

  return taMealIngredient
}

export function findById(req: Request, res: Response): void {

  QueryTableTaMealIngredient.findById(Number(req.body.id_meal), Number(req.body.id_ingredient))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdMeal(req: Request, res: Response): void {

  QueryTableTaMealIngredient.findByIdMeal(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdIngredient(req: Request, res: Response): void {

  QueryTableTaMealIngredient.findByIdIngredient(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableTaMealIngredient.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let taMealIngredient = getDataFromRequest(req)

  QueryTableTaMealIngredient.create(taMealIngredient)
    .then(() => res.status(201).json({ taMealIngredient }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let taMealIngredient = getDataFromRequest(req)

  QueryTableTaMealIngredient.update(taMealIngredient)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableTaMealIngredient.remove(Number(req.body.id_meal), Number(req.body.id_ingredient))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableTaMealIngredient.clearTable()
}

