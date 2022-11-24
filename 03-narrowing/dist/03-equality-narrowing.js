"use strict";
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyValue({ value: 8 }, 5);
multiplyValue({ value: null }, 5);
multiplyValue({ value: undefined }, 5);
