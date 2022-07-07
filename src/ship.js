class Ship {

    constructor(name, length) {
        this.name = name,
        this.length = this._lengthCreator(length),
        this.sunk = false
    }

    _lengthCreator (length) {
        let shipLength = [];
        for (let i = 0; i < length; i++) {
            shipLength.push(1);
        }
        return shipLength
    }

    hit (damageLocation) {
        this.length.splice(damageLocation,1,0)
        return this.length
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