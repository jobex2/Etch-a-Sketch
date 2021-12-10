const container = document.querySelector('#grid-container');
const gridReset = document.querySelector('button');

createGrid(25);


//function definitons

function hover()
{
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}
function createGrid (num)
{
    if(num >100)
    {
        alert("Cannot have a grid larger than 100, grid set to 100");
        num = 100;
    }
    let sWidth = (100/num);
    for(let i = 0; i < num*num; i++)
    {
        const grid = document.createElement('div');
        grid.classList.add('square');
        grid.style.width = `${sWidth}%`;
        grid.style.paddingBottom = `${sWidth}%`;
        container.appendChild(grid);
    }
    hover();
}
function removeGrid()
{
    while(container.lastChild)
    {
        container.removeChild(container.lastChild);
    }
    let grid = prompt('Please enter new grid size');
    let intGrid = parseInt(grid);
    createGrid(intGrid)
    
}
function shade()
{
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let percent = .1;
        square.addEventListener('mouseover', () => {
            
            square.style.backgroundColor = `RGBA(0,0,0,${percent})`;
            percent += .1;
           
        });
    });
}
