// import { dropWhile } from 'lodash';
// import _ = require('lodash');

// var users = [
//     { user: 'barney', active: false },
//     { user: 'fred', active: false },
//     { user: 'pebbles', active: true },
// ];

// console.log(
//     _.dropWhile(users, function (o: any) {
//         return !o.active;
//     })
// );
// // => objects for ['pebbles']

// // The `_.matches` iteratee shorthand.
// console.log(_.dropWhile(users, { user: 'barney', active: false }));
// // => objects for ['fred', 'pebbles']

// // The `_.matchesProperty` iteratee shorthand.
// console.log(_.dropWhile(users, ['active', false]));
// // => objects for ['pebbles']

// // The `_.property` iteratee shorthand.
// console.log(_.dropWhile(users, 'active'));
// // => objects for ['barney', 'fred', 'pebbles']

// // let set1 = new Set(users);

// // console.log(set1.forEach((item) => item === { user: 'barney', active: false }));
