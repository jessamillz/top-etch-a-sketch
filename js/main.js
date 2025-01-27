const container = document.querySelector("#container");
const containerWidth = container.clientWidth;
const gridResetButton = document.querySelector("#grid-reset");
let gridSize = 16;

// Button click prompts user to input new grid size, max size 100
// createGrid(user size) is then called

gridResetButton.addEventListener('click', () => {
    let newSize = Number(prompt("Please enter the number of squares per side, up to 100"));
    if (Number.isInteger(newSize)) {
        if ((newSize > 0) && (newSize <= 100)) {
            createGrid(newSize);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    } else {
        alert("Please enter a whole number between 1 and 100.");
    }
})

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.style.width = `${containerWidth / size}px`;
        div.style.height = `${containerWidth / size}px`;
        container.appendChild(div);

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "#5a8d5a";
        })
    }
}

createGrid(gridSize);

