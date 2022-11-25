"use strict";
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
// f()  // 必须传入参数
f(123.45);
function f2(n = 100) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
f2(123.45);
f2();
