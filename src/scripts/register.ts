import * as fetchFunctions from "../scripts/global/fetchFunctions.js"

onLoad()


export function resetForm(id: string) {
  (document.getElementById(id) as HTMLFormElement).reset()
}

export function getInput(id: string) {
  return document.getElementById(id) as HTMLInputElement
}

export function bindInputs() {
  document.querySelector('#confirmBtn')!.addEventListener('click', onClickCreate);
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
  bindInputs()
}

export async function onClickCreate() {

  // Validate entries

  let username = getInput("txtUser")
  let textUsername = username.textContent
  let usernameError = false
  let textUsernameError = getInput("txtUsernameError")
console.log(textUsername)
  let password = getInput("txtPassword")
  let passwordText = password.textContent
  let passwordError = false
  let passwordTextError = getInput("txtPasswordError")

  let confirm = getInput("txtConfirm")
  let textConfirm = confirm.textContent
  let confirmError = false
  let textConfirmError = getInput("txtPasswordError")


  if (textUsername = "") {
    textUsernameError.setAttribute('style', 'display: block')
    textUsernameError.innerText = "Please enter a username."
    username.setAttribute('style', 'background-color:#ff0033 !important')
    usernameError = true
  }
  else {
    textUsernameError.setAttribute('style', 'display: none')
    username.removeAttribute('style')
    usernameError = false
  }

  if (passwordText = "") {
    passwordTextError.setAttribute('style', 'display: block')
    passwordTextError.innerText = "Please enter a password."
    password.setAttribute('style', 'background-color:#ff0033 !important')
    passwordError = true
  }
  else {
    passwordTextError.setAttribute('style', 'display: none')
    password.removeAttribute('style')
    passwordError = false
  }

  if (textConfirm = "") {
    textConfirmError.setAttribute('style', 'display: block')
    textConfirmError.innerText = "Please enter a password."
    confirm.setAttribute('style', 'background-color:#ff0033 !important')
    confirmError = true
  }
  else {
    textConfirmError.setAttribute('style', 'display: none')
    confirm.removeAttribute('style')
    confirmError = false
  }
  console.log(passwordText)
  console.log(textConfirm)
  
  // Create the user if no errors occured
  if (passwordText != textConfirm) {
    textConfirmError.setAttribute('style', 'display: block')
    textConfirmError.innerText = "Your password and the confirm one doesn't match."
    confirm.setAttribute('style', 'background-color:#ff0033 !important')
    confirmError = true
  }

  let loginResult
  if (!usernameError && !passwordError && !confirmError)
    loginResult = await fetchFunctions.createFromData.user({ username: textUsername, password: passwordText, id_permission: 2 })

  if (loginResult?.status == 201) {
    alert("user created")
    window.location.href = '/login'
  }

  else if (loginResult?.status == 401)
    alert("Incorrect informations.")
}
