const container = document.getElementById("container");

function makeRows(rows = 16, cols = 16) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid-item";
  }
  return rows;
}

function changeColor() {
  const selectDiv = document.querySelectorAll(".grid-item");
  let divArr = Array.from(selectDiv);
  divArr.forEach((el) =>
    el.addEventListener("mouseenter", (e) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style = `background-color: #${randomColor}`;
    })
  );
}

function grabInput() {
  let gridSize = document.querySelector(".grid-size");
  let val = parseInt(gridSize.value);
  lastVal = isNaN(val) ? lastVal : val;

  if (val > 100 || val <= 0) {
    alert("not a valid number");
    val = 16;
  }
  if (isNaN(val)) {
    makeRows(lastVal, lastVal);
    changeColor();
    gridSize.value = "";
  } else {
    makeRows(val, val);
    changeColor();
    gridSize.value = "";
  }
}

function resetGrid() {
  const reset = document.querySelector(".reset");
  const div = document.querySelectorAll(".grid-item");
  let arrDiv = Array.from(div);
  const containerOne = document.querySelector("#container");
  reset.addEventListener("click", (e) => {
    containerOne.innerHTML = "";
    grabInput();

    arrDiv.forEach((el) => {
      el.style = `background-color: white`;
    });
  });
}
var lastVal = makeRows();

changeColor();
resetGrid();
