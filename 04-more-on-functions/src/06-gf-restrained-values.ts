function minimumLength<T extends {length: number}>(
  obj: T,
  minimum: number
// ): T {
) {
  if(obj.length >= minimum){
    return obj
  }else{
    // return {length: minimum}
  }
}

const arr = minimumLength([1,2,3],5)
// console.log(arr.slice(0));    // 如果返回的是一个对象，就会报错，说slice不是一个function，因为对象中是没有slice方法