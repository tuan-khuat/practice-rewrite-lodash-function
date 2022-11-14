var objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
];

// _.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual);
// // => [{ 'x': 2, 'y': 1 }]

import { difference } from 'lodash';
import _ = require('lodash');
import { ContextExclusionPlugin } from 'webpack';

const _differenceWith = <T>(
    inspectArr: T[],
    excludeArray: T[],
    comparator: (inspectItem: T, excludeItem: T) => boolean
) => {
    const set = new Set(excludeArray)
    const result:T[] = [];
    for (const inspectItem of inspectArr) {
        set.forEach((item)=> !comparator(item,inspectItem)&& result.push(inspectItem))
    }
    return result;
};

console.log(_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual));
console.log(_differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual));

// console.log(_.isEqual({ x: 1, y: 2 }, { x: 1, y: 2 }));

// const set1 = new Set(objects);
// console.log(set1);

