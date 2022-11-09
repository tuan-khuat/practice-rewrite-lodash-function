// import * as _ from 'lodash';

// console.log(_.difference([2, 3,4], [2, 1]));

const _difference = <T>(array: T[], conditionArray: T[]): T[] => {
    const newArr: T[] = [];
    for (let item of array) {
       !conditionArray.includes(item) && newArr.push(item)
    }
    return newArr;
};

console.log(_difference([2, 3, 4], [2, 1]));
console.log(_difference(['a', 'b', 'c'], ['a', 'c']));
console.log(_difference([2, 3, 4], [2, 1]));
console.log(_difference([2, 3, 4], [2, 1]));
