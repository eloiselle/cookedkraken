import * as fetchFunctions from "./global/fetchFunctions.js"
import { authenticate } from "../scripts/global/authentication.js"
import { Alert } from "../js/bootstrap.bundle";


onLoad()

export function getInput(id: string) {
  return document.getElementById(id) as HTMLInputElement
}

export function bindInputs() {
  document.querySelector('#submitBtn')!.addEventListener('click', onClickSave);
}


export async function onLoad() {
  // Authentication routine
  let authResult = await authenticate()
  if (authResult == undefined) {
    window.location.href = "/login"
  }

  bindInputs()
}

export async function onClickSave() {
  let admin = 2

  let username = getInput('txtUser')
  let textUsername = username.value
  let usernameError = false
  let textUsernameError = getInput("txtUsernameError")

  let password = getInput('txtPass')
  let textPassword = password.value
  let passwordError = false
  let textPasswordError = getInput("txtPassError")

  let confirmPass = getInput('txtConfirm')
  let textConfirm = confirmPass.value
  let confirmError = false
  let textConfirmError = getInput("txtConfirmError")

  let permission = getInput('adminChk')

  if (!textUsername) {
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

  if (!textPassword) {
    textPasswordError.setAttribute('style', 'display: block')
    textPasswordError.innerText = "Please enter a password."
    password.setAttribute('style', 'background-color:#ff0033 !important')
    passwordError = true
  }
  else {
    textPasswordError.setAttribute('style', 'display: none')
    password.removeAttribute('style')
    passwordError = false
  }

  if (!textConfirm) {
    textConfirmError.setAttribute('style', 'display: block')
    textConfirmError.innerText = "Please enter the password again."
    confirmPass.setAttribute('style', 'background-color:#ff0033 !important')
    confirmError = true
  }
  else {
    textConfirmError.setAttribute('style', 'display: none')
    password.removeAttribute('style')
    confirmError = false
  }

  //Checks if the user will be an admin
  if (permission.checked == true)
    admin = 1

  if (textConfirm != textPassword) {
    passwordError = true
  }
  console.log("STOP")

  if (!usernameError && !passwordError && !confirmError) {
    let addUserResult
    addUserResult = await fetchFunctions.createFromData.user({ username: textUsername, password: textPassword, id_permission: admin })
    let addUserResultData = await addUserResult.json()
    console.log(addUserResultData)
    if (addUserResultData.status == 201) {
      window.location.href = '/index'
    }
  }
  alert("WTF")
}

