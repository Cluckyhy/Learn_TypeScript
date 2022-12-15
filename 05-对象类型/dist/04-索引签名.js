"use strict";
const myArray = ['a', 'b'];
const secondItem = myArray[1];
console.log(secondItem);
let testString = {
    x: 100,
    y: 200,
    aa: 300
};
const testSecondItem = testString['y'];
console.log(testSecondItem);
let notOkay = {
    x: 100,
    length: 100,
    name: 'chy',
    // 可以有多，但是不能缺少上面接口中的属性
    haha: 999
};
console.log(notOkay.haha);
let myArray2 = ['a', 'b'];
// myArray2[0] = 'chy'  // 报错
