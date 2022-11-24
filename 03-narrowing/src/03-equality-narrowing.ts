function example(x: string | number, y: string | boolean) {
  if(x === y){
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x);
    console.log(y);
  }
}

interface Container {
  value: number | null | undefined
}

function multiplyValue(container: Container, factor: number) {
  if(container.value != null){
    console.log(container.value);
    container.value *= factor
  }
}

multiplyValue({value: 8},5)
multiplyValue({value: null},5)
multiplyValue({value: undefined},5)