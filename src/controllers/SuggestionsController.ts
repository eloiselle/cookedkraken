import * as fetchFunctions from "../scripts/global/fetchFunctions.js"
import { authenticate } from "../scripts/global/authentication.js"
import getInventoryData from "../scripts/getData/getInventoryData.js"
import getIngredientData from "../scripts/getData/getIngredientData.js"
import showData from "../scripts/global/showData.js"

//Global variables
const path = "../images/assets/meals"
let insertedData: any

let ingredientsList: any[] = []
let inventoryList: any[] = []
let mealsList: any[] = []
let id_user: number

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

  // Get all the required data from the database
  let ingredientData = await fetchFunctions.fetchAll.ingredient()
  let ingredientTypeData = await fetchFunctions.fetchAll.ingredientType()
  let taIngredientIngredientTypeData = await fetchFunctions.fetchAll.taIngredientIngredientType()
  let userInventoryData = await fetchFunctions.fetchId.inventory_userId(id_user)
  let mealsData = await fetchFunctions.fetchAll.meal()

  let taMealIngredient = await fetchFunctions.fetchAll.taMealIngredient()
  let taMealIngredientType = await fetchFunctions.fetchAll.taMealIngredientType()

  // Get the inventory data related to a user
  inventoryList = await getInventoryData(id_user, ingredientData, ingredientTypeData, taIngredientIngredientTypeData, userInventoryData)

  // Get all ingredients
  ingredientsList = await getIngredientData(ingredientData, ingredientTypeData, taIngredientIngredientTypeData)


  for (let i in mealsData) {

    // Check if this meal can be crafted from the ingredients present in the inventory
    let taMealIngredient_MatchingIdMeal: any[] = taMealIngredient.filter((e: any) => e.id_meal == mealsData[i].id_meal)
    let taMealIngredientType_MatchingIdMeal: any[] = taMealIngredientType.filter((e: any) => e.id_meal == mealsData[i].id_meal)

    // Storage variables
    let possibleIngredients: any[] = []
    let possibleIngredientTypes: any[] = []
    let ownedIngredients_Ingredient: any[] = []
    let ownedIngredients_IngredientTypes: any[] = []

    // List all ingredients in taMealIngredient that match this meal's ID
    for (let j = 0; j < taMealIngredient_MatchingIdMeal.length; j++) {

      possibleIngredients.push(taMealIngredient_MatchingIdMeal[j].id_ingredient)
    }

    // List all ingredientTypes in taMealIngredientType that match this meal's ID
    for (let j = 0; j < taMealIngredientType_MatchingIdMeal.length; j++) {

      let taIngredientIngredientType_MatchingIdIngredient: any[] = taIngredientIngredientTypeData.filter((e: any) =>
        e.id_ingredient_type == taMealIngredientType_MatchingIdMeal[j].id_ingredient_type &&
        e.type_value >= taMealIngredientType_MatchingIdMeal[j].type_value)

      // List all ingredientTypes in taMealIngredientType that match this meal's ID
      for (let k = 0; k < taIngredientIngredientType_MatchingIdIngredient.length; k++) {

        possibleIngredientTypes.push(taIngredientIngredientType_MatchingIdIngredient[k].id_ingredient)
      }
    }

    // Match the possible ingredients IDs with the ingredient IDs in the user inventory
    for (let j = 0; j < possibleIngredients.length; j++) {

      let ingredientMatch: any[] = userInventoryData.filter((e: any) => e.id_ingredient == possibleIngredients[j])

      // For evvery match, save the quantity of ingredients with the ingredient's quantity
      for (let k = 0; k < ingredientMatch.length; k++) {
        ownedIngredients_Ingredient.push({
          id_ingredient: ingredientMatch[k].id_ingredient,
          quantity: ingredientMatch[k].quantity
        })
      }
    }

    // Match the possible ingredientTypes IDs with the ingredient IDs in the user inventory
    for (let j = 0; j < possibleIngredientTypes.length; j++) {

      let ingredientMatch: any[] = userInventoryData.filter((e: any) => e.id_ingredient == possibleIngredientTypes[j])

      // For every match, save the quantity of ingredients with the ingredient's quantity
      for (let k = 0; k < ingredientMatch.length; k++) {
        ownedIngredients_IngredientTypes.push({
          id_ingredient: ingredientMatch[k].id_ingredient,
          quantity: ingredientMatch[k].quantity
        })
      }
    }

    let matching = true

    // If no ingredient matches
    if (taMealIngredient_MatchingIdMeal.length == 0) {

      // If we have ingredientTypes that match, and the owned ingredient types is greater or equal to the amount of ingredient types required
      if (ownedIngredients_IngredientTypes.length == 0 && ownedIngredients_IngredientTypes.length <= taMealIngredientType_MatchingIdMeal.length) {
        matching = false
      }
    }

    if (taMealIngredient_MatchingIdMeal.length != 0 && ownedIngredients_Ingredient.length == 0) {
      matching = false
    }

    // If we don't have any ingredients or ingredient types matching
    if (ownedIngredients_IngredientTypes.length == 0 && ownedIngredients_Ingredient.length == 0) {
      matching = false
    }

    if (taMealIngredient_MatchingIdMeal.length != ownedIngredients_Ingredient.length) {
      matching = false
    }

    // Check if we have all the required ingredients, when applicable
    for (let j = 0; j < ownedIngredients_Ingredient.length; j++) {
      let ingredientsMatching: any[] = taMealIngredient_MatchingIdMeal.filter((e: any) =>
        e.id_ingredient == ownedIngredients_Ingredient[j].id_ingredient)

      if (ingredientsMatching.length != taMealIngredient_MatchingIdMeal.length) {
        matching = false
        break
      }
    }

    if (matching) {

      // We have a list of owned ingredient in regards to each recipe
      let ownedElligibleIngredients: any[] = []
      let ownedElligibleIngredientsNames: any[] = []

      for (let j in ownedIngredients_Ingredient) { ownedElligibleIngredients.push(ownedIngredients_Ingredient[j]) }
      for (let j in ownedIngredients_IngredientTypes) { ownedElligibleIngredients.push(ownedIngredients_IngredientTypes[j]) }

      for (let j in ownedElligibleIngredients) {
        let ingredients = ingredientsList.filter((e: any) => e.id_ingredient == ownedElligibleIngredients[j].id_ingredient)

        for (let k in ingredients) {
          ownedElligibleIngredientsNames.push(ingredients[k].name)
        }
      }

      let id_meal = mealsData[i].id_meal
      let name = mealsData[i].name
      let image_url = path + mealsData[i].image_url
      let cook_time = mealsData[i].cook_time
      let hp_value = mealsData[i].hp_value
      let energy_value = mealsData[i].hunger_value
      let sanity_value = mealsData[i].sanity_value
      let spoil_time = mealsData[i].spoil_time
      let priority = mealsData[i].priority
      let id_version_specific = mealsData[i].id_version_specific
      let ingredients: any[] = ownedElligibleIngredientsNames

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
  }

  showData(mealsList, 'foodBody')

  document.body.style.cursor = 'default';
}