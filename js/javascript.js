

let height = 10;
let width = 10;
let gridSize = 16;
const grid = document.querySelector('.grid');
let cells = document.querySelectorAll(".cell");
const smallBtn = document.querySelector(".small");
const mediumBtn = document.querySelector(".medium");
const largeBtn = document.querySelector(".large");
     

smallBtn.addEventListener("click", smallSize);
mediumBtn.addEventListener("click", mediumSize);
largeBtn.addEventListener("click", largeSize);

drawGrid();

function smallSize() {
  gridSize = 16;
  console.log(gridSize);
  reset();
  drawGrid();
  }

function mediumSize() {
  gridSize = 40;
  console.log(gridSize);
  reset();
  drawGrid();
}

function largeSize() {
  gridSize = 50;
  console.log(gridSize);
  reset();
  drawGrid();
}

function drawGrid() {
  let boardSize = gridSize * gridSize;
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < boardSize; i++) {

        let cell = document.createElement('div');
        cell.classList.add(`cell`);       
        cell.addEventListener("mouseenter", detectMouse);
        grid.insertAdjacentElement("beforeend", cell);
          
    }
  
}

function detectMouse(value) {
  console.log(value);
  value.target.classList.add("hovering");
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}



