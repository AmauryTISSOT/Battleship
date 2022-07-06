const GameBoard = require('../gameboard');


describe('GameBoard test', () => {
    let game;
    beforeAll(() => {
        game = new GameBoard;
    });

    test('Check if the game board grid is 10 by 10', () => {
        expect(game.board.length).toBe(10)
    });

    test('Check if placeShip method work', () => {
        expect(game.placeShip(0,0,4,false)).toStrictEqual([[0,0],[0,1],[0,2],[0,3]])
    });

    test('Check if placeShip method work if rotation = true', () => {
        expect(game.placeShip(1,1,2,true)).toStrictEqual([[0,0],[0,1],[0,2],[0,3],[1,1],[2,1]])
    });

    test('If the coordinate are already taken, return Error', () => {
        expect(game.placeShip(1,1,2,true)).toBe('Error, place already taken')
    });

    test('Check for game board borden', () => {
        expect(game.placeShip(9,9,4,false)).toBe('Error, game board border collision')
    });

    test('Check if the receiveAttack method return coordinates', () => {
        expect(game.receiveAttack(4,3)).toStrictEqual([4,3]);
    });
    test('Check if the receiveAttack method change the board.isShot = true', () => {
        expect(game.board[4][3].isShot).toBeTruthy();
    });
    test('receiveAttack method should return a error if the hitting position as already been shoot', () => {
        expect(game.receiveAttack(4,3)).toBe('Error, position already shot')
    })
});