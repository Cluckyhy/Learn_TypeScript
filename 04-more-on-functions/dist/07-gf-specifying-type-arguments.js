"use strict";
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
const arr3 = combine([1, 2, 3], [2, 3, 5]);
// const arr4 = combine([1,2,3],['str'])
const arr5 = combine([1, 2, 3], ['str']);
console.log(arr5);
