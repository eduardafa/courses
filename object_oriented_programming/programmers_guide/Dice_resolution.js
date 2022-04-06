// casino system
// a lot of dice types
// roll the dices

class Dice {
    // instance
    constructor(numFaces) {
        // attribute
        this.numFaces = numFaces;
    }

    // method
    RollDices() {
        console.log(
            'The dice result is ' + this.GetRandomIntInclusive(1, this.numFaces)
        );
    }

    // generating a random number
    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let dice6 = new Dice(6);
let dice12 = new Dice(12);
let dice100 = new Dice(100);

dice6.RollDices();
dice12.RollDices();
dice100.RollDices();
