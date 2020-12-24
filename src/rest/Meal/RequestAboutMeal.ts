import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableMeal from "./QueryTableMeal.js"
import Meal from "./Meal.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_meal,
    name,
    description,
    cook_time,
    hp_value,
    hunger_value,
    sanity_value,
    spoil_time,
    id_version_specific
  } = req.body

  const meal: Meal = new Meal(
    {
      id_meal,
      name,
      description,
      cook_time,
      hp_value,
      hunger_value,
      sanity_value,
      spoil_time,
      id_version_specific
    })

  return meal
}

export function findById(req: Request, res: Response): void {

  QueryTableMeal.findById(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByName(req: Request, res: Response): void {

  QueryTableMeal.findByName(String(req.params.name))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: Error) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableMeal.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let meal = getDataFromRequest(req)

  QueryTableMeal.create(meal)
    .then(() => res.status(201).json({ meal }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let meal = getDataFromRequest(req)

  QueryTableMeal.update(meal)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableMeal.remove(Number(req.params.id))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableMeal.clearTable()
}

