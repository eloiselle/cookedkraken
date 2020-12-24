import { Request, Response } from "express";

import * as ErrorManager from "../errorManager.js";
import * as QueryDatabase from "./QueryDatabase.js"


export function recreateTables(req: Request, res: Response): void {

  QueryDatabase.recreateTables()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: Error) => ErrorManager.onError(res, err))
}

export function insertAllData(req: Request, res: Response): void {

  QueryDatabase.insertAllData()
    .then((rs: any) => res.status(200).json(rs))
    .catch((err: Error) => ErrorManager.onError(res, err))
}