import * as fetchFunctions from "../../global/fetchFunctions"


onLoad()

export function resetForm(id: string) {
  (document.getElementById(id) as HTMLFormElement).reset()
}

export function getInput(id: string) {
  return document.getElementById(id) as HTMLInputElement
}

export function bindInputs() {

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
  let navBar = document.getElementById("#navBar")
  let include = document.createElement("include")
  include.innerHTML = "../partial/navAdmin"

  navBar?.appendChild(include)
}

