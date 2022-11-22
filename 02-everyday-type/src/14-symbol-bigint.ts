// 两种定义BigInt数的方式
const oneHundred: bigint = BigInt(100)
const anotherHundred: bigint = 100n

const firstName = Symbol("name")
const secondName = Symbol("name")
// if(firstName === secondName){
//   console.log('ok');
// }