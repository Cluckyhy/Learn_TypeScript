function longest<T extends {length: number}>(a: T, b: T) {
  if(a.length >= b.length){
    return a
  }else{
    return b
  }
}

const longerArray = longest([1,2,3],[21,23,54,3,22,0])
console.log(longerArray);
const longerString = longest('chy','lulu')
console.log(longerString);
// const notOk = longest(10,100)