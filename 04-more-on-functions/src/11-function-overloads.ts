function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if(d !== undefined && y !== undefined){
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}

const d1 = makeDate(1234567)
const d2 = makeDate(3, 5, 6)
// const d3 = makeDate(5,6)  // 报错

console.log(d1);
console.log(d2);