import iaAlgo from "../src/iaAlgo";


describe('Random ship algorithm test', () => {
    let ia;
    beforeAll(()=> {
        ia = new iaAlgo();
    });
    test.skip('Random ship algorithm should return a number', ()=> {
        expect(ia.randomShip()).toBe('number')
    })
})