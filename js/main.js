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

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "#5a8d5a";
        })
    }
}

createGrid(gridSize);

