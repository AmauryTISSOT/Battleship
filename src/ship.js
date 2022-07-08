class Ship {

    constructor(length) {
        this.length = this._lengthCreator(length),
        this.sunk = false,
        this.shipLocation = [];
    }

    _lengthCreator (length) {
        let shipLength = [];
        for (let i = 0; i < length; i++) {
            shipLength.push(1);
        }
        return shipLength
    }

    isSunk () {
       const lengthSum = this.length.reduce((sum, a) => sum + a, 0)
        if (lengthSum === 0) {
            this.sunk = true;
        }
        return this.sunk
    }
}

export default Ship;