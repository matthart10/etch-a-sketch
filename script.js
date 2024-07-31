let container = document.querySelector("#container");
container.style.cssText = "display: flex; min-width: 960px; max-width: 960px; flex-wrap: wrap"

function startPrompt() {
    var gridSize = prompt("What size grid do you want?", "0")
    while (isNaN(gridSize)) {
        alert("Not a Number. Try again.");
        gridSize = prompt("What size grid do you want?", "0")
    }
    return gridSize;
}


let startButton = document.createElement("button");
startButton.id = "btn"
startButton.textContent = "Click to choose size grid";
container.appendChild(startButton);
startButton.addEventListener("click", startPrompt);



for (let i=0; i < 256; i++) {

const square = document.createElement("div");
square.classList.add("box");
square.style.cssText = "border-style: solid; border-width: 3px; border-color: black; width: 50px; height: 50px;";
container.appendChild(square);

}

let boxes = document.querySelectorAll(".box");
boxes.forEach((div) => {
    div.addEventListener("mouseover", () => {
     div.classList.add("hover");
    });
});

