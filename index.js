"use strict";
const tableLength     = 9;  
const table           = Table.getTable(tableLength);
const pionGame        = new PionGame(tableLength, table);
let bonusPionInterval = setInterval(() => pionGame.moveBonusPion(), 2000);
window.addEventListener('keydown', e => pionGame.movePlayerPion(e, bonusPionInterval));
