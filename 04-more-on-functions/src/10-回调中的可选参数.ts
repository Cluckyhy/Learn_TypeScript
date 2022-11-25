/* 
  一定要记住，当为回调写一个函数类型时，永远不要写可选参数，除非你打算在不传递参数的情况下调用函数
  像下面的例子就是，index是可选参数，后面可能会引发一些问题。
*/
function myForEach(arr: any[], cb: (arg: any, index?: number) => void) {
  for(let i = 0; i < arr.length; i++){
    // cb(arr[i], i)
    cb(arr[i])
  }
}

myForEach([1,2,3], (a) => console.log(a))
myForEach([1,4,3], (a,i) => console.log(a, i))

myForEach([1,23,54], (a,i) => {
  // i.toFixed() 报错
})