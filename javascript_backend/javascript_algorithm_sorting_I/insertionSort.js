const books = require('./booksList');

function insertionSort(list) {
    for (let current = 0; current < list.length; current++) {
        let analysis = current;
        while (
            analysis > 0 &&
            list[analysis].price < list[analysis - 1].price
        ) {
            let analysisItem = list[analysis];
            let previousItem = list[analysis - 1];

            // changing positions
            list[analysis] = previousItem;
            list[analysis - 1] = analysisItem;

            analysis--;
        }
    }

    console.log(list);
}

insertionSort(books);
