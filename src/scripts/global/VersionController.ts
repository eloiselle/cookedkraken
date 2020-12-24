
export function filterTable() {
  let table: any
  let tr: HTMLCollection
  let selected

  selected = document.getElementsByClassName("selected");

  table = document.getElementById("foodBody");
  tr = table.getElementsByTagName("tr");

  if (selected.length == 0) {
    for (let i = 0; i < tr.length; i++) {
      tr[i].setAttribute('style', '');
    }
    return
  }

  for (let i = 0; i < tr.length; i++) {
    tr[i].setAttribute('style', 'display: none');
  }

  for (let i = 0; i < selected.length; i++) {
    for (let j = 0; j < tr.length; j++) {

      let tableRowVersionID = tr[j].getAttribute("data-id_version_specific")
      let selectedVersionID = selected[i].getAttribute("data-id_version_specific")

      if (tableRowVersionID == selectedVersionID) {
        tr[j].setAttribute('style', '');
      }
    }
  }
}