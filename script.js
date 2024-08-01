let container = document.querySelector("#container");

var gridSize = 0;
function startPrompt() {
    gridSize = prompt("What size grid do you want?");
    while (isNaN(gridSize)) {
        alert("Not a Number. Try again.");
        gridSize = prompt("What size grid do you want?");
    }
    let adjustedSize = 960 / gridSize;
    makeGrid(gridSize, adjustedSize);
}


let startButton = document.createElement("button");
startButton.id = "btn"
startButton.textContent = "Click to choose size grid";
container.appendChild(startButton);
startButton.addEventListener("click", startPrompt);

let smallContainer = document.createElement("div");
smallContainer.style.cssText = "min-width: 960px; max-width: 960px; display: flex; flex-wrap: wrap;";
container.appendChild(smallContainer);

function makeGrid(number1, number2) {
    for (let i=0; i < (number1 * number1); i++) {
    
        const square = document.createElement("div");
        square.classList.add("box");
        square.style.boxSizing = "border-box";
        square.style.width = number2 + "px";
        square.style.height = number2 + "px";
        smallContainer.appendChild(square);
        
        }
        let boxes = document.querySelectorAll(".box");
        boxes.forEach((div) => {
            div.addEventListener("mouseover", () => {
             div.classList.add("hover");
            });
        });
}