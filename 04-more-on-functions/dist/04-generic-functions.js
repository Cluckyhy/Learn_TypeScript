"use strict";
// function firstElement(arr: any[]) {
//   return arr[0]
// }
// firstElement(['a','b','c'])
// function firstElement<T>(arr: T[]): T | undefined {
//   return arr[0]
// }
// // firstElement<string>(['a','b','c'])
// firstElement<number>([1,2,454,23])
// firstElement<undefined>([])
function map(arr, fun) {
    return arr.map(fun);
}
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
