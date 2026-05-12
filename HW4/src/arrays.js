const strArray = ['a', 'b', 'c', 'd', 'e', 'f'];
const numArray = [1, 2, 3, 4, 5];
const boolArray = [false, false, true, false, false];
const anyArray = ['a', 6, 'b', true, 'c', 8, false, 'd'];

console.log('/-----------------forEach-----------------------/');

strArray.forEach((item) => console.log('forEach str:', item));
numArray.forEach((item) => console.log('forEach num:', item));
boolArray.forEach((item) => console.log('forEach bool:', item));
anyArray.forEach((item) => console.log('forEach any:', item));

console.log('/-----------------map-----------------------/');

const strMapped = strArray.map((item) => item.toUpperCase());
const numMapped = numArray.map((item) => item * 2);
const boolMapped = boolArray.map((item) => !item);
const anyMapped = anyArray.map((item) => String(item));

console.log('map str (uppercase):', strMapped);
console.log('map num (*2):', numMapped);
console.log('map bool (not):', boolMapped);
console.log('map any (to string):', anyMapped);

console.log('/-----------------reduce-----------------------/');

const strReduced = strArray.reduce((acc, item) => acc + item, '');
const numReduced = numArray.reduce((acc, item) => acc + item, 0);
const boolReduced = boolArray.reduce((acc, item) => acc || item, false);
const anyReduced = anyArray.reduce((acc, item) => acc + String(item), '');

console.log('reduce str (concat):', strReduced);
console.log('reduce num (sum):', numReduced);
console.log('reduce bool (or):', boolReduced);
console.log('reduce any (to string nd concat):', anyReduced);

console.log('/-----------------sort-----------------------/');

const strSorted = [...strArray].sort();
const numSorted = [...numArray].sort((a, b) => b - a);
const boolSorted = [...boolArray].sort();
const anySorted = [...anyArray].sort((a, b) => String(a).localeCompare(String(b)));

console.log('sort str (asc):', strSorted);
console.log('sort num (desc):', numSorted);
console.log('sort bool (asc):', boolSorted);
console.log('sort any (asc like string):', anySorted);

console.log('/-----------------filter-----------------------/');

const strFiltered = strArray.filter((item) => item > 'b');
const numFiltered = numArray.filter((item) => item > 2);
const boolFiltered = boolArray.filter((item) => item === true);
const anyFiltered = anyArray.filter((item) => typeof item === 'string');

console.log('filter str (more than "b"):', strFiltered);
console.log('filter num (more than 2):', numFiltered);
console.log('filter bool (=== true):', boolFiltered);
console.log('filter any (with type string):', anyFiltered);

console.log('/-----------------find-----------------------/');

const strFound = strArray.find((item) => item === 'c');
const numFound = numArray.find((item) => item > 3);
const boolFound = boolArray.find((item) => item === false);
const anyFound = anyArray.find((item) => typeof item === 'number');

console.log('find str (=== "c"):', strFound);
console.log('find num (> 3):', numFound);
console.log('find bool (=== false):', boolFound);
console.log('find any (with type number):', anyFound);

console.log('/-----------------indexOf-----------------------/');

const strIndex = strArray.indexOf('d');
const numIndex = numArray.indexOf(3);
const boolIndex = boolArray.indexOf(true);
const anyIndex = anyArray.indexOf(true);

console.log('indexOf str (index of "d"):', strIndex);
console.log('indexOf num (index of 3):', numIndex);
console.log('indexOf bool (index of true):', boolIndex);
console.log('indexOf any (index of true):', anyIndex);

console.log('/-----------------concat-----------------------/');

const strConcat = strArray.concat(['g', 'h']);
const numConcat = numArray.concat([6, 7]);
const boolConcat = boolArray.concat([true, true]);
const anyConcat = anyArray.concat([42, 'z']);

console.log('concat str:', strConcat);
console.log('concat num:', numConcat);
console.log('concat bool:', boolConcat);
console.log('concat any:', anyConcat);

console.log('/-----------------groupBy-----------------------/');

const strGrouped = Object.groupBy(strArray, (item) => (item <= 'c' ? 'first' : 'second'));
const numGrouped = Object.groupBy(numArray, (item) => (item % 2 === 0 ? 'even' : 'odd'));
const boolGrouped = Object.groupBy(boolArray, (item) => String(item));
const anyGrouped = Object.groupBy(anyArray, (item) => typeof item);

console.log('groupBy str (by groups more and less "c"):', strGrouped);
console.log('groupBy num (by odd and even numbers):', numGrouped);
console.log('groupBy bool (by true and false):', boolGrouped);
console.log('groupBy any (by type):', anyGrouped);
