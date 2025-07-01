

const container = document.querySelector('.container');


let rows = 16, columns = 16;

//grid layout and behavior logic
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');

        gridDiv.addEventListener('mouseenter', () => {
            gridDiv.classList.add('div-hovered');
        })

        container.appendChild(gridDiv)
    }
}

//clear button logic
const clearButton = document.querySelector('.clear');
const dynamicDivs = document.querySelectorAll('.grid-div');

clearButton.addEventListener('click', () => {
    dynamicDivs.forEach(div => {
    div.classList.remove('div-hovered');
    });
})

const changeButton = document.querySelector('.change-grid');
