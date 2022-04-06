// importing books list
const books = require('./booksList');
const lowerValue = require('./forestBookstore_lower');

books.forEach((_, index) => {
    let lowerPrice = lowerValue(books, index);

    let currentBook = books[index];
    let lowerPriceBook = books[lowerPrice];

    books[index] = lowerPriceBook;
    books[lowerPrice] = currentBook;
});

console.log(books);
