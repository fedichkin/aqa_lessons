const num = 42;
const str = 'hello';
const boolTrue = true;
const boolFalse = false;
const nullVal = null;
const undefinedVal = undefined;
const zero = 0;

console.log('num == 42:', num == 42);
console.log('num === 42:', num === 42);
console.log('num == "42":', num == '42');
console.log('num === "42":', num === '42');
console.log('num != 0:', num != 0);
console.log('num !== 0:', num !== 0);
console.log('num > 10:', num > 10);
console.log('num < 10:', num < 10);
console.log('num >= 42:', num >= 42);
console.log('num <= 41:', num <= 41);

console.log('boolTrue && boolFalse:', boolTrue && boolFalse);
console.log('boolTrue || boolFalse:', boolTrue || boolFalse);
console.log('!boolTrue:', !boolTrue);
console.log('!boolFalse:', !boolFalse);
console.log('num > 0 && str.length > 0:', num > 0 && str.length > 0);
console.log('zero || boolTrue:', zero || boolTrue);
console.log('nullVal || undefinedVal || num:', nullVal || undefinedVal || num);

console.log('nullVal ?? num:', nullVal ?? num);
console.log('undefinedVal ?? str:', undefinedVal ?? str);
console.log('zero ?? num:', zero ?? num);
