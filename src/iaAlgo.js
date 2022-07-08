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
           

            // if (makeShip) {
            //     console.log('makeship', makeShip)
            //     this.displayGrid();
            // }
            // else {
            //     console.log('makeship', makeShip)
            //     this.placeShip(randomX(), randomY(), value, randomRotation())
            //     this.displayGrid();

            }
        )
                



    }
}

export default iaAlgo;