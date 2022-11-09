import { map as lodashMap } from "lodash";

function map<T, U>(arr: T[], callback: (item: T) => U) {
  const result: U[] = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const x = map([1, 2, 3], (num) => num * 2);
const y = lodashMap([1, 2, 3], (num) => num * 2);
const z = map(["a", "b", "c"], (c) => c.toUpperCase());
