"use strict";
function doSomething(obj) {
    console.log(obj.prop);
    // obj.prop = 'hello'  // 报错
}
function visiForBirthday(home) {
    console.log(home.resident.name);
    home.resident.age = 30;
}
function evict(home) {
    // home.resident = {  // 报错
    //   name: 'chy',
    //   age: 19
    // }
}
let writablePerson = {
    name: 'chy',
    age: 19
};
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
