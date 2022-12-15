/* 
总结：
  如果我们要定义一个类型的合并，就通过interface接口的方式
  如果我们需要避免这个类型的同名冲突的话，就需要使用type类型别名的方式，来定义不同的类型
*/


// // 来看看接口扩展
// // 主要区别在于两者如何处理冲突
// interface Sister {
//   name: string
// }

// // 这两个同名的接口，定义了两个不同的属性，会怎么处理呢？
// // 1、覆盖处理？？
// // 2、合并？？
// interface Sister {
//   age: number
// }

// // 以下就证明了，上面的答案是： 合并
// const sister1: Sister = {
//   name: 'chy',
//   age: 20
// }

// 来看看类型别名
type Sister = {
  name: string
}

// 以下代码报错，就可以发现，我们不可以通过类型别名的方式来定义同名的类型的
// type Sister = {

// }