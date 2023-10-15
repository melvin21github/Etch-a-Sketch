let board = document.querySelector(".board")
createBoard(32)

function createBoard(size){
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    numDivs = size*size
    for(let i= 0; i< numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.appendChild(div);
    }
}