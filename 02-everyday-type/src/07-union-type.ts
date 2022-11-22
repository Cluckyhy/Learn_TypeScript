function printId(id: number | string) {
  console.log('Your ID is' + id);
  // console.log(id.toUpperCase());  报错
  if(typeof id === 'string'){
    console.log(id.toUpperCase());
  }else{
    console.log(id);
  }
}

printId('3423')
printId(12)


function welcomePeople(x: string[] | string) {
  if(Array.isArray(x)){
    console.log('Hello,'+x.join('and'));
  }else{
    console.log('Welcome lone traveler' + x);
  }
}

welcomePeople(['chy','lulu'])
welcomePeople('A')


function getFirstThree(x: string | number[]) {
  return x.slice(0,3)
}

console.log(getFirstThree('abdsfds'));
console.log(getFirstThree([12,43,43,11,9]));