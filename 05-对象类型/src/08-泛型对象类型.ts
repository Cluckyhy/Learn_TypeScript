// 1、使用any类型
// interface Box {
//   contents: any
// }

// let box: Box = {
//   contents: 'hello'
// }

// 2、使用unknown类型
// interface Box {
//   contents: unknown
// }

// let x: Box = {
//   contents: 'hello world'
// }

// if(typeof x.contents === 'string'){
//   console.log(x.contents.toLowerCase());
// }

// console.log((x.contents as string).toLowerCase());


// 3、使用函数的重载
// interface NumberBox {
//   contents: number
// }
// interface StringBox {
//   contents: string
// }
// interface BooleanBox {
//   contents: boolean
// }

// // 函数重载签名，只需要定义，不需要实现
// function setContents(box: StringBox, newContents: string): void
// function setContents(box: NumberBox, newContents: number): void
// function setContents(box: BooleanBox, newContents: boolean): void

// // 函数实现签名
// function setContents(box: {contents: string | number | boolean}, newContents: any) {
//   box.contents = newContents
// }


// 使用泛型对象类型的方式
// interface Box<T> {
//   contents: T
// }

// let boxA: Box<string> = {
//   contents: 'hello'
// }
// let boxB: Box<number> = {
//   contents: 100
// }

// interface Box<T> {
//   contents: T
// }

// interface Apple {
//   // ...
// }

// let a: Apple = {}

// type AppleBox = Box<Apple>
// let ab: AppleBox = {
//   contents: a
// }

type Box<T> = {
  contents: T
}

type OrNull<T> = T | null
type OneOrMany<T> = T | T[]
type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>
type OneOrManyOrNullOrString = OneOrManyOrNull<string>
