//定义一个有类型的变量a

let a: number = 3;

let b: string = "hello TS";

//如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false;

// c = 12; //报错
c = true;

//JS中的函数是不考虑参数的类型和个数的
function sum(a: number, b: number): number {
  return a + b;
  // return a + "b";
}

sum(2, 4);

// sum(2, 4, 39, 39);

// sum("23", 23);
