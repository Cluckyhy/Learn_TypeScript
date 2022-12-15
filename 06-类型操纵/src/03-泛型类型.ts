function indentity<T>(arg: T): T {
  return arg
}

// let myIdentity: <T>(arg: T) => T = identity
// let myIdentity: <A>(arg: A) => A = identity
// 对象字面量的形式
// let myIdentity: { <T>(arg: T): T} = identity


// 泛型接口
// interface GenericIdentityFn {
//   <T>(arg: T): T
// }
// let myIdentity: GenericIdentityFn = identity

interface GenericIdentityFn<T> {
  (arg: T): T
}

let myIdentity: GenericIdentityFn<string> = identity