interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

interface Sanjiao {
  kind: 'sanjiao'
  sideLength: number
}

type Shape = Circle | Square | Sanjiao

function getArea(shape: Shape) {
  switch(shape.kind){
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
    default:
      // const _exhaustiveCheck: never = shape  // 报错，具有穷尽检查
      // return _exhaustiveCheck
  }
}