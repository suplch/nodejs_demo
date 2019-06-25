const fs = require('fs');

const url = require('url');

const urlObj = url.parse('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=54002054_1_dg&wd=nodejs&rsv_pq=c1cb91b200019210&rsv_t=5d93QemAlF67Yw1qYtkpnsBcY50FFj8G8uwGQVMrniRebWIm45VpfUvqt227VcPWxGMlUQ&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=101&rsv_sug2=0&inputT=1351&rsv_sug4=2814&rsv_sug=2')

console.log(urlObj);


// fs.readFile('./test.txt', 'utf-8', function (err, data) {
//
//     console.log(data)
// });


console.log('aaaaaaaaaa')
// 异步写入文件内容, 读取成功后 调用 回调函数
fs.writeFile('./url.txt', JSON.stringify(urlObj), function (err) {
    if (err) {
        console.log(err);
    }

    console.log('写入成功');
});

console.log('bbbbbbbbbb')


//fs.writeFileSync('./url.txt', JSON.stringify(urlObj));


// fs.writeFile('./test.txt', 'Hello World!!!', function (err) {
//     if (err) {
//         console.log(err);
//
//     }
// });
