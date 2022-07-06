const Ship = require("../ship")

describe('Ship factory test', () => {
    let shipTest;
    beforeAll( () => {
        shipTest = new Ship('test', 4);
    });

    test('Ship.length return length of the ship', () => {
        expect(shipTest.length).toStrictEqual([1,1,1,1])
    });
    test('Ship.name return the name of the ship', () => {
        expect(shipTest.name).toBe('test');
    });
    test('Ship.hit(2) should hit the second element of Ship.length array', () => {
        expect(shipTest.hit(2)).toEqual([1,1,0,1])
    });
})


describe('Sunk function test', () => {
    let shipTest;
    beforeEach( () => {
        shipTest = new Ship('test', 4);
        shipTest.hit(0)
        shipTest.hit(1)
        shipTest.hit(2)
        shipTest.hit(3)
    });
    test('Ship.sunk() should return true if all the ship location as been hit', () => {
        expect(shipTest.isSunk()).toBeTruthy();
    });
})