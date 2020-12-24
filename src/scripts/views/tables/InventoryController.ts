import * as fetchFunctions from "../../global/fetchFunctions.js"
import { authenticate } from "../../global/authentication.js"
import getInventoryData from "../../getData/getInventoryData.js"
import getIngredientData from "../../getData/getIngredientData.js"

// Global variables
let ingredientsList: any[] = []
let inventoryList: any[] = []
let id_user: number

const maxNumberOfItemsPerRow = 28
const pathIngredient = "../images/assets/ingredient"

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

  // Get all the required data from the database
  let ingredientData = await fetchFunctions.fetchAll.ingredient()
  let ingredientTypeData = await fetchFunctions.fetchAll.ingredientType()
  let taIngredientIngredientTypeData = await fetchFunctions.fetchAll.taIngredientIngredientType()
  let userInventoryData = await fetchFunctions.fetchId.inventory_userId(Number(id_user))

  // Get the inventory data related to a user
  inventoryList = await getInventoryData(id_user, ingredientData, ingredientTypeData, taIngredientIngredientTypeData, userInventoryData)
  showInventoryData(inventoryList)

  // Get all ingredients
  ingredientsList = await getIngredientData(ingredientData, ingredientTypeData, taIngredientIngredientTypeData)
  showIngData(ingredientsList)

  //Save user's inventory and send him to the suggestions page
  // Save button
  let saveBtn = document.createElement("button")
  saveBtn.innerText = "Save"
  saveBtn.classList.add('btnStyled', 'right')
  saveBtn.setAttribute('id', 'btnSave')

  // On click
  saveBtn.addEventListener('click', async function () {

    const myTable = document.querySelector('#invTbl') as HTMLTableElement
    if (myTable != undefined) {

      // Delete current inventory of the user
      for (let i in userInventoryData) {
        fetchFunctions.deleteFromId.inventory({ id_user, id_ingredient: userInventoryData[i].id_ingredient });
      }

      // Recreate the user's inventory inside the database based on the selected items
      for (let i = 0; i < inventoryList.length; i++) {
        let ingredient = ingredientData[
          ingredientData.map(
            function (e: any) {
              return e.name;
            }).indexOf(inventoryList[i].name)];

        let qtyIngredient = Number(inventoryList[i].quantity)

        await fetchFunctions.createFromData.inventory({
          id_user,
          id_ingredient: ingredient.id_ingredient,
          quantity: qtyIngredient
        })
      }
    }

    location.reload()
  });

  let container = document.getElementById("container") as HTMLElement
  container.append(saveBtn)

  document.body.style.cursor = 'default';
}

//Create table for the user's inventory
export function showInventoryData(inventory: any[]) {

  // Sort the array first
  inventoryList.sort(dynamicSortMultiple("type", "name"));

  // Remove old elements, if any
  let table = document.getElementById("invBody") as HTMLElement

  while (table.firstChild) {
    let lastChild = table.lastChild as Node
    table.removeChild(lastChild);
  }

  // Prepare to add the elements into the table
  let counter = 0
  let flagNewRow = true
  let rowId: any

  for (let i = 0; i < inventory.length; i++) {

    let data = inventory[i]

    if (counter == maxNumberOfItemsPerRow) {
      counter = 0
      flagNewRow = true
    }

    let cardColor = getCardColor(data.type)

    // Create the number indicator
    let qtyNumber = document.createElement("div")
    qtyNumber.setAttribute("id", data.name)
    qtyNumber.classList.add("tinyNb")
    qtyNumber.innerHTML = data.quantity;

    // Create the table cell
    let tableData0 = document.createElement("td")
    tableData0.setAttribute("name", data.name)

    let img = document.createElement("img")
    img.src = pathIngredient + data.image
    tableData0.append(img)

    tableData0.addEventListener("click", function () {
      let index = i

      if (inventoryList[i].quantity > 1) {
        inventoryList[i].quantity = inventoryList[i].quantity - 1

      }
      else if (index > -1) {
        inventoryList.splice(index, 1);
      }

      showInventoryData(inventoryList)
    });

    tableData0.setAttribute("title", data.name)
    tableData0.appendChild(qtyNumber)
    tableData0.classList.add(cardColor)

    // If there is still space in the current row
    if (!flagNewRow && counter > 0) {
      document.getElementById(rowId)?.appendChild(tableData0)

    }
    // If we have to create a new row
    else if (flagNewRow && counter == 0) {
      let newRow = document.createElement("tr")
      newRow.setAttribute("id", "invRow" + i)

      newRow.appendChild(tableData0)
      table.appendChild(newRow)
      flagNewRow = false
      rowId = newRow.getAttribute("id")
    }

    //Keep count of number of cells in the table
    counter++
  }
}

//Create table containing all ingredients
export function showIngData(ingredients: any[]) {

  // Sort the array first
  ingredientsList.sort(dynamicSortMultiple("type", "name"));

  let counter = 0
  let flagNewRow = true
  let rowId: any

  for (let i = 0; i < ingredients.length; i++) {

    let data = ingredients[i]

    let newRow = document.createElement("tr")
    newRow.setAttribute("id", "ingRow" + i)

    if (counter == maxNumberOfItemsPerRow) {
      counter = 0
      flagNewRow = true
    }

    let cardColor = getCardColor(data.type)

    let tableData0 = document.createElement("td")
    tableData0.setAttribute("name", data.name)

    let img = document.createElement("img")
    img.src = pathIngredient + data.image
    tableData0.append(img)

    tableData0.addEventListener("click", function () {
      onClickEvent(data)
    });

    tableData0.setAttribute("title", data.name)
    tableData0.classList.add(cardColor)

    // Created row is not filled
    if (!flagNewRow && counter > 0) {
      document.getElementById(rowId)?.appendChild(tableData0)
      // Has to create a new row
    } else if (flagNewRow && counter == 0) {
      newRow.appendChild(tableData0)
      document.getElementById('ingBody')?.appendChild(newRow)
      flagNewRow = false
      rowId = newRow.getAttribute("id")

    }

    //Keep count of number of tds in the table
    counter++
  }
}

function onClickEvent(data: any) {

  let ingredientName = data.name

  let ingredientQuantity = data.quantity
  if (ingredientQuantity == undefined) {
    ingredientQuantity = 1;
  }

  let ingredientImage = data.image
  let ingredientType = data.type

  let found = inventoryList.findIndex(e => e.name == ingredientName)
  if (found != -1) {
    inventoryList[found].quantity = Number(inventoryList[found].quantity) + 1
  }
  else {
    inventoryList.push({
      name: ingredientName,
      quantity: ingredientQuantity,
      image: ingredientImage,
      type: ingredientType
    })
  }

  showInventoryData(inventoryList)
}

function getCardColor(type: any) {

  let cardColor = ""
  //Sets the background color of the ingredient depending on it's type
  switch (type) {
    case 1: cardColor = "vegetables"
      break
    case 2: cardColor = "fruits"
      break
    case 3: cardColor = "meats"
      break
    case 4: cardColor = "fishes"
      break
    case 5: cardColor = "sweeteners"
      break
    case 6: cardColor = "dairy"
      break
    case 7: cardColor = "bugs"
      break
    case 8: cardColor = "eggs"
      break
    case 9: cardColor = "monsters"
      break
    default: cardColor = ""
  }
  return cardColor
}

function dynamicSort(property: any) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: any, b: any) {
    /* next line works with strings and numbers, 
     * and you may want to customize it to your needs
     */
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

function dynamicSortMultiple(...theArgs: string[]) {
  /*
   * save the arguments object as it will be overwritten
   * note that arguments object is an array-like object
   * consisting of the names of the properties to sort by
   */
  var props = theArgs;
  return function (obj1: any, obj2: any) {
    var i = 0, result = 0, numberOfProperties = props.length;
    /* try getting a different result from 0 (equal)
     * as long as we have extra properties to compare
     */
    while (result === 0 && i < numberOfProperties) {
      result = dynamicSort(props[i])(obj1, obj2);
      i++;
    }
    return result;
  }
}