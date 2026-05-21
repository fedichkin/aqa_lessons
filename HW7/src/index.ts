import { addElements } from './functions';
import { addElementsArrow } from './arrow-functions';

const numArr = [1, 2, 3, 4, 5];
const strArr = ['a', 'b', 'c', 'd'];

console.log('--------------addElements function--------------------');

console.log(addElements(numArr));
console.log(addElements(strArr));

console.log('--------------addElementsArrow function--------------------');

console.log(addElementsArrow(numArr));
console.log(addElementsArrow(strArr));
