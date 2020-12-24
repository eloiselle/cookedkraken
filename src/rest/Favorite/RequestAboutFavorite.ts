import { Request, Response } from "express";

import * as ErrorManager from "../../errorManager.js";
import * as QueryTableFavorite from "./QueryTableFavorite.js"
import Favorite from "./Favorite.js";


// █████▄.█████.▄████▄.█████▄.██.██...██..▄█████.
// ██..██.██....██..██.██..██.██.███..██.██▀.....
// █████..████..██████.██..██.██.██▀█▄██.██..███.
// ██..██.██....██..██.██..██.██.██..███.██▄..██.
// ██..██.█████.██..██.█████▀.██.██...██.▀█████▀.


export function getDataFromRequest(req: Request) {
  // Destructure request body
  const {
    id_user,
    id_meal
  } = req.body

  const favorite: Favorite = new Favorite(
    {
      id_user,
      id_meal
    })

  return favorite
}

export function findById(req: Request, res: Response): void {

  QueryTableFavorite.findById(Number(req.body.id_user), Number(req.body.id_meal))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdUser(req: Request, res: Response): void {

  QueryTableFavorite.findByIdUser(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function findByIdMeal(req: Request, res: Response): void {

  QueryTableFavorite.findByIdMeal(Number(req.params.id))
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function getAll(req: Request, res: Response<any>): void {

  QueryTableFavorite.findAll()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: any) => ErrorManager.onError(res, err))
}

// ▄█████▄.█████▄.█████.█████▄.▄████▄.██████.██.▄█████▄.██...██.▄████.
// ██▀.▀██.██..██.██....██..██.██..██...██...██.██▀.▀██.███..██.██....
// ██...██.█████▀.████..█████..██████...██...██.██...██.██▀█▄██.▀███▄.
// ██▄.▄██.██.....██....██..██.██..██...██...██.██▄.▄██.██..███....██.
// ▀█████▀.██.....█████.██..██.██..██...██...██.▀█████▀.██...██.████▀.


export function create(req: Request, res: Response): void {

  let favorite = getDataFromRequest(req)

  QueryTableFavorite.create(favorite)
    .then(() => res.status(201).json({ favorite }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function update(req: Request, res: Response<any>): void {

  let favorite = getDataFromRequest(req)

  QueryTableFavorite.update(favorite)
    .then(() => res.json({ message: 'request completed' }))
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function remove(req: Request, res: Response<any>): void {

  QueryTableFavorite.remove(Number(req.body.id_user), Number(req.body.id_meal))
    .then(() => res.status(204).json())
    .catch((err: any) => ErrorManager.onError(res, err))
}

export function clearTable() {
  QueryTableFavorite.clearTable()
}