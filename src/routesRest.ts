import { Request, Response } from "express"

import * as RequestAboutIngredient from "./rest/Ingredient/RequestAboutIngredient.js"
import * as RequestAboutIngredientType from "./rest/IngredientType/RequestAboutIngredientType.js"
import * as RequestAboutMeal from "./rest/Meal/RequestAboutMeal.js"
import * as RequestAboutUser from "./rest/User/RequestAboutUser.js"
import * as RequestAboutSession from "./rest/Session/RequestAboutSession.js"
import * as RequestAboutPermission from "./rest/Permission/RequestAboutPermission.js"
import * as RequestAboutInventory from "./rest/Inventory/RequestAboutInventory.js"
import * as RequestAboutFavorite from "./rest/Favorite/RequestAboutFavorite.js"
import * as RequestAboutVersion from "./rest/Version/RequestAboutVersion.js"
import * as RequestAboutObjectInstance from "./rest/ObjectInstance/RequestAboutObjectInstance.js"
import * as RequestAboutObjectType from "./rest/ObjectType/RequestAboutObjectType.js"
import * as RequestAboutTaIngredientIngredientType from "./rest/TaIngredientIngredientType/RequestAboutTaIngredientIngredientType.js"
import * as RequestAboutTaMealIngredientType from "./rest/TaMealIngredientType/RequestAboutTaMealIngredientType.js"
import * as RequestAboutTaIngredientObjectInstance from "./rest/TaIngredientObjectInstance/RequestAboutTaIngredientObjectInstance.js"
import * as RequestAboutTaMealIngredient from "./rest/TaMealIngredient/RequestAboutTaMealIngredient.js"


export function routesRest(app: any) {

  // █████▄.▄█████▄.██....██.▄████▄.██.██...██.
  // ██..██.██▀.▀██.███▄▄███.██..██.██.███..██.
  // ██..██.██...██.██.██.██.██████.██.██▀█▄██.
  // ██..██.██▄.▄██.██....██.██..██.██.██..███.
  // █████▀.▀█████▀.██....██.██..██.██.██...██.


  // Ingredient
  app.route('/api/ingredient')
    .get((req: Request, res: Response) => RequestAboutIngredient.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutIngredient.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutIngredient.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutIngredient.remove(req, res))
  app.route('/api/ingredient/:id')
    .get((req: Request, res: Response) => RequestAboutIngredient.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutIngredient.remove(req, res))
  app.route('/api/ingredient/name/:name')
    .get((req: Request, res: Response) => RequestAboutIngredient.findByName(req, res))


  // IngredientType
  app.route('/api/ingredientType')
    .get((req: Request, res: Response) => RequestAboutIngredientType.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutIngredientType.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutIngredientType.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutIngredientType.remove(req, res))
  app.route('/api/ingredientType/:id')
    .get((req: Request, res: Response) => RequestAboutIngredientType.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutIngredientType.remove(req, res))


  // Meal
  app.route('/api/meal')
    .get((req: Request, res: Response) => RequestAboutMeal.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutMeal.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutMeal.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutMeal.remove(req, res))
  app.route('/api/meal/:id')
    .get((req: Request, res: Response) => RequestAboutMeal.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutMeal.remove(req, res))
  app.route('/api/meal/name/:name')
    .get((req: Request, res: Response) => RequestAboutMeal.findByName(req, res))



  // User
  app.route('/api/user')
    .get((req: Request, res: Response) => RequestAboutUser.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutUser.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutUser.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutUser.remove(req, res))
  app.route('/api/user/:id')
    .get((req: Request, res: Response) => RequestAboutUser.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutUser.remove(req, res))
  app.route('/api/user/name/:name')
    .get((req: Request, res: Response) => RequestAboutUser.findByName(req, res))
  app.route('/api/login')
    .post((req: Request, res: Response) => RequestAboutUser.login(req, res))

  // Session
  app.route('/api/session')
    .get((req: Request, res: Response) => RequestAboutSession.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutSession.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutSession.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutSession.remove(req, res))
  app.route('/api/session/:id')
    .get((req: Request, res: Response) => RequestAboutSession.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutSession.remove(req, res))
  app.route('/api/session/token/:token')
    .get((req: Request, res: Response) => RequestAboutSession.findByToken(req, res))


  // Permission
  app.route('/api/permission')
    .get((req: Request, res: Response) => RequestAboutPermission.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutPermission.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutPermission.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutPermission.remove(req, res))
  app.route('/api/permission/:id')
    .get((req: Request, res: Response) => RequestAboutPermission.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutPermission.remove(req, res))


  // ObjectInstance
  app.route('/api/objectInstance')
    .get((req: Request, res: Response) => RequestAboutObjectInstance.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutObjectInstance.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutObjectInstance.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutObjectInstance.remove(req, res))
  app.route('/api/objectInstance/:id')
    .get((req: Request, res: Response) => RequestAboutObjectInstance.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutObjectInstance.remove(req, res))


  // ObjectType
  app.route('/api/objectType')
    .get((req: Request, res: Response) => RequestAboutObjectType.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutObjectType.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutObjectType.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutObjectType.remove(req, res))
  app.route('/api/objectType/:id')
    .get((req: Request, res: Response) => RequestAboutObjectType.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutObjectType.remove(req, res))


  // Inventory (ta_user_ingredient)
  app.route('/api/inventory')
    .get((req: Request, res: Response) => RequestAboutInventory.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutInventory.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutInventory.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutInventory.remove(req, res))
  app.route('/api/inventory/:id')
    .get((req: Request, res: Response) => RequestAboutInventory.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutInventory.remove(req, res))
  app.route('/api/inventory/idIngredient/:id')
    .get((req: Request, res: Response) => RequestAboutInventory.findByIdIngredient(req, res))
  app.route('/api/inventory/idUser/:id')
    .get((req: Request, res: Response) => RequestAboutInventory.findByIdUser(req, res))


  // Favorite (ta_meal_user)
  app.route('/api/favorite')
    .get((req: Request, res: Response) => RequestAboutFavorite.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutFavorite.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutFavorite.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutFavorite.remove(req, res))
  app.route('/api/favorite/:id')
    .get((req: Request, res: Response) => RequestAboutFavorite.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutFavorite.remove(req, res))
  app.route('/api/favorite/idMeal/:id')
    .get((req: Request, res: Response) => RequestAboutFavorite.findByIdMeal(req, res))
  app.route('/api/favorite/idUser/:id')
    .get((req: Request, res: Response) => RequestAboutFavorite.findByIdUser(req, res))


  // Version
  app.route('/api/version')
    .get((req: Request, res: Response) => RequestAboutVersion.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutVersion.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutVersion.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutVersion.remove(req, res))
  app.route('/api/version/:id')
    .get((req: Request, res: Response) => RequestAboutVersion.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutVersion.remove(req, res))


  // TaIngredientIngredientType
  app.route('/api/taIngredientIngredientType')
    .get((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.remove(req, res))
  app.route('/api/taIngredientIngredientType/:id')
    .get((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.remove(req, res))
  app.route('/api/taIngredientIngredientType/idIngredient/:id')
    .get((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.findByIdIngredient(req, res))
  app.route('/api/taIngredientIngredientType/idIngredientType/:id')
    .get((req: Request, res: Response) => RequestAboutTaIngredientIngredientType.findByIdIngredientType(req, res))


  // TaMealIngredientType
  app.route('/api/taMealIngredientType')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredientType.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutTaMealIngredientType.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutTaMealIngredientType.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaMealIngredientType.remove(req, res))
  app.route('/api/taMealIngredientType/:id')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredientType.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaMealIngredientType.remove(req, res))
  app.route('/api/taMealIngredientType/idMeal/:id')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredientType.findByIdMeal(req, res))
  app.route('/api/taMealIngredientType/idIngredientType/:id')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredientType.findByIdIngredientType(req, res))


  // TaIngredientObjectInstance
  app.route('/api/taIngredientObjectInstance')
    .get((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.remove(req, res))
  app.route('/api/taIngredientObjectInstance/:id')
    .get((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.remove(req, res))
  app.route('/api/taIngredientObjectInstance/idIngredient/:id')
    .get((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.findByIdIngredient(req, res))
  app.route('/api/taIngredientObjectInstance/idObjectInstance/:id')
    .get((req: Request, res: Response) => RequestAboutTaIngredientObjectInstance.findByIdObjectInstance(req, res))


  // TaMealIngredient
  app.route('/api/taMealIngredient')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredient.getAll(req, res))
    .post((req: Request, res: Response) => RequestAboutTaMealIngredient.create(req, res))
    .patch((req: Request, res: Response) => RequestAboutTaMealIngredient.update(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaMealIngredient.remove(req, res))
  app.route('/api/taMealIngredient/:id')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredient.findById(req, res))
    .delete((req: Request, res: Response) => RequestAboutTaMealIngredient.remove(req, res))
  app.route('/api/taMealIngredient/idIngredient/:id')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredient.findByIdIngredient(req, res))
  app.route('/api/taMealIngredient/idMeal/:id')
    .get((req: Request, res: Response) => RequestAboutTaMealIngredient.findByIdMeal(req, res))


  return app;
}