import * as fetchFunctions from "../../../global/fetchFunctions.js"
import { authenticate } from "../../../global/authentication.js"

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

  // Fetch all users (failsafe if no users exist anymore)
  let allUsers = await fetchFunctions.fetchAll.user()

  // If any users exist
  if (allUsers.length != 0) {

    // Authentication routine
    let authResult = await authenticate()
    if (authResult == undefined) {
      window.location.href = "/login"
    }
  }

  // Recreate tables button
  let recreateTablesButton = document.createElement("button")
  recreateTablesButton.innerText = "Recreate tables"
  recreateTablesButton.addEventListener('click', async function () {

    document.body.style.cursor = 'progress';
    let fetchResult = await fetchFunctions.gestionDatabase.recreateTables()
    alert(JSON.stringify(await fetchResult.json()))
    document.body.style.cursor = 'default';
  });

  // Insert all data button
  let insertAllData = document.createElement("button")
  insertAllData.innerText = "Insert all data"
  insertAllData.addEventListener('click', async function () {

    document.body.style.cursor = 'progress';
    let fetchResult = await fetchFunctions.gestionDatabase.insertAllData()
    alert(JSON.stringify(await fetchResult.json()))
    document.body.style.cursor = 'default';
  });


  // User management button
  let manageUsers = document.createElement("button")
  manageUsers.innerText = "Create a user"
  manageUsers.addEventListener('click', async function () {

    window.location.href = "/newUser"

  });


  let databaseBlock = document.getElementById("database") as HTMLElement
  let usersBlock = document.getElementById("users") as HTMLElement

  // Append the buttons to the body
  databaseBlock.appendChild(recreateTablesButton)
  databaseBlock.appendChild(document.createElement("br"))
  databaseBlock.appendChild(insertAllData)
  databaseBlock.appendChild(document.createElement("br"))

  usersBlock.append(manageUsers)
}