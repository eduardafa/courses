// importing books list
const books = require('./booksList');

let cheaper = 0;

for (let currentCounter = 0; currentCounter < books.length; currentCounter++) {
    if (books[currentCounter].price < books[cheaper].price) {
        cheaper = currentCounter;
    }
}

console.log(
    `The cheaper book is ${books[cheaper].title} and it costs ${books[cheaper].price}.`
);
