
class GameBoard {
	constructor() {
		this.board = [];
		if (!this.board.length) this.init();
	}
    // method to initialize a 10 by 10 2D array;
	init() {
		for (let i = 0; i < 10; i++) {
            this.board.push([])
            for (let j = 0; j < 10; j++) {
                this.board[i].push({ hasShip: false, isShot: false })
            }
		}
	}

    placeShip (x, y, shipLength, rotation) {

        if (!this.board[x][y].hasShip){

            if(x < (this.board.length - (shipLength-1)) || y < (this.board[0].length - (shipLength-1))){         

                if (!rotation) {
                    for (let i = 0; i < shipLength; i++) {
                        this.board[x][y].hasShip = true;
                        y++;
                        
                    };
                };
                if(rotation){
                    for (let i = 0; i < shipLength; i++) {
                        this.board[x][y].hasShip = true;
                        x++;
                    };   
                };

                const shipCoordinate = [];
                for (let i = 0; i < this.board.length; i++) {
                    for (let j = 0; j < this.board[i].length; j++) {
                        if(this.board[i][j].hasShip) {
                            shipCoordinate.push([i,j]);
                        } 
                    };
                };
            return shipCoordinate
            }
            else {
                return 'Error, game board border collision'
            }
        }
        else{
            return 'Error, place already taken'
        }
        
    }

    receiveAttack(x,y) {
        if (!this.board[x][y].isShot) {
            this.board[x][y].isShot = true;
            return [x,y]
            
        } else {
            return 'Error, position already shot'
        }
    }

}

export default GameBoard;