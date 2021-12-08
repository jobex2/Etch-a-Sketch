const container = document.querySelector('#grid-container');

for(let i = 0; i < 16*16; i++)
{
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.cssText = 'background-color: black; width: 30px; height: 30px; flex-shrink: 0';
    container.appendChild(grid);
}


