import * as fetchFunctions from "../../global/fetchFunctions.js"
import { filterTable } from "../../global/VersionController.js"


onLoad()


function bindInputs() {

  let openBtn = document.querySelector('.openbtn')
  openBtn!.addEventListener('click', event => {
    console.log("Big")
    document.getElementById("userSideNav")!.style.width = "250px";
  });

  let closeBtn = document.querySelector('.closebtn')
  closeBtn!.addEventListener('click', event => {
    console.log("Smol")
    document.getElementById("userSideNav")!.style.width = "0";
  });
}

export async function onLoad() {

  bindInputs()

  let versions = await fetchFunctions.fetchAll.version()
  let versionsContainer = document.getElementById("versionsContainer")

  for (let i in versions) {
    let btnNewVersion = document.createElement("a")
    btnNewVersion.innerText = versions[i].name
    btnNewVersion?.setAttribute("data-id_version_specific", versions[i].id_version_specific)
    btnNewVersion.addEventListener("click", event => {
      btnNewVersion.classList.toggle("selected")
      filterTable()
    })

    versionsContainer?.appendChild(btnNewVersion)
  }
}