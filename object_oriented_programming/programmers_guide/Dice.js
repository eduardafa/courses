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
        // randNumber must be defined as a variable, and not as a constant, because it can change during the process
        // this definition avoids errors (e.g. infinite loop)
        let randNumber = Math.round(Math.random() * this.numFaces);
        if (randNumber != 0) {
            console.log(randNumber);
        } else {
            while (randNumber === 0) {
                randNumber = Math.round(Math.random() * this.numFaces);
            }
            console.log(randNumber);
        }
    }
}

let dice = new Dice(3);

dice.RollDices();
