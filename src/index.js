import DomDisplay from "./domdisplay";
import GameBoard from "./gameboard";


const dom = new DomDisplay();
dom.displayShot();
//dom.displayShip();
dom.placeShip(5,5,4,true);
dom.displayGrid();
console.log('dom', dom.board);

