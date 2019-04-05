import circle, { area } from './circle.js';
import Square from './square.js';


console.log(`The area of a circle of radius 4 is ${area(4)}`);
console.log(`The circumference of a circle of radius 4 is ${circle.circumference(4)}`);

const square = new Square(2);
console.log(`The area of a square with width 2 is ${square.area()}`);
console.log(`The perimeter of a square with width 2 is ${square.perimeter()}`);