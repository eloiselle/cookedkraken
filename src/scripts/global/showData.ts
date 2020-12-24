
// Take an array and shows all the properties in a table
export default function showData(dataArray: any[], outputTable: string, favorites: any[] = []) {

  // For each meals
  for (let i = 0; i < dataArray.length; i++) {

    let favFlag = false

    if (favorites.length != 0) {
      for (let j in favorites) {
        if (dataArray[i].id_meal == favorites[j].id_meal)
          favFlag = true
      }
    }

    // Create the table row to be inserted into the table
    let tableRow = document.createElement("tr")
    tableRow.setAttribute("data-id_version_specific", dataArray[i].id_version_specific)
    tableRow.setAttribute("data-id_meal", dataArray[i].id_meal)

    // Will contain all the HTMLElements to be inserted into the row
    let tableData: any[] = []

    // Create the image cell for the table
    let tableDataImg = document.createElement("td")
    let tableImg = document.createElement("img")
    tableImg.src = dataArray[i].image_url
    tableDataImg.append(tableImg)
    tableData.push(tableDataImg)

    // For each property of dataArray (except the first and last ones)
    for (let j = 2; j < Object.keys(dataArray[i]).length - 2; j++) {

      // Get the name of the property to add
      let prop = Object.keys(dataArray[i])[j];

      // Define the new cell
      let tempTableData = document.createElement("td")

      // Assign the content of the array, depending on which property we're at, to the cell
      tempTableData.innerHTML = dataArray[i][prop]
      tempTableData.classList.add(prop)

      // Add to the array
      tableData.push(tempTableData)
    }

    if (dataArray[i].ingredients != undefined) {
      tableRow.setAttribute('title', JSON.stringify(dataArray[i].ingredients))
    }

    // Append the array to the row
    for (let i in tableData) {
      tableRow.appendChild(tableData[i])
    }

    if (favorites.length != 0) {

      //Display the favorite meals of the user
      if (favFlag == true) {
        tableRow.setAttribute("favorite", "true")
        tableRow.classList.add("favoriteRow")
      }
      else
        tableRow.setAttribute("favorite", "false")

      tableRow.setAttribute("title", dataArray[i].description)
    }

    // Append the row to the table
    document.getElementById(outputTable)?.appendChild(tableRow)
  }
}