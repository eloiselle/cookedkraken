import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableInventory from "./QueryTableInventory.js"
import Inventory from "./Inventory.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_user,
    id_ingredient,
    quantity
  } = req.body

  const inventory: Inventory = new Inventory(
    {
      id_user,
      id_ingredient,
      quantity
    })

  return inventory
}

export function findById(req: Request, res: Response): void {

  QueryTableInventory.findById(Number(req.body.id_user), Number(req.body.id_ingredient))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdUser(req: Request, res: Response): void {

  QueryTableInventory.findByIdUser(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdIngredient(req: Request, res: Response): void {

  QueryTableInventory.findByIdIngredient(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableInventory.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let inventory = getDataFromRequest(req)

  QueryTableInventory.create(inventory)
    .then(() => res.status(201).json({ inventory }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let inventory = getDataFromRequest(req)

  QueryTableInventory.update(inventory)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableInventory.remove(Number(req.body.id_user), Number(req.body.id_ingredient))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableInventory.clearTable()
}

