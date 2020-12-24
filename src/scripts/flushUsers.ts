import { authenticate } from "../scripts/global/authentication.js"

onLoad()

export async function onLoad() {
  let permission = Number(sessionStorage.getItem("id_permission"))

  if (permission != 1) {
    alert("You should not be here")
    window.location.href = "/login"
  }
}