// importing books list
const books = require('./booksList');
const lowerValue = require('./forestBookstore_lower');

for (let currentCounter = 0; currentCounter < books.length; currentCounter++) {
    let lowerPrice = lowerValue(books, currentCounter);

    let currentBook = books[currentCounter];
    console.log('The current book is ', books[currentCounter]);
    let lowerPriceBook = books[lowerPrice];
    console.log('The book that has the lower price is ', books[lowerPrice]);

    books[currentCounter] = lowerPriceBook;
    books[lowerPrice] = currentBook;
}

console.log(books);
