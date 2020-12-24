import * as fetchFunctions from "./global/fetchFunctions.js"
import { filterTable } from "./global/VersionController.js"

onLoad()


async function bindInputs() {
  document.getElementById("collBtn")?.addEventListener('click', extendNavbar);
}

function extendNavbar() {
  let collN = document.getElementById("collNav") as HTMLElement;

  if (collN.style.display == "block") {
    collN.style.display = "none";
  } else {
    collN.style.display = "block";
  }
}

export async function onLoad() {
  bindInputs()

  let versions = await fetchFunctions.fetchAll.version()
  let collNav = document.getElementById("collNav") as HTMLElement

  for (let i in versions) {
    let btnNewVersion = document.createElement("a")
    btnNewVersion.innerText = versions[i].name
    btnNewVersion?.setAttribute("data-id_version_specific", versions[i].id_version_specific)
    btnNewVersion.addEventListener("click", event => {
      btnNewVersion.classList.toggle("selected")
      filterTable()
    })

    collNav?.appendChild(btnNewVersion)
  }
}

