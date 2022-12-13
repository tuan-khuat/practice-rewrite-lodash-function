import * as _ from 'lodash';
import { forEach } from 'lodash';

const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
];

// // console.log(
//     _.findIndex(users, function (o) {
//         return o.user == 'barney';
//     })
// );

const _findIndex = <T>(array: T[], searchCondition?: T | any) => {
    if (typeof searchCondition === 'object') {
        const newArr = [...array];
        const result = newArr.map((item) => {
            if (JSON.stringify(item) === JSON.stringify(searchCondition)) {
                return true;
            }
            return false;
        });
        return result.indexOf(true);
    }

    if (typeof searchCondition === 'function') {
        const result: boolean[] = [];
        const newArr = new Set(array);
        newArr.forEach((item) => result.push(searchCondition(item)));
        return result.indexOf(true);
    }

    if (typeof searchCondition === 'string') {
        const newArr: {}[] = [...array];
        const result: boolean[] = [];
        newArr.map((item) =>
            result.push(!!item[searchCondition as keyof typeof item])
        );
        return result.indexOf(true);
    }
};

console.log(_findIndex(users, { user: 'barney', active: false }));
console.log(
    _findIndex(users, function (o: { user: string }) {
        return o.user === 'fred';
    })
);
console.log(_findIndex(users, 'active'));
