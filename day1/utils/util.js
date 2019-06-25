
const obj = require('../components/about');

console.log(obj.About())

function add(a, b) {
    return a + b;
}

// 方式一 导出对象
module.exports = {
    add: add,
    About: obj.About
}

// 方式二 导出 值
// module.exports.add = add;
// module.exports.About = obj.About;


// 方式 三 导出
// exports.add = add;
// exports.About = obj.About;


