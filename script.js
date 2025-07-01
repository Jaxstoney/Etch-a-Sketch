

const container = document.querySelector('.container');


let rows = 16, columns = 16;
makeGrid(rows, columns);

//grid layout and behavior logic

function makeGrid(rows, columns) {

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-div');
            container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Defines column count based on user input
            container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
            gridDiv.addEventListener('mouseenter', () => {
                gridDiv.classList.add('div-hovered');
            })

            container.appendChild(gridDiv)
        }
    }
}


//clear button logic
const clearButton = document.querySelector('.clear');
const dynamicDivs = document.querySelectorAll('.grid-div');

clearButton.addEventListener('click', () => {
    const dynamicDivs = document.querySelectorAll('.grid-div');
    dynamicDivs.forEach(div => {
    div.classList.remove('div-hovered', 'random-color');
    });
})

const changeButton = document.querySelector('.change-grid');

changeButton.addEventListener('click', () => {
    let gridSize = prompt("Enter a number between 1 and 100");
    if (gridSize >= 1 && gridSize <= 100) {
        const dynamicDivs = document.querySelectorAll('.grid-div'); // Select all divs with class 'grid-div'
        dynamicDivs.forEach(div => div.remove());
        makeGrid(gridSize, gridSize);
    } else {
        alert ("Error: You didnt enter a number between 1-100");
    }
})


const rainbowButton = document.querySelector('.rainbow');

rainbowButton.addEventListener('click', () => {
    // Select all the grid divs
    const dynamicDivs = document.querySelectorAll('.grid-div');
    
    // Add the hover effect to each div
    dynamicDivs.forEach(div => {
        div.addEventListener('mouseenter', function() {
            // Generate a random hex color
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

            div.style.setProperty('--random-color', randomColor);

            // Add the class that changes the background color
            div.classList.add('random-color');
        });
    });
});