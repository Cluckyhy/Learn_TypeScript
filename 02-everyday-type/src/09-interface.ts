interface Point1 {
  x: number
  y: number
}

function printCoord3(pt: Point1) {
  
}

printCoord3({
  x: 100,
  y: 200
})

// 扩展接口
// interface Animal {
//   name: string
// }
// interface Bear extends Animal {
//   honey: boolean
// }
// const bear: Bear = {
//   name: 'winle',
//   honey: true
// }

// console.log(bear.name);
// console.log(bear.honey);

// type Animal = {
//   name: string
// }
// type Bear = Animal & {
//   honey: boolean
// }
// const bear: Bear = {
//   name: 'winle',
//   honey: true
// }

// 向现有的类型添加字段
// interface myWindow {
//   count: number
// }
// interface myWindow {
//   title: string
// }
// const w: myWindow = {
//   title: 'hello',
//   count: 100
// }

// 类型创建后是不能更改的，不能像上面接口那样
type myWindow = {
  title: string
}
// type myWindow = {  // 报错
//   count: number
// }
