import DomDisplay from "./domdisplay";


class iaAlgo extends DomDisplay{

    constructor(){
        super()
    }

    randomShip(){
        const shipArray = [
            2,
            2,
            2,
            4,
            1,
            1,
            1,
            1,
            3,
            3
        ]

        const randomX = ()=> Math.floor(Math.random() * 10);
        const randomY = ()=> Math.floor(Math.random() * 10);
        
        function randomRotation() {
            const randomNumber = Math.floor(Math.random()*10)
            if(randomNumber < 5) {
                return true
            }
            else return false
        };

        shipArray.forEach((value) => {

            while(true) {
                const makeShip = this.placeShip(randomX(),randomY(), value, randomRotation())
                if (makeShip){
                    break
                }
            }
           
            this.displayGrid();
            }
        )
    }

    randomAttack () {
        const randomX = ()=> Math.floor(Math.random() * 10);
        const randomY = ()=> Math.floor(Math.random() * 10);
        for (let i = 0; i < 99; i++) {
            let x = randomX();
            let y = randomY();
            if(!this.board[x][y].isShot){
                this.receiveAttack(x, y)
                this._shottingPattern(x,y);
                this.displayGrid();
            }            
        }   
    }          
        
    

    _hitDetection (x, y) {
        console.log(x, y, this.board[x][y]);
        if(this.board[x][y].hasShip && this.board[x][y].isShot){
            console.log('HIT !')
            return true
        }
        else return false
    }
    
    _shottingPattern(x,y) {
        console.log(this._hitDetection(x,y))
        if (this._hitDetection(x,y)){
            for (let i = (y - 1); i >= 0 ; i--) {
                this.receiveAttack(x, i)
                if(!this._hitDetection(x,i)){
                    break
                }
            }

            for (let i = (y + 1); i <= 10 ; i++) {
                this.receiveAttack(x, i)
                if(!this._hitDetection(x,i)){
                    break
                }
            }

            for (let i = (x - 1); i >= 0 ; i--) {
                this.receiveAttack(i, y)
                if(!this._hitDetection(i,y)){
                    break
                }
            }

            for (let i = (x + 1); i <= 10 ; i++) {
                this.receiveAttack(i, y)
                if(!this._hitDetection(i,y)){
                    break
                }
            }
        }
    }
}


export default iaAlgo; 