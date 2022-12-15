interface BasicAddress {
  name?: string
  street: string
  city: string
  country: string
  postalCode: string
}

// 扩展类型（通过接口的继承）
interface AddressWithUnit extends BasicAddress {
  unit: string
}

let awu: AddressWithUnit = {
  unit: '3单元',
  street: '哈哈街道',
  city: '北京',
  country: '中国',
  postalCode: '10001'
}

interface Colorful {
  color: string
}
interface Circle {
  radius: number
}
interface ColorCircle extends Colorful, Circle {

}

const cc: ColorCircle = {
  color: 'red',
  radius: 10
}