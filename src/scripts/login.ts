import * as fetchFunctions from "../scripts/global/fetchFunctions.js"
import { authenticate } from "../scripts/global/authentication.js"

onLoad()


export function resetForm(id: string) {
  (document.getElementById(id) as HTMLFormElement).reset()
}

export function getInput(id: string) {
  return document.getElementById(id) as HTMLInputElement
}

export function bindInputs() {
  document.querySelector('#btnLogin')!.addEventListener('click', onClickLogin);
  document.querySelector('#newAccount')!.addEventListener('click', createUserRedirection);
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

export async function onClickLogin() {

  // On vérifie l'état des champs

  let username = getInput("txtUsername")
  let textUsername = username.value
  let usernameError = false
  let textUsernameError = getInput("txtUsernameError")

  let mot_de_passe = getInput("txtPassword")
  let textMotDePasse = mot_de_passe.value
  let motDePasseError = false
  let textmotDePasseError = getInput("txtPasswordError")


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


  if (!textMotDePasse) {
    textmotDePasseError.setAttribute('style', 'display: block')
    textmotDePasseError.innerText = "Please enter a password."
    mot_de_passe.setAttribute('style', 'background-color:#ff0033 !important')
    motDePasseError = true
  }
  else {
    textmotDePasseError.setAttribute('style', 'display: none')
    mot_de_passe.removeAttribute('style')
    motDePasseError = false
  }

  // Si aucune erreur s'est produite, on procède
  let loginResult
  if (!usernameError && !motDePasseError)
    loginResult = await fetchFunctions.fetchId.loginAttempt({ username: textUsername, password: textMotDePasse })

  let loginResultData = await loginResult?.json()
  if (loginResult?.status == 200)
    onSuccesfulLogin(loginResultData, textUsername)

  else if (loginResult?.status == 401)
    alert("Incorrect username or password.")
}

export function createUserRedirection() {
  window.location.href = '/register'
}

async function onSuccesfulLogin(newToken: any, username: any) {

  let userData = await fetchFunctions.fetchId.user_name(username)
  console.log( userData[0].id_permission)
  userData[0].id_permission
  sessionStorage.setItem('token', String(newToken))
  sessionStorage.setItem('id_permission', String(userData[0].id_permission))

  if (userData[0].id_permission == 1) {
    window.location.href= '/admin'
  } else {
    window.location.href= '/user'
  }

}