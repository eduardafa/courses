// importing modules
let addFunc = require('./add.js');
let subFunc = require('./sub.js');
let multiFunc = require('./multi.js');
let divFunc = require('./div.js');
let calculator = require('./calculator.js');

// results
console.log(addFunc(4, 2));
console.log(subFunc(5, 1));
console.log(multiFunc(7, 9));
console.log(divFunc(14, 7));
// the same results
console.log(calculator.add(4, 2));
console.log(calculator.sub(5, 1));
console.log(calculator.multi(7, 9));
console.log(calculator.div(14, 7));
