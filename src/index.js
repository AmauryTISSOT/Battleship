import DomDisplay from "./domdisplay";
import GameBoard from "./gameboard";
import iaAlgo from "./iaAlgo";


const dom = new DomDisplay();
const ia = new iaAlgo();
ia.randomShip();
ia.randomAttack();

// ia.placeShip(5,5,4,false);
// ia.receiveAttack(5,5)
// ia._shottingPattern(5,5)
ia.displayShot();
ia.displayShip();
ia.displayGrid();
console.log('dom', ia.board);

