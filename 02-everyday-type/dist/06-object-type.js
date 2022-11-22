function printCoord(pt) {
    console.log('坐标的x值为：' + pt.x);
    console.log('坐标的y值为：' + pt.y);
}
printCoord({
    x: 3,
    y: 6
});
function printName(obj) {
    // return '你的名字为：' + obj.first + obj.last
    console.log(obj.last?.toUpperCase());
}
printName({
    first: 'Chen'
});
printName({
    first: 'Chen',
    last: 'huiyi'
});
