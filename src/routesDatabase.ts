import { Request, Response } from "express"
import * as RequestAboutDatabase from "./database/RequestAboutDatabase.js"


export function routesDatabase(app: any) {

  // █████▄.▄█████▄.██....██.▄████▄.██.██...██.
  // ██..██.██▀.▀██.███▄▄███.██..██.██.███..██.
  // ██..██.██...██.██.██.██.██████.██.██▀█▄██.
  // ██..██.██▄.▄██.██....██.██..██.██.██..███.
  // █████▀.▀█████▀.██....██.██..██.██.██...██.


  app.route('/database/recreateTables')
    .post((req: Request, res: Response) => RequestAboutDatabase.recreateTables(req, res))

  app.route('/database/insertAllData')
    .post((req: Request, res: Response) => RequestAboutDatabase.insertAllData(req, res))

  return app;
}