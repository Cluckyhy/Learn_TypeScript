"use strict";
function example() {
    let x;
    x = Math.random() < 0.5;
    // let x: boolean
    console.log(x);
    if (Math.random() < 0.5) {
        x = 'hello';
        // x: string
        console.log(x);
    }
    else {
        x = 100;
        // x: number
        console.log(x);
    }
    return x;
}
let x07 = example();
x07 = 100;
x07 = 'lulu';
// x07 = false  报错。因为上面的if判断，将上面的类型覆盖掉了
