// _.compact([0, 1, false, 2, '', 3]);
// // => [1, 2, 3]

const compact = (array: Array<string | number | boolean>) => {
    let newArr = [];
    for (let item of array) {
        item && newArr.push(item)
    }
    console.log(newArr);
};

compact([0, 1, false, 2, '', 3]);
compact(["", 1, false, 2, '', 3]);
compact([0, 1, false, true, '', 3]);
