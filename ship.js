class Ship {

    constructor(name, length) {
        this.name = name,
        this.length = this._lengthCreator(length);
    }

    _lengthCreator (length) {
        let shipLength = [];
        for (let i = 0; i < length; i++) {
            shipLength.push(1);
        }
        return shipLength
    }
}

module.exports = Ship;