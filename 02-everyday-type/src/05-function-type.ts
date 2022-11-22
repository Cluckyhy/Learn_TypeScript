function greet(name: string){
  console.log('Hello,'+ name.toUpperCase() + '!!');
}

greet('lulu')

function getFavoriteNumber(): number {
  return 100
}

const names = ['chy','lulu','qiao']
names.forEach(item => {
  console.log(item.toUpperCase());
})