// function fn(x: string): void
// function fn() {
  
// }

// fn('hello')

// function fn12(x: boolean): void
// function fn12(x: string): void
// function fn12(x: boolean | string) {
  
// }

function fn12(x: string): string
function fn12(x: boolean): boolean
function fn12(x: string | boolean): string | boolean {
  return false
}