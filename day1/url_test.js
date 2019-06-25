const url = require('url');

// 将 url 字符串 解析为一个 对象 , 方便处理
const urlObj = url.parse('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=54002054_1_dg&wd=nodejs&rsv_pq=c1cb91b200019210&rsv_t=5d93QemAlF67Yw1qYtkpnsBcY50FFj8G8uwGQVMrniRebWIm45VpfUvqt227VcPWxGMlUQ&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=101&rsv_sug2=0&inputT=1351&rsv_sug4=2814&rsv_sug=2')

console.log(urlObj);


// 将一个url 对象, 转换 为一个 url 的字符数
const urlString = url.format(urlObj)

console.log('-------------------')
console.log(urlString);

const urlObject = {
    protocol: 'http',
    host: 'www.baidu.com'
};

// 将一个url 对象, 转换 为一个 url 的字符数
const result = url.format(urlObject);
console.log('--------------------')
console.log(result)
