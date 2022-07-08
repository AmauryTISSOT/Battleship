import Ship from "./ship";

class GameBoard extends Ship{
	constructor() {
        super();
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

        const newShip = new Ship(shipLength);

        if (!this.board[x][y].hasShip){
            // console.log('x', x)
            // console.log('y', y)
           
            
            if (!rotation) {
                if(y <= (this.board.length - shipLength)){   
                    if (!this.setCollision(x,y,shipLength,rotation)) {

                    for (let i = 0; i < shipLength; i++) {
                        this.board[x][y].hasShip = true;
                        newShip.shipLocation.push([x,y])
                        y++;   
                    }
                    return true
                }
   
                }
                else {
                    console.log('Error, game board border collision')
                    return false
                }
            };


            if(rotation){
                if(x <= (this.board.length - shipLength)){  
                    if (!this.setCollision(x,y,shipLength,rotation)){       
                        for (let i = 0; i < shipLength; i++) {
                            this.board[x][y].hasShip = true;
                            newShip.shipLocation.push([x,y])
                            x++;
                        } 
                        return true
                    }
                }
                else {
                    console.log('Error, game board border collision')
                    return false
                }
            };

            //     const shipCoordinate = [];
            //     for (let i = 0; i < this.board.length; i++) {
            //         for (let j = 0; j < this.board[i].length; j++) {
            //             if(this.board[i][j].hasShip) {
            //                 shipCoordinate.push([i,j]);
            //             } 
            //         };
            //     };
            // console.log(newShip.shipLocation)
            // return shipCoordinate
        }
        else{
            console.log('Error, place already taken')
            return false
        }
    }

    // x = 5 : collision true pour (5,1)(5,2)(5,3) donc x - (length-1)

    setCollision(x,y,shipLength, rotation) {
        let collisionArray = [];
        if (rotation) {
            for (let i = x; i < x + shipLength; i++) {
                collisionArray.push(this.board[i][y].hasShip)
            }
            if (collisionArray.includes(true)){
                console.log('ship collision');
                return true
            }
            else return false
        }

        if (!rotation) {
            for (let i = y; i < y + shipLength; i++) {
                collisionArray.push(this.board[x][i].hasShip)
            }
            if (collisionArray.includes(true)){
                console.log('ship collision');
                return true
            }
            else return false
        }
        console.log(collisionArray);
    }


    receiveAttack(x,y) {
        if (!this.board[x][y].isShot) {
            this.board[x][y].isShot = true;
            return [x,y]
            
        }
        if(this.board[x][y].isShot) {
            console.log('Error, position already shot')
            return 'Error, position already shot'
        }
    }

}

export default GameBoard;
