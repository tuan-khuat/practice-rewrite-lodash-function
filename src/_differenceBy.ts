import { toUpper } from 'lodash';

const _differenceBy = <T>(
    inspectArray: T[],
    excludeArray: T[],
    iteratee: any
): T[] => {
    const result: T[] = [];
    for (const item of inspectArray) {
        const newExcludeArray = [];
        if (typeof iteratee === 'function') {
            for (const excludeItem of excludeArray) {
                newExcludeArray.push(iteratee(excludeItem));
            }
            !newExcludeArray.includes(iteratee(item)) && result.push(item);
        } else {
            for (const excludeItem of excludeArray) {
                newExcludeArray.push(excludeItem[iteratee as keyof Object]);
            }
            if (!newExcludeArray.includes(item[iteratee as keyof Object])) {
                result.push(item);
            }
        }
    }
    return result;
};

console.log(
    _differenceBy([{ x: 2 }, { x: 4 }, { x: 3 }], [{ x: 1 }, { x: 2 }], 'x')
);
console.log(_differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_differenceBy(['a', 'b', 'e', 'c'], ['b', 'c', 'a'], toUpper));
