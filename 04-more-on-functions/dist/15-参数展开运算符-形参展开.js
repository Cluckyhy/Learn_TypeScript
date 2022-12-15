"use strict";
// 注意...m的类型，一定是个数组类型
function multiply(n, ...m) {
    return m.map((x) => { return (n * x); });
}
const mulNum = multiply(10, 1, 2, 3, 54);
console.log(mulNum);
