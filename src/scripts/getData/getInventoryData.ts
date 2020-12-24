import * as fetchFunctions from "../global/fetchFunctions.js"

export default async function getInventoryData(
  id_user: number,
  ingredientData: any = undefined,
  ingredientTypeData: any = undefined,
  taIngredientIngredientTypeData: any = undefined,
  userInventoryData: any = undefined
) {

  // Array to store the results
  let resultData = []

  // Fetch all the required data from the database if none are provided
  if (ingredientData === undefined) { ingredientData = await fetchFunctions.fetchAll.ingredient() }
  if (ingredientTypeData === undefined) { ingredientTypeData = await fetchFunctions.fetchAll.ingredientType() }
  if (taIngredientIngredientTypeData === undefined) { taIngredientIngredientTypeData = await fetchFunctions.fetchAll.taIngredientIngredientType() }
  if (userInventoryData === undefined) { userInventoryData = await fetchFunctions.fetchId.inventory_userId(id_user) }

  //Finds what the user already has in his inventory
  for (let i in userInventoryData) {

    // Find the ingredient associated to id_ingredient in userInventory
    let userIngredient = ingredientData[
      ingredientData.map(
        function (e: any) {
          return e.id_ingredient;
        }).indexOf(userInventoryData[i].id_ingredient)];

    // Find the taIngredientIngredientType associated to id_ingredient in taIngredientIngredientTypeData
    let taIngredientIngredientType = taIngredientIngredientTypeData[
      taIngredientIngredientTypeData.map(
        function (e: any) {
          return e.id_ingredient;
        }).indexOf(userIngredient.id_ingredient)];

    // Find the ingredientType associated to id_ingredient_type in taIngredientIngredientType
    let ingredientType = ingredientTypeData[
      ingredientTypeData.map(
        function (e: any) {
          return e.id_ingredient_type;
        }).indexOf(taIngredientIngredientType.id_ingredient_type)];

    // Compile the results in this array
    resultData.push({
      id_ingredient: userIngredient.id_ingredient,
      name: userIngredient.name,
      quantity: userInventoryData[i].quantity,
      image: userIngredient.image_url,
      type: ingredientType.id_ingredient_type
    })
  }

  return resultData
}
