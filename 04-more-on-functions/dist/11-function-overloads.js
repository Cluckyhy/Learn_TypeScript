"use strict";
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(1234567);
const d2 = makeDate(3, 5, 6);
// const d3 = makeDate(5,6)  // 报错
console.log(d1);
console.log(d2);
