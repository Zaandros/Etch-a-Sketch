
//Variables

let height = 10;
let width = 10;
let gridSize = 16;
let cell = document.createElement('div');
let blackSelected = true;
let colourConfirmed = false;
let randomSelected = false;
let erase = false;

//Query Selectors

const grid = document.querySelector('.grid');
const smallBtn = document.querySelector(".small");
const mediumBtn = document.querySelector(".medium");
const largeBtn = document.querySelector(".large");
const sizeSlider = document.querySelector(".slider");
const sizeDisplay = document.querySelector(".canvas-size");
const clearButton = document.querySelector(".clear");
const colourBlack = document.querySelector(".black");
const colourPicker = document.querySelector(".colour-picker");
const confirmColour = document.querySelector(".confirm");
const confirmRandom = document.querySelector(".random");
const rubber = document.querySelector(".rubber");


//event listeners

smallBtn.addEventListener("click", smallSize);
mediumBtn.addEventListener("click", mediumSize);
largeBtn.addEventListener("click", largeSize);
sizeSlider.addEventListener("change", sizeSelector);
clearButton.addEventListener("click", clearCanvas);
colourBlack.addEventListener("click", selectColourBlack);
confirmColour.addEventListener("click", selectColourPicker);
confirmRandom.addEventListener("click", selectRandomColour);
rubber.addEventListener("click", rubout);

//section functions are called

drawGrid();


//functions

function smallSize() {
  gridSize = 20;
  sizeSlider.value = gridSize;
  sizeDisplay.textContent = gridSize;
  console.log(gridSize);
  reset();
  drawGrid();
  }

function mediumSize() {
  gridSize = 75;
  sizeSlider.value = gridSize;
  sizeDisplay.textContent = gridSize;
  console.log(gridSize);
  reset();
  drawGrid();
}

function largeSize() {
  gridSize = 150;
  sizeSlider.value = gridSize;
  sizeDisplay.textContent = gridSize;
  console.log(gridSize);
  reset();
  drawGrid();
}

function sizeSelector() {
  gridSize = sizeSlider.value;
  sizeDisplay.textContent = gridSize;
  reset();
  drawGrid();
}

function drawGrid() {

  let boardSize = gridSize * gridSize;
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < boardSize; i++) {

        cell = document.createElement('div');
        cell.classList.add(`cell`);       
        cell.addEventListener("mouseenter", detectMouse);
        grid.insertAdjacentElement("beforeend", cell);
           
    }
 
}

function detectMouse(value) {
  if (blackSelected == true) {
    
  value.target.style.backgroundColor = "black";
  }

  else if (colourConfirmed == true) {

    let userColourSelection = colourPicker.value;
    value.target.style.backgroundColor = userColourSelection;
  }

  else if (randomSelected == true) {
    
    let letters = '0123456789ABCDEF';
    let color = '#';
      for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
      
    value.target.style.backgroundColor = color;
  }

  else if (erase == true) {
    
    value.target.style.backgroundColor = "white";
  }
 
}

function clearCanvas() {
  reset();
  drawGrid();
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

 function selectColourPicker() {

  colourConfirmed = true;
  blackSelected = false;
  randomSelected = false;
  erase = false;
}

function selectColourBlack() {

  blackSelected = true;
  colourConfirmed = false;
  randomSelected = false;
  erase = false;
}

function selectRandomColour(){
  randomSelected = true;
  colourConfirmed = false;
  blackSelected = false;
  erase = false;
}

function rubout() {
  erase = true;
  blackSelected = false;
  colourConfirmed = false;
  randomSelected = false;
  
}


