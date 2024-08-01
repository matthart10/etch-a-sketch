let container = document.querySelector("#container");

var gridSize = 0;
function startPrompt() {
    gridSize = prompt("What size grid do you want?");
    while (isNaN(gridSize)) {
        alert("Not a Number. Try again.");
        gridSize = prompt("What size grid do you want?");
    }
    makeGrid(gridSize);
}


let startButton = document.createElement("button");
startButton.id = "btn"
startButton.textContent = "Click to choose size grid";
container.appendChild(startButton);
startButton.addEventListener("click", startPrompt);

let smallContainer = document.createElement("div");
smallContainer.style.cssText = "min-width: 960px; max-width: 960px";
container.appendChild(smallContainer);


function makeGrid(number) {
    for (let i=0; i < (number * number); i++) {
    
        const square = document.createElement("div");
        square.classList.add("box");
        square.style.height = 400 + 'px';
        square.style.cssText =  `padding: 20px; border-style: solid; border-width: 3px; border-color: black;`;
        smallContainer.appendChild(square);
        
        }
}




let boxes = document.querySelectorAll(".box");
boxes.forEach((div) => {
    div.addEventListener("mouseover", () => {
     div.classList.add("hover");
    });
});
