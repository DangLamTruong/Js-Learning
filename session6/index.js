var arrayTest = ['maria', 'melody', 'mask', 'eimi', 'fukada', 'haiten'];

// const result = arrayTest.pop();
// console.log('result:', result);
// console.log(arrayTest);

// arrayTest.push('Ozawa');
// console.log(arrayTest);

// const resultB = arrayTest.shift();
// console.log('resultB:', resultB);
// console.log(arrayTest);

// arrayTest.unshift('soony');
// console.log(arrayTest);

// arrayTest.reduce((accmulateItems, currentItem) => {
//     return accmulateItems.concat([`${currentItem} is actor`]);
// }, []);

const a4 = arrayTest.slice(0, 4);
console.log('a4: ', a4);
console.log(arrayTest);

const a5 = arrayTest.splice(2, 2, 100);
console.log('a5: ', a5);
console.log(arrayTest);

const a6 = arrayTest.sort();
console.log('a6: ', a6);


const t = [4, 2, 5, 1, 3];

console.log('t:', t);
t.sort((a, b) => {
    console.log('a, b', { a, b });
    return a - b;
});




