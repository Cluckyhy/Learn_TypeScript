"use strict";
function printCoord(pt) {
    console.log('坐标的x值为：' + pt.x);
    console.log('坐标的y值为：' + pt.y);
}
printCoord({
    x: 3,
    y: 6
});
function printName(obj) {
    var _a;
    // return '你的名字为：' + obj.first + obj.last
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({
    first: 'Chen'
});
printName({
    first: 'Chen',
    last: 'huiyi'
});
