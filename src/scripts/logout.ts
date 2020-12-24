import * as fetchFunctions from "./global/fetchFunctions.js"

onLoad()


export function resetForm(id: string) {
  (document.getElementById(id) as HTMLFormElement).reset()
}

export function getInput(id: string) {
  return document.getElementById(id) as HTMLInputElement
}

export function bindInputs() {
  document.querySelector('#logout')!.addEventListener('click', onLogout);
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


export function onLoad() {
  bindInputs()
}

export async function onLogout() {

  let storedToken = sessionStorage.getItem('token');
  if (storedToken == undefined) {
    window.location.href = "/login"
  }

  let foundSession = await fetchFunctions.fetchId.session_token(String(storedToken))

  // Stored token not found
  if (foundSession[0] == undefined) {
    sessionStorage.removeItem('token')
    window.location.href = "/login"
  }

  let resultDeleteSession = await fetchFunctions.deleteFromId.session(foundSession[0].id_session)
  if (resultDeleteSession.status == 204) {
    console.log("Session deleted succesfully.")
  } else {
    alert("An error occured: " + resultDeleteSession.status)
  }

  // Erase stored data
  sessionStorage.removeItem('token');

  // Redirect
  window.location.href = "/Login"
}