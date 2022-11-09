// _.concat(array, [values]);

// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);

// console.log(other);
// // => [1, 2, 3, [4]]

// console.log(array);
// // => [1]

const _concat = (
    ...array: Array<string | number | string[] | number[] | [number[]]>
) => {
    let newArr = [];
    for (let item of array) {
        typeof item != 'number' ? newArr.push(item[0]) : newArr.push(item);
    }
    return newArr;
};

var array: Array<number> = [1];
console.log(_concat(array, 2, [3], [[4]]));
console.log(_concat(array, 2, [[3]], [[4]]));
console.log(_concat(array, 2, [3], [[4]]));
