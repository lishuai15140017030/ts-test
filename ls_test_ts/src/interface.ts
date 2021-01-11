/** 使用接口 几乎可以定义任意结构 */
/** 一 、基本用法 */
  // 函数的定义 // 注：这段代码为纯JavaScript代码，请在JavaScript开发环境编写下面代码，在TypeScript环境会报一些类型错误
  // const getFullName = ({ firstName, lastName }) => {
  //   return `${firstName} ${lastName}`
  // }
  // getFullName({
  //   firstName: 'li',
  //   lastName: 'shuai'
  // })
  // 但是我们使用这个函数的时候传入一些不是很理想的参数时，就是导致程序报错
  // TS帮助我们在编译阶段就监测到这些错误
  const getFullName = ({
    firstName: firstName,
    lastName: lastName,
  }: {
    firstName: string
    lastName: string
  }) => {
    return `${firstName} ${lastName}`
  }
  // getFullName(); // 应有1个参数，但获得0个
  // getFullName({ age: 18, phone: 123456789 }); // 类型“{ age: number; phone: number; }”的参数不能赋给类型“{ firstName: string; lastName: string; }”的参数。
  // getFullName({ firstName: "Lison" }); // 缺少必要属性lastName

  interface Info {
    firstName: string
    lastName: string
  }
  const getFullName1 = ({ firstName, lastName}: Info) => `${firstName} ${lastName}`

/** 二 、可选属性 */
  interface Vegetables {
    color?: string
    type: string
  } 
  const getVegetables = ({ color, type }: Vegetables) => {
    return `A ${color} ${type}`
  }
  getVegetables({type: '2'})

/** 三 、多余属性检查 */
  // getVegetables({type: '2', size: 1})

/** 四 、绕开多余属性检查 */
  // 1、类型断言
  getVegetables({type: '2', size: 1} as Vegetables)
  // 2、添加索引签名（推荐使用）
  interface Vegetables1 {
    color?: string
    type: string
    [prop: string]: any
  } 
  const getVegetables1 = ({ color, type }: Vegetables1) => {
    return `A ${color} ${type}`
  }
  getVegetables1({type: '2', size: 1, width: '100px'})
  // 3、利用类型兼容性
  interface Vegetables {
    type: string;
  }
  const getVegetables2 = ({ type }: Vegetables) => {
    return `A ${type}`;
  };
  const option = { type: "tomato", size: 12 };
  getVegetables2(option);

/** 五 、只读属性 */
  interface Info1 {
    readonly name: string
    [prop: string]: any
  }
  const info1: Info1 = {
    name: 'lishuai',
    age: 18
  }
  // info1.name = '2'
  info1.age = 1
/** 六 、函数类型 */ // 接口可以描述普通对象，还可以描述函数类型
  // 花括号里包含的内容为：调用签名 由带有参数类型的参数列表和返回值类型组成
  interface AddFun {
    (num1: number, num2: number): number
  }
  const add: AddFun = (n1, n2) => n1 + n2