import * as fetchFunctions from "./fetchFunctions.js"

// Authenticate, can be called from anywhere and will return 
export async function authenticate() {

  // Find if a token is currently stored
  let storedToken = sessionStorage.getItem('token');
  if (storedToken == undefined) {

    // If we didn't find anything, leave
    return
  }

  // Find to which session the token is associated
  let foundSession = await fetchFunctions.fetchId.session_token(String(storedToken))
  if (foundSession[0] != undefined) {

    // Find the user and permissions associated to the token provided
    let user = await fetchFunctions.fetchId.user(foundSession[0].id_user)
    let permission = await fetchFunctions.fetchId.permission(user[0].id_permission)

    // If the welcome message exists in the page, change it
    let welcomeMessage = document.getElementById("welcome") as HTMLElement
    if (welcomeMessage)
      welcomeMessage.innerText = "Welcome, " + user[0].username + "!"

    // Return desired data
    let data = { id_user: user[0].id_user, permission }
    return data
  }

  // If we didn't find anything, leave
  return
}