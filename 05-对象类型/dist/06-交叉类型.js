"use strict";
const ccc = {
    color: 'red',
    radius: 100
};
// 通过匿名方式来定义一个交叉类型
function draw(circle) {
    console.log(circle.color);
    console.log(circle.radius);
}
draw({
    color: 'green',
    radius: 200
});
