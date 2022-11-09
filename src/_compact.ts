// _.compact([0, 1, false, 2, '', 3]);
// // => [1, 2, 3]

const compact = (array: Array<string | number | boolean>) => {
    let newArr = [];
    for (let item of array) {
        item && newArr.push(item);
    }
    return newArr;
};

console.log(compact([0, 1, false, 2, '', 3]));
console.log(compact(['', 1, false, 2, '', 3]));
console.log(compact([0, 1, false, true, '', 3]));
