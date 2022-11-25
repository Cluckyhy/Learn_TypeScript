function firstElement2<T extends any[]>(arr: T) {
  return arr[0]
}
/* 
  1.可能的情况下，使用类型参数本身，而不是对其进行约束
*/
function firstElement1<T>(arr: T[]) {
  return arr[0]
}

const a = firstElement1([1,2,4])
const b = firstElement2([1,2,3])

function filter2<T, Func extends (arg: T) => boolean>(
  arr: T[],
  func: Func
) {
  return arr.filter(func)
}

/* 
  2.总是尽可能少地使用类型参数
*/
function filter1<T>(arr: T[], func: (arg: T) => boolean) {
  return arr.filter(func)
}



function greet1<Str extends string>(s: Str) {
  console.log('hello' + s);
}

greet1('world')
/* 
  3.如果一个类型的参数只出现在一个地方，请重新考虑你是否真的需要它
*/
function greet2(s: string) {
  console.log('hello' + s);
}