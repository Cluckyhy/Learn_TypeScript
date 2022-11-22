let x12 = undefined;
let y12 = null;
// let z12: string = undefined
function doSomething(x) {
    if (x === null) {
        // 做一些事情
    }
    else {
        console.log('Hello,' + x.toUpperCase());
    }
}
function liveDangerousluy(x) {
    // 非空断言，断定x不会是空或undefined
    console.log(x.toFixed());
}
