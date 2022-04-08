// importing books list
const { list01, list02 } = require('./booksLists');

function joinLists(list01, list02) {
    let finalList = [];

    let currentPositionList01 = 0; // index of the list 01
    let currentPositionList02 = 0; // index of the list 02

    let current = 0; // index of the list final

    while (
        currentPositionList01 < list01.length &&
        currentPositionList02 < list02.length
    ) {
        let currentProductList01 = list01[currentPositionList01];
        let currentProductList02 = list02[currentPositionList02];

        if (currentProductList01.price < currentProductList02.price) {
            finalList[current] = currentProductList01;
            currentPositionList01++;
        } else {
            finalList[current] = currentProductList02;
            currentPositionList02++;
        }
        current++;
    }

    while (currentPositionList01 < list01.length) {
        finalList[current] = list01[currentPositionList01];
        currentPositionList01++;
        current++;
    }

    while (currentPositionList02 < list02.length) {
        finalList[current] = list02[currentPositionList02];
        currentPositionList02++;
        current++;
    }

    return finalList;
}

console.log(joinLists(list01, list02));
