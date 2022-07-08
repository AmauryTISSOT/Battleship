import GameBoard from "./gameboard";

class DomDisplay extends GameBoard {

    constructor() {
        super();
        this.board = this.board;
    }

    displayGrid (){
        this._deleteContentElement();
        const contentE = document.querySelector('.content');
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                let divE = document.createElement('div');
                divE.className = 'grid'
                divE.id = `${i},${j}`
                contentE.appendChild(divE);
                divE.textContent = divE.id
                if (this.board[i][j].hasShip) {
                    divE.className = 'ship';
                }
                if (this.board[i][j].isShot) {
                    divE.className = 'shot';
                }
                if (this.board[i][j].hasShip && this.board[i][j].isShot) {
                    divE.className = 'hit'
                }
            }
        }
    };
    
    displayShip () {
        window.addEventListener('click', (event) => {
            const targetEId = event.target.id.split(',');
            let x = parseInt(targetEId[0]);
            let y = parseInt(targetEId[1])
            this.placeShip(x, y, 4, false);
            this.displayGrid();
        })  
    }

    displayShot () {
        window.addEventListener('click', (event) => {
            const targetEId = event.target.id.split(',');
            let x = parseInt(targetEId[0]);
            let y = parseInt(targetEId[1])
            console.log('shot at', x, y)
            this.receiveAttack(x, y);
            console.log(this.board[x][y].isShot)
            this.displayGrid(); 
        })
    }

    _deleteContentElement () {
        const e = document.querySelector(".content");
        let first = e.firstElementChild;
        while (first) {
            first.remove();
            first = e.firstElementChild;
        };
    };
    
    
}


export default DomDisplay;