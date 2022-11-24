// class Ctor {
//   s: string
//   constructor(s: string){
//     this.s = s
//   }
// }

// type SomeConstructor = {
//   new (s: string): Ctor
// }

// function fn(ctor: SomeConstructor) {
//   return new ctor('hello')
// }

// const f = fn(Ctor)
// console.log(f.s);

interface CallOrConstructor {
  new (s: string): Date
  (n?: number): number
}

// 分别使用了调用签名和构造签名两种方法去定义了一个类型
function fn(date: CallOrConstructor) {
  let d = new date('2022-2-02')
  let n = date(100)
}