/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domdisplay.js":
/*!***************************!*\
  !*** ./src/domdisplay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass DomDisplay extends _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super();\n        this.board = this.board;\n    }\n\n    displayGrid (){\n        this._deleteContentElement();\n        const contentE = document.querySelector('.content');\n        for (let i = 0; i < this.board.length; i++) {\n            for (let j = 0; j < this.board[i].length; j++) {\n                let divE = document.createElement('div');\n                divE.className = 'grid'\n                divE.id = `${i},${j}`\n                contentE.appendChild(divE);\n                divE.textContent = divE.id\n                if (this.board[i][j].hasShip) {\n                    divE.className = 'ship';\n                }\n                if (this.board[i][j].isShot) {\n                    divE.className = 'shot';\n                }\n                if (this.board[i][j].hasShip && this.board[i][j].isShot) {\n                    divE.className = 'hit'\n                }\n            }\n        }\n    };\n    \n    displayShip () {\n        window.addEventListener('click', (event) => {\n            const targetEId = event.target.id.split(',');\n            let x = parseInt(targetEId[0]);\n            let y = parseInt(targetEId[1])\n            this.placeShip(x, y, 4, false);\n            this.displayGrid();\n        })  \n    }\n\n    displayShot () {\n        window.addEventListener('click', (event) => {\n            const targetEId = event.target.id.split(',');\n            let x = parseInt(targetEId[0]);\n            let y = parseInt(targetEId[1])\n            console.log('shot at', x, y)\n            this.receiveAttack(x, y);\n            console.log(this.board[x][y].isShot)\n            this.displayGrid(); \n        })\n    }\n\n    _deleteContentElement () {\n        const e = document.querySelector(\".content\");\n        let first = e.firstElementChild;\n        while (first) {\n            first.remove();\n            first = e.firstElementChild;\n        };\n    };\n    \n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomDisplay);\n\n//# sourceURL=webpack:///./src/domdisplay.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass GameBoard extends _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n\tconstructor() {\n        super();\n\t\tthis.board = [];\n\t\tif (!this.board.length) this.init();\n\t}\n    // method to initialize a 10 by 10 2D array;\n\tinit() {\n\t\tfor (let i = 0; i < 10; i++) {\n            this.board.push([])\n            for (let j = 0; j < 10; j++) {\n                this.board[i].push({ hasShip: false, isShot: false })\n            }\n\t\t}\n\t}\n\n    placeShip (x, y, shipLength, rotation) {\n\n        const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shipLength);\n\n        if (!this.board[x][y].hasShip){\n            // console.log('x', x)\n            // console.log('y', y)\n           \n            \n            if (!rotation) {\n                if(y <= (this.board.length - shipLength)){   \n                    if (!this.setCollision(x,y,shipLength,rotation)) {\n\n                    for (let i = 0; i < shipLength; i++) {\n                        this.board[x][y].hasShip = true;\n                        newShip.shipLocation.push([x,y])\n                        y++;   \n                    }\n                    return true\n                }\n   \n                }\n                else {\n                    console.log('Error, game board border collision')\n                    return false\n                }\n            };\n\n\n            if(rotation){\n                if(x <= (this.board.length - shipLength)){  \n                    if (!this.setCollision(x,y,shipLength,rotation)){       \n                        for (let i = 0; i < shipLength; i++) {\n                            this.board[x][y].hasShip = true;\n                            newShip.shipLocation.push([x,y])\n                            x++;\n                        } \n                        return true\n                    }\n                }\n                else {\n                    console.log('Error, game board border collision')\n                    return false\n                }\n            };\n\n            //     const shipCoordinate = [];\n            //     for (let i = 0; i < this.board.length; i++) {\n            //         for (let j = 0; j < this.board[i].length; j++) {\n            //             if(this.board[i][j].hasShip) {\n            //                 shipCoordinate.push([i,j]);\n            //             } \n            //         };\n            //     };\n            // console.log(newShip.shipLocation)\n            // return shipCoordinate\n        }\n        else{\n            console.log('Error, place already taken')\n            return false\n        }\n    }\n\n    // x = 5 : collision true pour (5,1)(5,2)(5,3) donc x - (length-1)\n\n    setCollision(x,y,shipLength, rotation) {\n        let collisionArray = [];\n        if (rotation) {\n            for (let i = x; i < x + shipLength; i++) {\n                collisionArray.push(this.board[i][y].hasShip)\n            }\n            if (collisionArray.includes(true)){\n                console.log('ship collision');\n                return true\n            }\n            else return false\n        }\n\n        if (!rotation) {\n            for (let i = y; i < y + shipLength; i++) {\n                collisionArray.push(this.board[x][i].hasShip)\n            }\n            if (collisionArray.includes(true)){\n                console.log('ship collision');\n                return true\n            }\n            else return false\n        }\n        console.log(collisionArray);\n    }\n\n\n    receiveAttack(x,y) {\n        try{\n            if (!this.board[x][y].isShot) {\n                this.board[x][y].isShot = true;\n                return true\n            }\n    \n            if(this.board[x][y].isShot) {\n                console.log('Error, position already shot')\n                return false\n            }\n        }\n\n        catch (error){\n            console.log('AA')\n        }\n        \n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/iaAlgo.js":
/*!***********************!*\
  !*** ./src/iaAlgo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domdisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domdisplay */ \"./src/domdisplay.js\");\n\n\n\nclass iaAlgo extends _domdisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n\n    constructor(){\n        super()\n    }\n\n    randomShip(){\n        const shipArray = [\n            2,\n            2,\n            2,\n            4,\n            1,\n            1,\n            1,\n            1,\n            3,\n            3\n        ]\n\n        const randomX = ()=> Math.floor(Math.random() * 10);\n        const randomY = ()=> Math.floor(Math.random() * 10);\n        \n        function randomRotation() {\n            const randomNumber = Math.floor(Math.random()*10)\n            if(randomNumber < 5) {\n                return true\n            }\n            else return false\n        };\n\n        shipArray.forEach((value) => {\n\n            while(true) {\n                const makeShip = this.placeShip(randomX(),randomY(), value, randomRotation())\n                if (makeShip){\n                    break\n                }\n            }\n           \n            this.displayGrid();\n            }\n        )\n    }\n\n    randomAttack () {\n        const randomX = ()=> Math.floor(Math.random() * 10);\n        const randomY = ()=> Math.floor(Math.random() * 10);\n        for (let i = 0; i < 99; i++) {\n            let x = randomX();\n            let y = randomY();\n            if(!this.board[x][y].isShot){\n                this.receiveAttack(x, y)\n                this._shottingPattern(x,y);\n                this.displayGrid();\n            }            \n        }   \n    }          \n        \n    \n\n    _hitDetection (x, y) {\n        console.log(x, y, this.board[x][y]);\n        if(this.board[x][y].hasShip && this.board[x][y].isShot){\n            console.log('HIT !')\n            return true\n        }\n        else return false\n    }\n    \n    _shottingPattern(x,y) {\n        console.log(this._hitDetection(x,y))\n        if (this._hitDetection(x,y)){\n            for (let i = (y - 1); i >= 0 ; i--) {\n                this.receiveAttack(x, i)\n                if(!this._hitDetection(x,i)){\n                    break\n                }\n            }\n\n            for (let i = (y + 1); i <= 10 ; i++) {\n                this.receiveAttack(x, i)\n                if(!this._hitDetection(x,i)){\n                    break\n                }\n            }\n\n            for (let i = (x - 1); i >= 0 ; i--) {\n                this.receiveAttack(i, y)\n                if(!this._hitDetection(i,y)){\n                    break\n                }\n            }\n\n            for (let i = (x + 1); i <= 10 ; i++) {\n                this.receiveAttack(i, y)\n                if(!this._hitDetection(i,y)){\n                    break\n                }\n            }\n        }\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iaAlgo); \n\n//# sourceURL=webpack:///./src/iaAlgo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domdisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domdisplay */ \"./src/domdisplay.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _iaAlgo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iaAlgo */ \"./src/iaAlgo.js\");\n\n\n\n\n\nconst dom = new _domdisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst ia = new _iaAlgo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nia.randomShip();\nia.randomAttack();\n\n// ia.placeShip(5,5,4,false);\n// ia.receiveAttack(5,5)\n// ia._shottingPattern(5,5)\nia.displayShot();\nia.displayShip();\nia.displayGrid();\nconsole.log('dom', ia.board);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n\n    constructor(length) {\n        this.length = this._lengthCreator(length),\n        this.sunk = false,\n        this.shipLocation = [];\n    }\n\n    _lengthCreator (length) {\n        let shipLength = [];\n        for (let i = 0; i < length; i++) {\n            shipLength.push(1);\n        }\n        return shipLength\n    }\n\n    isSunk () {\n       const lengthSum = this.length.reduce((sum, a) => sum + a, 0)\n        if (lengthSum === 0) {\n            this.sunk = true;\n        }\n        return this.sunk\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;