"use strict";
const f1 = () => {
    return 100;
};
const f2 = () => true;
const f3 = function () {
    return 'hello';
};
// const v1: boolean = f1()  // 报错
const v1 = f1();
const v2 = f2();
const v3 = f3();
// 但是值是可以取到的
console.log(v1); //  00
console.log(v2); //  true
console.log(v3); //  hello
// 字面量定义一个函数的时候，返回值为void，就不能返回其他类型
function f4() {
    // return true  // 报错
}
const f5 = function () {
    // return false  // 报错
};
