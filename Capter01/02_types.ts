//也可以直接使用字面量进行类型的声明

let a2: 10;

let a3: string;

//可以使用 | 来接连多个类型(联合类型)
let b1: "male" | "female";

// b1 = "hello";  报错

let c1: boolean | string;

c1 = "lala";
c1 = true;

//any 表示的是任意类型，一个变量设置类型为any相当于对该变量关闭了TS的类型检测
//使用TS时，不建议使用any类型
let d1: any;
d1 = 10;
d1 = "hello";
d1 = false;

//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
let ddd;

//unkonwn :表示未知类型的值
let e: unknown;
e = 10;
e = false;
e = "hello";

let s: string;

//d 的类型是any，它可以赋值给任意变量
s = d1;

e = "hello";

//unknown 实际上就是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
// s = e;   //报错

if (typeof e === "string") {
  s = e;
}

//类型断言，可以用来告诉解析器变量的实际类型

/**
 * 语法：
 *    变量 as 类型
 *    <类型>变量
 */
s = e as string;
s = <string>e;

function fn(): number {
  return 12;
}

function fn2(num) {
  if (num > 0) {
    return false;
  } else {
    return 123;
  }
}

//void 用来表示空，以函数为例，就表示没有返回值的函数
function fn3(): void {
  // return 123; 报错
  return;
}

//never 表示永远不会返回结果，它是用来报错的
function fn4(): never {
  throw new Error('报错了')
  // return;  //报错
}
