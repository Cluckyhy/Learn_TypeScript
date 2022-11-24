"use strict";
// class Ctor {
//   s: string
//   constructor(s: string){
//     this.s = s
//   }
// }
// 分别使用了调用签名和构造签名两种方法去定义了一个类型
function fn(date) {
    let d = new date('2022-2-02');
    let n = date(100);
}
