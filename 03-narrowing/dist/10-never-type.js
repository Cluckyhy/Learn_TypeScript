"use strict";
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
        // const _exhaustiveCheck: never = shape  // 报错，具有穷尽检查
        // return _exhaustiveCheck
    }
}
