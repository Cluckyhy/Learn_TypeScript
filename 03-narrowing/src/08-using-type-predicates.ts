type Fish08 = {
  name: string
  swim: () => void
}

type Bird08 = {
  name: string
  fly: () => void
}

function isFish(pet: Fish08 | Bird08): pet is Fish08 {
  return (pet as Fish08).swim !== undefined
}

function getSmallPet(): Fish08 | Bird08 {
  let fish: Fish08 = {
    name: 'sharking',
    swim: () => {}
  }

  let bird: Bird08 = {
    name: 'sparrow',
    fly: () => {}
  }

  return true ? bird : fish
}

let pet = getSmallPet()

if(isFish(pet)){
  pet.swim()
}else{
  pet.fly()
}

const zoo: (Fish08 | Bird08)[] = [getSmallPet(),getSmallPet(),getSmallPet(),getSmallPet()]
const underWater1: Fish08[] = zoo.filter(isFish)
const underWater2: Fish08[] = zoo.filter(isFish) as Fish08[]
const underWater3: Fish08[] = zoo.filter((pet): pet is Fish08 => {
  if(pet.name === 'frog'){
    return false
  }
  return isFish(pet)
})
