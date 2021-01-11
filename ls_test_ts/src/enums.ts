import ts from "typescript";

export default function () {
  // TS支持数字和字符串的枚举
  enum Status {
    Uploading = 1,
    Success,
    Failed
  }
  console.log(Status.Uploading)
  console.log(Status['Success'])
  enum Str {
    a = 'aa',
    b = 'bb'
  }
  console.log(Str['a'])
  // 数字枚举在定义的时候，可以使用计算值和常量，但是要注意，如果某个字段使用了计算值和常量，那么该字段后面紧接着的字段必须设置初始值，这里不能使用默认的递增值了
  const getValue = () => 0
  // enum ErrorIndex {
  //   a = getValue(),
  //   b  // error 枚举成员必须具有初始化的值
  // }
  /**反向映射 只支持数字枚举*/
  enum Code {
    Success = 200,
    NotFound = 404,
    Error = 500
  }
  console.log(Code['Success'])
  console.log(Code[200])
  //TS在编译的时候会把属性名和属性值分布作为属性名进行编译生成一个对象
  // {
  //   200: "Success",
  //   404: "NotFound",
  //   500: "Error",
  //   Error: 500,
  //   NotFound: 404,
  //   Success: 200
  // }

  /** 异构枚举 既有数字也有字符串枚举 通常不建议使用*/
  enum Result {
    Faild = 0,
    Success = 'Success'
  }
  /** 枚举成员类型和联合枚举类型 （如果枚举值里所有的值都是字面量类型的值，那么这个枚举的每个成员和枚举本身都可以作为类型来使用）*/
  enum E {A}
  enum E {B = 'a'}
  enum E {C = 1}
  // 1、枚举成员类型
  enum Animal {
    Dog = 1,
    Cat = 2
  }
  // 这里使用Animal.Dog作为类型，指定接口Dog的必须有一个type字段，且类型为Animal.Dog
  interface Dog {
    type: Animal.Dog
  }
  let dog: Dog = {
    type: Animal.Dog
  }
  // let dog1: Dog = {
  //   trpe: Animal.Cat
  // }
  // 2、联合枚举类型
  enum Status {
    Off = 'off',
    On = 'on'
  }
  interface Anm {
    age: Animal
  }
  const a1: Anm = {
    age: Animal.Cat 
  }
  // const a2: Anm = {
  //   age: Status.Off
  // }

  /**运行时的枚举 可以当对象使用 */
  enum En {
    A,
    B
  }
  const getIndex = (enumObj: {A: number}): number => {
    return enumObj.A
  }
  console.log(getIndex(En))

  // let st: {A: number} = {
  //   A: 1
  // }

  /** const enum 不会将属性的值编译成对象的属性 */
  const enum Sta {
    On,
    Off
  }
  console.log(Sta['On'])
  // console.log(Sta[0])

  var obj: any = {}
  obj[(obj['a'] = 0)] = 'a'
  console.log(obj)
}