/*
  文字类型
*/
let testString = 'Hello World';
testString = '江西财经大学';
const constantString = 'Hello World';
// constantString = 'xixi'
// 字符串文字类型
let xx = 'hello';
// xx = 'world'  // 报错
function printText(s, alignment) {
}
printText('hello', 'center');
// printText('hello','ccc')  // 报错
// 数字文字类型
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure({
    width: 100
});
configure('auto');
// configure('auto-haha')  // 报错
// 布尔文字类型
let bool1 = false;
let bool2 = true;
// let bool2: true = false  // 报错
const obj11 = {
    count: 0
};
obj.count = 1;
function handleRequest(url, method) {
}
// const req = {
//   url: 'https://www.baidu.com',
//   method: 'POST'
// }
// handleRequest(req.url, req.method) // 报错
// 第一种解决办法
// const req = {
//   url: 'https://www.baidu.com',
//   method: 'POST' as 'POST'
// }
// handleRequest(req.url, req.method as 'POST')
// 第二种解决办法
const req = {
    url: 'https://www.baidu.com',
    method: 'POST'
};
handleRequest(req.url, req.method);
