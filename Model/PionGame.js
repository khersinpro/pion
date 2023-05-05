class PionGame 
{
    x;
    y;
    table;
    tableLength;
    playerPion;
    bonusPion;
    bravoPion;
    partyWin;
    generatedX;
    generatedY;

    constructor(tableLength, table)
    {
        this.tableLength    = tableLength;
        this.table          = table;
        this.x              = Math.floor(this.tableLength / 2 );
        this.y              = Math.floor(this.tableLength / 2 );
        this.partyWin       = false;
        this.playerPion     = this.generatePion("./assets/pion.png");
        this.bonusPion      = this.generatePion("./assets/bonus.png");
        this.bravoPion      = this.generatePion("./assets/bravo.png");
        document.querySelector('body').appendChild(this.table);
        this.table.rows[this.x].cells[this.y].appendChild(this.playerPion);
        this.moveBonusPion();
    }

    // Fonction pour deplacer le pion Bonus ou le mettre en place au démarrage du jeu
    moveBonusPion = () => {
        do {
            this.generatedX = Math.floor(Math.random() * this.tableLength);
            this.generatedY = Math.floor(Math.random() * this.tableLength);
        } while (this.generatedX === this.x || this.generatedY === this.y)

        this.table.rows[this.generatedX].cells[this.generatedY].appendChild(this.bonusPion);
    }

    // Fonction pour déplacer le le pion du joueur et controller si la partie est gagnée
    movePlayerPion = (e, interval) => {
        if      (e.key === 'ArrowUp'    && this.x > 0)                        this.x--;
        else if (e.key === 'ArrowLeft'  && this.y > 0)                        this.y--;
        else if (e.key === 'ArrowRight' && this.y < this.tableLength - 1)     this.y++;
        else if (e.key === 'ArrowDown'  && this.x < this.tableLength - 1)     this.x++;

        if (this.x === this.generatedX && this.y === this.generatedY && !this.partyWin) {
            this.partyWin = !this.partyWin;
            this.playerPion.remove();
            this.bonusPion.remove();
            this.table.rows[this.x].cells[this.y].appendChild(this.bravoPion);
            clearInterval(interval);
        } else if (!this.partyWin) {
            table.rows[this.x].cells[this.y].appendChild(this.playerPion);
        }
    }

    // Fonction pour generer les images de pions
    generatePion(src)
    {
        let image = new Image();
        image.src = src;
        return image;
    }
}