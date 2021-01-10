let numOfRows = 1;
let numOfColumns = 1;
let color = "#ee9090";

addCell = () => {
  let newCell = document.createElement("td");
  newCell.innerHTML = "&nbsp;";
  newCell.classList.add("uncolored");
  newCell.addEventListener("click", changeColor);

  return newCell;
};

addRow = () => {
  let newRow = document.createElement("tr");

  for (let i = 0; i < numOfColumns; i++) newRow.appendChild(addCell());

  myTable.appendChild(newRow);
  numOfRows++;
};

addColumn = () => {
  for (let i = 0; i < numOfRows; i++)
    myTable.getElementsByTagName("tr")[i].appendChild(addCell());

  numOfColumns++;
};

removeRow = () => {
  if (numOfRows > 1) {
    myTable.removeChild(myTable.lastChild);
    numOfRows--;
  }
};

removeColumn = () => {
  if (numOfRows >= 1 && numOfColumns > 1) {
    for (let i = 0; i < numOfRows; i++) {
      myTable
        .getElementsByTagName("tr")
        [i].removeChild(myTable.getElementsByTagName("tr")[i].lastChild);
    }
    numOfColumns--;
  }
};

function changeColor() {
  this.style.backgroundColor = color;
  this.classList.remove("uncolored");
}

fillAllUnc.addEventListener("click", (e) => {
  const cells = document.querySelectorAll("td.uncolored");
  for (const cell of cells) {
    cell.style.backgroundColor = color;
    cell.classList.remove("uncolored");
  }
});

fillAll.addEventListener("click", (e) => {
  const cells = document.querySelectorAll("td");
  for (const cell of cells) {
    cell.style.backgroundColor = color;
    cell.classList.remove("uncolored");
  }
});

colorSel.addEventListener("change", (event) => {
  if (colorSel.value === "Green") color = "#90ee90";
  else if (colorSel.value === "Red") color = "#ee9090";
  else color = "#90bfee";
});

clearAll.addEventListener("click", (e) => {
  const cells = document.querySelectorAll("td");
  for (const cell of cells) {
    cell.style.backgroundColor = "white";
    cell.classList.add("uncolored");
  }
});

firstCell.addEventListener("click", changeColor);
