const books = require('./booksList');
const shift = require('./shift');

function insertionSort(list) {
    for (let current = 0; current < list.length; current++) {
        let analysis = current;
        while (
            analysis > 0 &&
            list[analysis].price < list[analysis - 1].price
        ) {
            shift(list, analysis);
            analysis--;
        }
    }

    console.log(list);
}

insertionSort(books);
