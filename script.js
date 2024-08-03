// Apply styles to container holding button and grid
let container = document.querySelector("#container");
container.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center";

// Create start button
let startButton = document.createElement("button");
startButton.id = "btn"
startButton.textContent = "Click to choose size grid";
container.appendChild(startButton);
startButton.addEventListener("click", startPrompt);

// Create container for option buttons
let optionButtonContainer = document.createElement("div");
container.appendChild(optionButtonContainer);

// Create Reset Grid button
let resetGridButton = document.createElement("button");
resetGridButton.id = "optionBtns"
resetGridButton.textContent = "Reset Grid";
optionButtonContainer.appendChild(resetGridButton);

// Create Rainbow Color button
let rainbowColorButton = document.createElement("button");
rainbowColorButton.id = "optionBtns"
rainbowColorButton.textContent = "Rainbow Color";
optionButtonContainer.appendChild(rainbowColorButton);

// Create Opacity Increase button
let increaseOpacityButton = document.createElement("button");
increaseOpacityButton.id = "optionBtns"
increaseOpacityButton.textContent = "Opacity Increase Option";
optionButtonContainer.appendChild(increaseOpacityButton);

// Create grid
let grid = document.createElement("div");
grid.style.cssText = "min-height: 500px; min-width: 500px; max-width: 500px; display: flex; flex-wrap: wrap; border-style: solid; border-color: black";
container.appendChild(grid);

var numberOfRowsAndColumns = 0;
function startPrompt() {
    numberOfRowsAndColumns = prompt("What size grid do you want?");
    while ((isNaN(numberOfRowsAndColumns)) || (numberOfRowsAndColumns > 100)) {
        alert("Not a number or number is too large. Try again.");
        numberOfRowsAndColumns = prompt("What size grid do you want?");
    }
    let widthAndHeight = 500 / numberOfRowsAndColumns;

    makeGrid(numberOfRowsAndColumns, widthAndHeight);
}

function makeGrid(numberOfRowsAndColumns, widthAndHeight) {
    grid.textContent = '';
    for (let i=0; i < (numberOfRowsAndColumns * numberOfRowsAndColumns); i++) {
        const cell = document.createElement("div");
        cell.classList.add("box");
        cell.style.boxSizing = "border-box";
        cell.style.width = widthAndHeight + "px";
        cell.style.height = widthAndHeight + "px";
        grid.appendChild(cell);
        }
        
        let cells = document.querySelectorAll(".box");
        cells.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red";
            });
                increaseOpacityButton.addEventListener("click", () => {
                    div.style.backGroundColor = "#FFFFFF";
                    div.style.opacity = 0;
                    div.addEventListener("mouseover", () => {
                        div.style.backgroundColor = "red";
                        let currentOpacity = parseFloat(div.style.opacity);
                        if (currentOpacity <= 0.9) {
                            let newOpacity = currentOpacity + 0.1;
                            div.style.opacity = newOpacity;
                        };
                    });
                });
                rainbowColorButton.addEventListener("click", () => {
                    div.style.backgroundColor = "#FFFFFF";
                    div.style.opacity = 1;
                    div.addEventListener("mouseover", () => {
                        div.style.backgroundColor = getRandomColor();
                    });
                });
                resetGridButton.addEventListener("click", () => {
                        div.style.opacity = 1;
                        div.style.backgroundColor = resetGrid();
                        div.addEventListener("mouseover", () => {
                            div.style.backgroundColor = "red";
                        });
                });
            });
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}


function resetGrid() {
    var color = "#FFFFFF"
    return color;
}

function increaseOpacity() {
    let currentOpacity = parseFloat(e.style.opacity);
    let newOpacity = currentOpacity + 0.1;
    e.style.opacity = newOpacity;
}