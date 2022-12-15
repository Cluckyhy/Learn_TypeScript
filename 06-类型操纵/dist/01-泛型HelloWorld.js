"use strict";
// function identity(arg: number): number {
//   return arg
// }
// function identity(arg: any): any {
//   return arg
// }
function identity(arg) {
    return arg;
}
let output = identity('chy');
console.log(output);
// 参数类型推断
// let output = identity('chy')
// console.log(output);
