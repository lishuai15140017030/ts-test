import ts from "typescript";
import enums from './enums'
enums()
// // index.ts
// let num: number = 123;
// num = 321
// num = null
// num = undefined


// let str: string = '123';
// str = '321'
// const first: string = 'hello'
// const second: string = 'world'
// str = `${ first } ${ second }`
// console.log(str)

// let bool: boolean = false;
// bool = true
// bool = !1

// let arr1: number[] = [1, 2, 3]
// let arr2: Array<number> = [1, 2, 3]
// let arr3: (number|string)[] = ['1', 2]

// let u: undefined = undefined
// let n: null = null

// let obj: object = {
//   name: 'lishuai',
//   age: 18
// }
// // console.log(obj.name) // error 类型“object”上不存在属性“name”
// function getKeys (obj: object) {
//   return Object.keys(obj) // 会以列表的形式返回obj中的值
// }
// console.log(getKeys(obj))

// // ts中新增的6个类型
// // 1、元组：已知元素数量和类型的数组
// let tuple: [string, number, boolean]
// tuple = ['a', 1, true]
// tuple[1] = 3
// // 定义接口Tuple
// interface Tuple extends Array<number | string> {
//   0: string;
//   1: number;
//   length: 2;
// }

// // 2、枚举 enum
// enum Roles {
//   lishuai,
//   liwenwen = 11,
//   zhaojianping
// }
// console.log(Roles.lishuai)
// console.log(Roles[11])

// // 3、Any
// let value: any
// value = 123
// // value.length
// value = '123'
// value = undefined
// value = false
// value = [1, 2, 3]

// let arr: any[] = ['1', 1, false, null, undefined]

// // 4、void 和any相反，标识没有任意类型，在定义函数，函数没有返回值时会用到
// // voil类型的变量只能赋值为undefined和null，其他类型不能赋值给void
// const consoleText = (text: string): void => {
//   console.log(text)
// }
// let vo: void = null || undefined

// // 5、never类型指那些永远不存在的值的类型，它是那些总会抛出异常或根本不会有返回值的函数表达式的返回值类型，当变量被永不为真的类型保护所约束时，该变量也是never类型
// // never 类型是任何类型的子类型，所以它可以赋值给任何类型,除它自身外任何类型都不能赋值给 never 类型
// const errorFunc = (msg: string): never => {
//   throw new Error(msg)
// }
// // console.log(errorFunc('error'))
// // 它和 void 类型时的consoleText函数不同，consoleText函数没有返回值，是我们在定义函数的时候没有给它返回值
// const infiniteFunc = (): never => {
//   while (true) {}
// }

// // 6、unknown 当你指定值为unknown类型的时候，如果没有通过基于控制流的类型断言来缩小繁为的话，是不能对它进行任何操作的
// // unknown类型相对于any类型是安全的
// let unk: unknown
// unk = 1
// unk = '2'
// unk = true
// // unk.length

// /** ---------- 类型拓展 ----------  */
// // 1、交叉类型：取多个类型的并集，使用&符号定义，被&链接的多个类型构成一个交叉类型，标识这个类型同时具备这几个连接起来的类型的特点：
// const merge = <T, U>(arg1: T, arg2: U): (T & U) => {
//   let res = <(T & U)>{}
//   console.log(typeof res)
//   res = Object.assign(arg1, arg2)
//   return res
// }
// const info1 = {
//   name: 'lishuai',
//   age: 11,
//   address: '北京'
// }
// const info2 = {
//   age: 18
// }
// const lisonInfo = merge(info1, info2)
// console.log(lisonInfo)
// // 2、联合类型 只要符合联合类型中任意一种类型即可，用|符号定义，当我妈的程序具有多样性，元素类型不唯一时，即使用联合类型
// const getLength = (content: string | number): number => {
//   if (typeof content === "string") return content.length;
//   else return content.toString().length;
// };
// console.log(getLength("abc")); // 3
// console.log(getLength(123)); // 3

// // Symbol
// // 创建一个独一无二的symbol类型的值,不和任何值相等,使用Synbol创建symbol类型的时候传入一个参数，需要时字符串，不是字符串会条用传入参数的toString方法转为字符串
// // 它不可以和其他类型的值进行运算，但是可以转为字符串和布尔类型的值
// const s1 = Symbol('li')
// const s2 = Symbol('shuai')
// console.log(!s1) // false
// console.log(!!s1) // true
// // console.log(s1 === s2) // false

// // symbol作为属性名
// let prop = 'name'
// const objS = {
//   [prop]: 'lishuai'
// }
// console.log(objS.name) // lishuai

// let nameS = Symbol()
// const nameUS: unique symbol = Symbol()
// let objS1 = {
//   [nameS]: 'lishuai',
//   [nameUS]: 'lili'
// }
// console.log(objS1) // { Symbol(): 'lison' } 如果想访问这是属性值，就只能使用name这个symbol值：
// console.log(objS1.nameS) // undefined
// console.log(objS1[nameUS])

// // 使用 Symbol 类型值作为属性名，这个属性不会被for…in遍历到，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()获取到;可以使用Object.getOwnPropertySymbols方法获取对象的所有symbol类型的属性名
// // Symbol 包含两个静态方法，for 和 keyFor
// //** Symbol.for() 会先检查有没有使用该字符串调用 Symbol.for 方法创建的 symbol 值，如果有，返回该值，如果没有，则使用该字符串新创建一个。**使用该方法创建 symbol 值后会在全局范围进行注册
// let as = Symbol.for('1')
// let bs = Symbol.for('1')
// console.log(as === bs)
// //** Symbol.keyFor() 该方法传入一个 symbol 值，返回该值在全局注册的键名
// console.log(Symbol.keyFor(as))

// // ts中的symbol
// let sym: symbol = Symbol()
// const usym: unique symbol = Symbol()

