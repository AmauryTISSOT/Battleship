import GameBoard from "./gameboard";

class DomDisplay extends GameBoard {

    constructor() {
        super();
    }

    displayGrid (){
        const contentE = document.querySelector('.content');
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                let divE = document.createElement('div');
                divE.className = 'grid'
                divE.id = `${i},${j}`
                contentE.appendChild(divE);
                divE.textContent = divE.id
            }
            
        }
    };

    _displayShip (){
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if(this.board[i][j].hasShip === true) {
                    return 'S'
                }
            }
        }
    }
}


export default DomDisplay;