interface StringArray {
  [index: number]: string
}

const myArray: StringArray = ['a', 'b']
const secondItem = myArray[1]
console.log(secondItem);

interface TestString {
  [prop: string]: number
}

let testString: TestString = {
  x: 100,
  y: 200,
  aa: 300
}
const testSecondItem = testString['y']
console.log(testSecondItem);

interface Animal {
  name: string
}

interface Dog extends Animal {
  breed: string
}

interface NotOkay {
  [index: string]: number | string
  length: number
  name: string
}

let notOkay: NotOkay = {
  x: 100,
  length: 100,
  name: 'chy',
  // 可以有多，但是不能缺少上面接口中的属性
  haha: 999
}

console.log(notOkay.haha);


interface ReadOnlyStringArray {
  readonly [index: number]: string
}

let myArray2: ReadOnlyStringArray = ['a','b']
// myArray2[0] = 'chy'  // 报错

