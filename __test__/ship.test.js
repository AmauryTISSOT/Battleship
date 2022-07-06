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
    })
})