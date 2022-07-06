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
        console.log(this.board[0].length)

        if (!this.board[x][y].hasShip){

            if(x < (this.board.length - x)){
                console.log('x =', x)
                console.log('board length', this.board.length)
                console.log('x-length', (this.board.length - x))
            }

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
        else{
            return 'Error, place already taken'
        }
    }




}

const arr = [
            ['A','B','C','D'],
            ['E','F','G','H'],
            ['I','J','K','L'],
            ['M','N','O','P']
            ]
function coord(x,y) {
    console.log(arr[x][y])
}

function findCoord (array, find) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(array[i][j] === find) {
                console.log('x', i);
                console.log('y', j);
            } 
        }
        
    }
}


module.exports = GameBoard;