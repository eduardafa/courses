// disordered list
const priceBooks = [25, 15, 30, 50, 45, 20];

let currentCounter = 0;
let cheaper = 0;

for (currentCounter; currentCounter < priceBooks.length; currentCounter++) {
    if (priceBooks[currentCounter] < priceBooks[cheaper]) {
        cheaper = currentCounter;
    }
}

console.log(`The cheaper book costs ${priceBooks[cheaper]}`);
