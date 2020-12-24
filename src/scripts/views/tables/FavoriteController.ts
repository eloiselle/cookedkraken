import * as fetchFunctions from "../../global/fetchFunctions.js"
import { authenticate } from "../../global/authentication.js"
import showData from "../../global/showData.js"

//Global variables
let mealsList: any[] = []
let id_user: number
const pathMeals = "../images/assets/meals"
onLoad()

export function resetForm(id: string) {
  (document.getElementById(id) as HTMLFormElement).reset()
}

export function getInput(id: string) {
  return document.getElementById(id) as HTMLInputElement
}


/*
##     ##    ###    ##    ## ########  ##       ######## ########  
##     ##   ## ##   ###   ## ##     ## ##       ##       ##     ## 
##     ##  ##   ##  ####  ## ##     ## ##       ##       ##     ## 
######### ##     ## ## ## ## ##     ## ##       ######   ########  
##     ## ######### ##  #### ##     ## ##       ##       ##   ##   
##     ## ##     ## ##   ### ##     ## ##       ##       ##    ##  
##     ## ##     ## ##    ## ########  ######## ######## ##     ## 
*/


export async function onLoad() {

  // Authentication routine
  let authResult = await authenticate()
  if (authResult == undefined) { window.location.href = "/login" }
  id_user = authResult?.id_user

  document.body.style.cursor = 'progress';
  sessionStorage.setItem('refresh', 'true');

  let favoriteData = await fetchFunctions.fetchId.favorite_userId(id_user)
  let mealsData = await fetchFunctions.fetchAll.meal()

  for (let i in favoriteData) {

    let mealData = mealsData[
      mealsData.map(
        function (e: any) {
          return e.id_meal;
        }).indexOf(favoriteData[i].id_meal)];

    if (mealData == undefined) {
      continue
    }

    let id_meal = mealData.id_meal
    let name = mealData.name
    let image_url = pathMeals + mealData.image_url
    let cook_time = mealData.cook_time
    let hp_value = mealData.hp_value
    let energy_value = mealData.hunger_value
    let sanity_value = mealData.sanity_value
    let spoil_time = mealData.spoil_time
    let priority = mealData.priority
    let id_version_specific = mealData.id_version_specific
    let ingredients = undefined

    mealsList.push({
      id_meal,
      image_url,
      name,
      cook_time,
      hp_value,
      energy_value,
      sanity_value,
      spoil_time,
      priority,
      ingredients,
      id_version_specific
    })
  }

  showData(mealsList, 'foodBody')

  document.body.style.cursor = 'default';
}