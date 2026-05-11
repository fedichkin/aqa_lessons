import { addElements } from './functions.js';
import { addElementsArrow } from './arrow-functions.js';
import { product } from './getter-setters.js';

const numArr = [1, 2, 3, 4, 5];
const strArr = ['a', 'b', 'c', 'd'];

console.log('--------------addElements function--------------------');

console.log(addElements(numArr));
console.log(addElements(strArr));

console.log('--------------addElementsArrow function--------------------');

console.log(addElementsArrow(numArr));
console.log(addElementsArrow(strArr));

console.log('--------------Set and Get information about Product--------------------');

console.log('---------Init value----------');
console.log(product.getSummary());

product.name = 'Gaming Laptop';
product.price = 1500;
product.category.name = 'Gaming';
product.category.discount = 0.15;

console.log('---------Value after changes----------');
console.log(product.getSummary());
