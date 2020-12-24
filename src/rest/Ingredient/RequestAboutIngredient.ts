import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableIngredient from "./QueryTableIngredient.js"
import Ingredient from "./Ingredient.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_ingredient,
    name,
    image_url,
    description,
    hp_value,
    hunger_value,
    sanity_value,
    spoil_time,
    can_cook,
    id_version_specific
  } = req.body

  const ingredient: Ingredient = new Ingredient(
    {
      id_ingredient,
      name,
      image_url,
      description,
      hp_value,
      hunger_value,
      sanity_value,
      spoil_time,
      can_cook,
      id_version_specific
    })

  return ingredient
}

export function findById(req: Request, res: Response): void {

  QueryTableIngredient.findById(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: Error) => ErrorManager.onError(res, err))
}

export function findByName(req: Request, res: Response): void {

  QueryTableIngredient.findByName(String(req.params.name))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: Error) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response): void {

  QueryTableIngredient.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: Error) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let ingredient = getDataFromRequest(req)

  QueryTableIngredient.create(ingredient)
    .then(() => res.status(201).json({ ingredient }))
    .catch((err: Error) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response): void {

  let ingredient = getDataFromRequest(req)

  QueryTableIngredient.update(ingredient)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: Error) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response): void {

  QueryTableIngredient.remove(Number(req.params.id))
    .then(() => res.status(204).json())
    .catch((err: Error) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableIngredient.clearTable()
}

