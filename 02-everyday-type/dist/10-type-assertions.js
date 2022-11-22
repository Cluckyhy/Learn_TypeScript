"use strict";
/*
  有两种类型断言的方式，下面两种语法是等价的，都可以完成断言语法的定义
  typeScript只允许类型断言，转化为更具体或不太具体的类型版本

  类型断言在我们编写ts的时候非常有用，它可以实现在我们不知道某个变量是什么类型的情况下，我们可以把它断言为一个差不多的类型
  而不是使用any，这样就失去了使用ts的意义
*/
const myCanvas = document.getElementById('main_canvas');
const myCanvas2 = document.getElementById('main_canvas');
const x = 'hello';
