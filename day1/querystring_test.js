const querystring = require('querystring');

//                                  将 查询字符串 解析为 js 对象
const queryObj = querystring.parse('name=zhang&age=18');

console.log(queryObj)

console.log(queryObj.name);
console.log(queryObj.age);

let obj = {
    name: 'zhang&san',
    age: 21
}

//                       将一个对象obj  解析为 查询字符串
const qStr = querystring.stringify(obj);

console.log(qStr);

//                           需要将一些 特殊符号进行 编码
let result = querystring.escape('&=')

console.log(result)


                                    // 解码字符串
let ret22 = querystring.unescape('%26%3D')

console.log(ret22);

