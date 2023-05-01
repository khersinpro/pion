"use strict";
let pion                =   new Image();
let table               =   document.createElement('table');
let tableLength         =   5;
table.style.cssText     =   "border: 2px solid; boder-collapse: collapse;";
pion.src                =   "./pion.png";

// Création des rows et des cells
for (let x = 0; x < tableLength; x++)
{
    let tr = table.insertRow();
    
    for (let y = 0; y < tableLength; y++)
    {
        let td = tr.insertCell()
        td.style.cssText    =   "border: 1px solid; height: 100px; width: 100px; font-size: 0px;";
    }
}

let x   =   Math.floor(tableLength / 2 );
let y   =   Math.floor(tableLength / 2 );

table.rows[x].cells[y].appendChild(pion);
document.querySelector('body').appendChild(table);

window.addEventListener('keydown', e => {
    if      (e.key === 'ArrowUp'    && x > 0)                   x--;
    else if (e.key === 'ArrowLeft'  && y > 0)                   y--;
    else if (e.key === 'ArrowRight' && y < tableLength - 1)     y++;
    else if (e.key === 'ArrowDown'  && x < tableLength - 1)     x++;
    table.rows[x].cells[y].appendChild(pion);
})