// 类型断言 在使用时并不知道联合变量的类型，调用此属性方法时我们只能访问此联合类型的所有类型里共有的属性或方法，否则就会报错

const getStrLength = (target: number | string) => {
  // 这种形式在jsx代码中不可使用，而且也是TSLint不建议的写法
  if ((<string>target).length) {
    // 这种形式是没有任何问题的写法，建议写法
    return (target as string).length
  } else {
    return target.toString().length
  }
}