// importing books list
const books = require('./booksLists');
// const lowerValue = require('./forestBookstore_lower');

// final list
let list;



for (let current = 0; current < books.length; current++) {
    let current1 = books.list1[current];
    let current2 = books.list2[current]

    let lowerPrice = lowerValue(books, current);

    let currentBook = books[current];
    console.log('The current book is ', books[current]);
    let lowerPriceBook = books[lowerPrice];
    console.log('The book that has the lower price is ', books[lowerPrice]);

    // changing positions
    books[current] = lowerPriceBook;
    books[lowerPrice] = currentBook;
}

console.log(books);
