const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
console.log(`The circumference of a circle of radius 4 is ${circle.circumference(4)}`);

const Square = require('./square.js');
const square = new Square(2);
console.log(`The area of a square with width 2 is ${square.area()}`);
console.log(`The perimeter of a square with width 2 is ${square.perimeter()}`);

const missingModule = require('./missingModule');
console.log('missingModule', missingModule);