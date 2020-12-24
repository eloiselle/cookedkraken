import * as fetchFunctions from "../global/fetchFunctions.js"

export default async function getIngredientData(
  ingredientData: any = undefined,
  ingredientTypeData: any = undefined,
  taIngredientIngredientTypeData: any = undefined
) {

  // Array to store the results
  let resultData = []

  // Fetch all the required data from the database if none are provided
  if (ingredientData === undefined) { ingredientData = await fetchFunctions.fetchAll.ingredient() }
  if (ingredientTypeData === undefined) { ingredientTypeData = await fetchFunctions.fetchAll.ingredientType() }
  if (taIngredientIngredientTypeData === undefined) { taIngredientIngredientTypeData = await fetchFunctions.fetchAll.taIngredientIngredientType() }

  //Display all ingredients from database
  for (let i in ingredientData) {

    // Find the taIngredientIngredientType associated to id_ingredient in taIngredientIngredientTypeData
    let taIngredientIngredientType = taIngredientIngredientTypeData[
      taIngredientIngredientTypeData.map(
        function (e: any) {
          return e.id_ingredient;
        }).indexOf(ingredientData[i].id_ingredient)];

    // Find the ingredientType associated to id_ingredient_type in taIngredientIngredientType
    let ingredientType = ingredientTypeData[
      ingredientTypeData.map(
        function (e: any) {
          return e.id_ingredient_type;
        }).indexOf(taIngredientIngredientType.id_ingredient_type)
    ];

    // Compile the results in this array
    resultData.push({
      id_ingredient: ingredientData[i].id_ingredient,
      name: ingredientData[i].name,
      image: ingredientData[i].image_url,
      type: ingredientType.id_ingredient_type
    })
  }

  return resultData
}
