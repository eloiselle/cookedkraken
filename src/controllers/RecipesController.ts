import * as fetchFunctions from "../scripts/global/fetchFunctions.js"
import { authenticate } from "../scripts/global/authentication.js"
import showData from "../scripts/global/showData.js"

let mealsList: any[] = []
let id_user: number

const path = "../images/assets/meals"

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

  let mealsData = await fetchFunctions.fetchAll.meal()
  let favorites = await fetchFunctions.fetchId.favorite_userId(id_user)

  for (let i in mealsData) {

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

  showData(mealsList, 'foodBody', favorites)
  onTableClick()

  document.body.style.cursor = 'default';
}

//Adds the meal to the user's favorites
export function onTableClick() {

  const myTable = document.querySelector('#foodTbl') as HTMLTableElement;
  const rows = myTable.tBodies[0].rows;

  Array.from(rows).forEach((row) => {

    // Attach a click handler on each row
    row.addEventListener('click', async event => {

      let target = event.target as HTMLElement
      let id_meal = Number(target.parentElement?.getAttribute("data-id_meal"))

      let mealData = await fetchFunctions.fetchId.meal(id_meal)

      //Adds to favorite if not already is
      if (row.getAttribute("favorite") == null || row.getAttribute("favorite") == "false") {

        let createResult = await fetchFunctions.createFromData.favorite({ id_user, id_meal: mealData[0].id_meal })

        //Add background colors to favorite meals
        if (createResult.status == 201) {

          row.classList.add("favoriteRow")
          row.setAttribute("favorite", "true")

        }
      }

      else {
        let deleteResult = await fetchFunctions.deleteFromId.favorite({ id_user, id_meal: mealData[0].id_meal })
        row.classList.remove("favoriteRow")
        console.log(deleteResult)
      }

    });
  })
}
