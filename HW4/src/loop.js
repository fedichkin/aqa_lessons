for (let index1 = 0; index1 < 10; index1++) {
    console.log(index1);
}

console.log('/----------------------------------------/');

let index2 = 0;

while (index2 < 10) {
    console.log(index2);
    index2++;
}

console.log('/----------------------------------------/');

let index3 = 0;

do {
    console.log(index3);
    index3++;
} while (index3 < 10);

console.log('/----------------------------------------/');

for (let index4 = 100; index4 >= 0; index4 -= 10) {
    console.log(index4);
}

console.log('/-----------------------------------------');

let index5 = 100;

while (index5 >= 0) {
    console.log(index5);
    index5 -= 10;
}

console.log('/-----------------------------------------');

let index6 = 100;

do {
    console.log(index6);
    index6 -= 10;
} while (index6 >= 0);
