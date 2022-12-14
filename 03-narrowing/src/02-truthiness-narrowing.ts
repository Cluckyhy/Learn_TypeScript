function printAll(strs: string | string[] | null) {
  if(strs && typeof strs === 'object'){
    for (const s of strs) {
      console.log(s);
    }
  }else if(typeof strs === 'string'){
    console.log(strs);
  }else{

  }
}

function multiplyAll(
  value: number[] | undefined,
  factor: number
) {
  if(!value){
    return value
  }else{
    return value.map((x) => {
      return x * factor
    })
  }
}

console.log(multiplyAll([3,4],2));
console.log(multiplyAll(undefined,2));