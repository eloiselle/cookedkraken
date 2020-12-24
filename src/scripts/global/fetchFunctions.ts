
const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }

/*
######## ######## ########  ######  ##     ##          ###    ##       ##       
##       ##          ##    ##    ## ##     ##         ## ##   ##       ##       
##       ##          ##    ##       ##     ##        ##   ##  ##       ##       
######   ######      ##    ##       #########       ##     ## ##       ##       
##       ##          ##    ##       ##     ##       ######### ##       ##       
##       ##          ##    ##    ## ##     ##       ##     ## ##       ##       
##       ########    ##     ######  ##     ##       ##     ## ######## ######## 
*/

export module fetchAll {

  const method = 'GET'

  export async function favorite() {
    let data = await fetch(`/api/favorite/`, { method })
    return await data.json()
  }

  export async function ingredient() {
    let data = await fetch(`/api/ingredient/`, { method })
    return await data.json()
  }

  export async function ingredientType() {
    let data = await fetch(`/api/ingredientType/`, { method })
    return await data.json()
  }

  export async function inventory() {
    let data = await fetch(`/api/inventory/`, { method })
    return await data.json()
  }

  export async function meal() {
    let data = await fetch(`/api/meal/`, { method })
    return await data.json()
  }

  export async function objectInstance() {
    let data = await fetch(`/api/objectInstance/`, { method })
    return await data.json()
  }

  export async function objectType() {
    let data = await fetch(`/api/objectType/`, { method })
    return await data.json()
  }

  export async function permission() {
    let data = await fetch(`/api/permission/`, { method })
    return await data.json()
  }

  export async function session() {
    let data = await fetch(`/api/session/`, { method })
    return await data.json()
  }

  export async function taIngredientIngredientType() {
    let data = await fetch(`/api/taIngredientIngredientType/`, { method })
    return await data.json()
  }

  export async function taIngredientObjectInstance() {
    let data = await fetch(`/api/taIngredientObjectInstance/`, { method })
    return await data.json()
  }

  export async function taMealIngredient() {
    let data = await fetch(`/api/taMealIngredient/`, { method })
    return await data.json()
  }

  export async function taMealIngredientType() {
    let data = await fetch(`/api/taMealIngredientType/`, { method })
    return await data.json()
  }

  export async function user() {
    let data = await fetch(`/api/user/`, { method })
    return await data.json()
  }

  export async function version() {
    let data = await fetch(`/api/version/`, { method })
    return await data.json()
  }

}

/*
######## ######## ########  ######  ##     ##       #### ########  
##       ##          ##    ##    ## ##     ##        ##  ##     ## 
##       ##          ##    ##       ##     ##        ##  ##     ## 
######   ######      ##    ##       #########        ##  ##     ## 
##       ##          ##    ##       ##     ##        ##  ##     ## 
##       ##          ##    ##    ## ##     ##        ##  ##     ## 
##       ########    ##     ######  ##     ##       #### ########  
*/

export module fetchId {

  const method = 'GET'

  // Rest objects
  export async function ingredient(id: number) {
    let ingredient = await fetch(`/api/ingredient/${id}`, { method })
    return await ingredient.json()
  }

  export async function ingredient_name(name_ingredient: string) {
    let ingredient = await fetch(`/api/ingredient/name/${name_ingredient}`, { method })
    return await ingredient.json()
  }

  export async function ingredientType(id: number) {
    let ingredientType = await fetch(`/api/ingredientType/${id}`, { method })
    return await ingredientType.json()
  }

  export async function inventory_userId(id: number) {
    let inventory = await fetch(`/api/inventory/idUser/${id}`)
    return await inventory.json()
  }

  export async function inventory_ingredientId(id: number) {
    let inventory = await fetch(`/api/inventory/idIngredient/${id}`)
    return await inventory.json()
  }

  export async function favorite_userId(id: number) {
    let inventory = await fetch(`../api/favorite/idUser/${id}`)
    return await inventory.json()
  }

  export async function favorite_mealId(id: number) {
    let inventory = await fetch(`/api/favorite/idMeal/${id}`)
    return await inventory.json()
  }

  export async function meal(id: number) {
    let meal = await fetch(`/api/meal/${id}`, { method })
    return await meal.json()
  }

  export async function meal_name(name_meal: string) {
    let meal = await fetch(`/api/meal/name/${name_meal}`, { method })
    return await meal.json()
  }

  export async function objectInstance(id: number) {
    let objectInstance = await fetch(`/api/objectInstance/${id}`, { method })
    return await objectInstance.json()
  }

  export async function objectType(id: number) {
    let objectType = await fetch(`/api/objectType/${id}`, { method })
    return await objectType.json()
  }

  export async function permission(id: number) {
    let permission = await fetch(`/api/permission/${id}`, { method })
    return await permission.json()
  }

  export async function session(id: number) {
    let session = await fetch(`/api/session/${id}`, { method })
    return await session.json()
  }

  export async function session_token(token: string) {
    let session = await fetch(`/api/session/token/${token}`, { method })
    return await session.json()
  }

  export async function user(id: number) {
    let user = await fetch(`/api/user/${id}`, { method })
    return await user.json()
  }

  export async function user_name(username: string) {
    let user = await fetch(`/api/user/name/${username}`, { method })
    return await user.json()
  }

  export async function version(id: number) {
    let version = await fetch(`/api/version/${id}`, { method })
    return await version.json()
  }

  // Login requests
  export async function loginAttempt(data: any) {
    let loginAttempt = await fetch(`/api/login/`, { method: 'POST', headers: headers, body: JSON.stringify(data) })
    return loginAttempt;
  }

  export async function taIngredientIngredientType_ingredient(id: number) {
    let inventory = await fetch(`api/taIngredientIngredientType/idIngredient/${id}`)
    return await inventory.json()

  }

}

/*
 ######  ########  ########    ###    ######## ######## 
##    ## ##     ## ##         ## ##      ##    ##       
##       ##     ## ##        ##   ##     ##    ##       
##       ########  ######   ##     ##    ##    ######   
##       ##   ##   ##       #########    ##    ##       
##    ## ##    ##  ##       ##     ##    ##    ##       
 ######  ##     ## ######## ##     ##    ##    ######## 
*/

export module createFromData {

  const method = 'POST'

  export async function ingredient(data: any) {
    return await fetch(`/api/ingredient/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function ingredientType(data: any) {
    return await fetch(`/api/ingredientType/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function inventory(inventory: any) {
    let myInventory = await fetch(`/api/inventory/`, { method, headers, body: JSON.stringify(inventory) })

    return myInventory;
  }

  export async function favorite(favorite: any) {
    let myFavorite = await fetch(`/api/favorite/`, { method, headers, body: JSON.stringify(favorite) })

    return myFavorite;
  }

  export async function meal(data: any) {
    return await fetch(`/api/meal/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function objectInstance(data: any) {
    return await fetch(`/api/objectInstance/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function objectType(data: any) {
    return await fetch(`/api/objectType/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function permission(data: any) {
    return await fetch(`/api/permission/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function session(data: any) {
    return await fetch(`/api/session/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function user(data: any) {
    return await fetch(`/api/user/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function version(data: any) {
    return await fetch(`/api/version/`, { method, headers, body: JSON.stringify(data) })
  }

}

/*
########  ######## ##       ######## ######## ######## 
##     ## ##       ##       ##          ##    ##       
##     ## ##       ##       ##          ##    ##       
##     ## ######   ##       ######      ##    ######   
##     ## ##       ##       ##          ##    ##       
##     ## ##       ##       ##          ##    ##       
########  ######## ######## ########    ##    ######## 
*/

export module deleteFromId {

  const method = 'DELETE'

  export async function favorite(favorite: any) {
    return await fetch(`/api/favorite/1`, { method, headers, body: JSON.stringify(favorite) })
  }

  export async function ingredient(id: number) {
    return await fetch(`/api/ingredient/${id}`, { method })
  }

  export async function ingredientType(id: number) {
    return await fetch(`/api/ingredientType/${id}`, { method })
  }

  export async function inventory(inventory: any) {
    let myInventory = await fetch(`/api/inventory/1`, { method, headers, body: JSON.stringify(inventory) })

    return myInventory;
  }

  export async function meal(id: number) {
    return await fetch(`/api/meal/${id}`, { method })
  }

  export async function objectInstance(id: number) {
    return await fetch(`/api/objectInstance/${id}`, { method })
  }

  export async function objectType(id: number) {
    return await fetch(`/api/objectType/${id}`, { method })
  }

  export async function permission(id: number) {
    return await fetch(`/api/permission/${id}`, { method })
  }

  export async function session(id: number) {
    return await fetch(`/api/session/${id}`, { method })
  }

  /*export async function taIngredientIngredientType(id: number) {
    return await fetch(`/api/taIngredientIngredientType/${id}`, { method })
  }*/

  /*export async function taIngredientObjectInstance(id: number) {
    return await fetch(`/api/taIngredientObjectInstance/${id}`, { method })
  }*/

  /*export async function taMealIngredient(id: number) {
    return await fetch(`/api/taMealIngredient/${id}`, { method })
  }*/

  export async function user(id: number) {
    return await fetch(`/api/user/${id}`, { method })
  }

  export async function version(id: number) {
    return await fetch(`/api/version/${id}`, { method })
  }

}

/*
##     ## ########  ########     ###    ######## ######## 
##     ## ##     ## ##     ##   ## ##      ##    ##       
##     ## ##     ## ##     ##  ##   ##     ##    ##       
##     ## ########  ##     ## ##     ##    ##    ######   
##     ## ##        ##     ## #########    ##    ##       
##     ## ##        ##     ## ##     ##    ##    ##       
 #######  ##        ########  ##     ##    ##    ######## 
*/

export module updateFromData {

  const method = 'PATCH'

  export async function favorite(data: any) {
    return await fetch(`/api/favorite/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function ingredient(data: any) {
    return await fetch(`/api/ingredient/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function ingredientType(data: any) {
    return await fetch(`/api/ingredientType/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function inventory(data: any) {
    return await fetch(`/api/inventory/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function meal(data: any) {
    return await fetch(`/api/meal/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function objectInstance(data: any) {
    return await fetch(`/api/objectInstance/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function objectType(data: any) {
    return await fetch(`/api/objectType/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function permission(data: any) {
    return await fetch(`/api/permission/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function session(data: any) {
    return await fetch(`/api/session/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function taIngredientIngredientType(data: any) {
    return await fetch(`/api/taIngredientIngredientType/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function taIngredientObjectInstance(data: any) {
    return await fetch(`/api/taIngredientObjectInstance/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function taMealIngredient(data: any) {
    return await fetch(`/api/taMealIngredient/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function user(data: any) {
    return await fetch(`/api/user/`, { method, headers, body: JSON.stringify(data) })
  }

  export async function version(data: any) {
    return await fetch(`/api/version/`, { method, headers, body: JSON.stringify(data) })
  }

}

/*
########     ###    ########    ###    ########     ###     ######  ######## 
##     ##   ## ##      ##      ## ##   ##     ##   ## ##   ##    ## ##       
##     ##  ##   ##     ##     ##   ##  ##     ##  ##   ##  ##       ##       
##     ## ##     ##    ##    ##     ## ########  ##     ##  ######  ######   
##     ## #########    ##    ######### ##     ## #########       ## ##       
##     ## ##     ##    ##    ##     ## ##     ## ##     ## ##    ## ##       
########  ##     ##    ##    ##     ## ########  ##     ##  ######  ######## 
*/

export module gestionDatabase {

  const method = 'POST'

  export async function recreateTables() {
    return await fetch(`/database/recreateTables`, { method, headers })
  }

  export async function insertAllData() {
    return await fetch(`/database/insertAllData`, { method, headers })
  }
}