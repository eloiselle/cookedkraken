import * as fetchFunctions from "./global/fetchFunctions.js"
import { authenticate } from "../scripts/global/authentication.js"

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
  if (authResult == undefined) {
    window.location.href = "/login"
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


  // Append the buttons to the body
  document.body.append(recreateTablesButton)
  document.body.append(document.createElement("br"))
  document.body.append(insertAllData)
  document.body.append(document.createElement("br"))
  document.body.append(manageUsers)
}