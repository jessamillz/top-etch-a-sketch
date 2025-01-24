// Grid of 16x16 square divs created in javascript
// This number will be able to be changed by the user
//  Will be created inside the container div
//  Use flexbox so they appear in a grid
//  Need to apply the css class for the 
const container = document.querySelector("#container");
const containerWidth = container.clientWidth;
let gridSize = 16;

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.style.width = `${containerWidth / size}px`;
        div.style.height = `${containerWidth / size}px`;
        container.appendChild(div);
    }
}

createGrid(gridSize);