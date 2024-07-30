let container = document.querySelector("#container");
container.style.cssText = "display: flex; max-width: 900px; flex-wrap: wrap"
for (let i=0; i < 256; i++) {

const square = document.createElement("div");
square.style.cssText = "border-style: solid; border-width: 3px; border-color: black; width: 50px; height: 50px;";
container.appendChild(square);

}