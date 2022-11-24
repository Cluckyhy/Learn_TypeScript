type GreeterFunction = (a: string) => void

function greeter(fn: GreeterFunction) {
  fn('hello world')
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole)