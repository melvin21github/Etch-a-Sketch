let color = "black";
let click = false;
const btnSize = document.querySelector(".btn-size");
const board = document.querySelector(".board");
createBoard(16);

btnSize.addEventListener("click", function () {
  let size = getSize();
  createBoard(size);
});

function createBoard(size) {
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.appendChild(div);
  }
}

function getSize() {
  let gridSize = prompt("Enter the grid size:");
  let msg = document.querySelector("#msg");
  if (gridSize == "") {
    msg.innerHTML = "Enter a number!";
  } else if (gridSize < 0 || gridSize > 100) {
    msg.innerHTML = "Enter a number between 1 and 100";
  } else {
    msg.innerHTML = `grid size is ${gridSize}x${gridSize}`;
    return gridSize;
  }
}

function colorDiv() {
  if (click) {
    if (color == "rainbow") {
      this.style.backgroundColor = getRandomColor();
    } 
    else if(color == "white"){
        this.style.backgroundColor = "white";
    }
    else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215);
  return "#" + randomColor.toString(16);
}

function resetBoard() {
  let divs = board.querySelectorAll("div");
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

board.addEventListener("click", function () {
  click = !click;
  let toDraw = document.getElementById("toDraw");
  if(click){
    toDraw.innerHTML = "Enjoy, you can draw now! Click again not to draw";
  }
  else{
    toDraw.innerHTML = "Click inside the board to draw!";
  }
});
