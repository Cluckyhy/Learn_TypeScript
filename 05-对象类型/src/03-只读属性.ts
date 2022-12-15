interface SomeType {
  readonly prop: string
}

function doSomething(obj: SomeType) {
  console.log(obj.prop);
  // obj.prop = 'hello'  // 报错
}

interface Home {
  readonly resident: {
    name: string
    age: number
  }
}

function visiForBirthday(home: Home) {
  console.log(home.resident.name);
  home.resident.age = 30
}

function evict(home: Home) {
  // home.resident = {  // 报错
  //   name: 'chy',
  //   age: 19
  // }
}

interface Person {
  name: string
  age: number
}

interface ReadOnlyPerson {
  readonly name: string
  readonly age: number
}

let writablePerson: Person = {
  name: 'chy',
  age: 19
}

let readonlyPerson: ReadOnlyPerson = writablePerson

console.log(readonlyPerson.age);
writablePerson.age++
console.log(readonlyPerson.age);