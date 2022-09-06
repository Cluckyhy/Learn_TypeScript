//object 表示一个对象
let a: object;

a = {};
a = function () {};

//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后面加上？，表示属性是可选的
let b: { name: string; age?: number };

b = { name: "露露" };

//[propName: string]: any 表示任意类型的属性
let c: { name: string; [propName: string]: any };
c = { name: "chy", age: 10 };

// let d: Function;
/*
设置函数结构的类型声明：
    语法：(形参：类型，形参：类型....)=>返回值类型
*/
let d: (a: number, b: number) => number;

d = function (n1, n2): number {
  return n1 + n2;
};

/*
数组的类型声明：
    类型[]
    Array<类型>
*/

// string[] 表示的是字符串数组
let e: string[];
// e = ["43", "d", 2];

let f: number[];

let g: Array<number>;
// g = ["21", 12];

let h: Array<any>;

/*
  元组，元组就是固定长度的数组
    语法：[类型，类型，类型...]
*/

let i: [string, number];
i = ["hell", 11];

/*
  enum 枚举

*/

//定义枚举
enum Gender {
  Male = 0,
  Female = 1,
}
let k: { name: string; gender: Gender };
k = {
  name: "lulu",
  gender: Gender.Male,
};

console.log(k.gender === Gender.Male);

//& 表示同时
let j: { name: string } & { age: number };
j = { name: "chy", age: 10 };

//类型的别名
type myType = string | number | boolean;
let q: myType;

q = 12;
q = false;
q = "hello";
// q = {};
