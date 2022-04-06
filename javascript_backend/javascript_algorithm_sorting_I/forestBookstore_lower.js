// importing arrBooks list
// const arrBooks = require('./booksList');

function lowerValue(arrBooks, initialPosition) {
    let cheaper = initialPosition;

    for (
        let currentPosition = initialPosition;
        currentPosition < arrBooks.length;
        currentPosition++
    ) {
        if (arrBooks[currentPosition].price < arrBooks[cheaper].price) {
            cheaper = currentPosition;
        }
    }
    return cheaper;
}

module.exports = lowerValue;
