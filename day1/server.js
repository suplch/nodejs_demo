const fs = require('fs');

// 用来解析 路径信息
const path = require('path');

// 引入http 模块 是一个node自带的模块
const http = require('http');

//                  创建 一个服务器               回调函数  request 表示一个浏览器请求对象,  response 表示一个响应对象
const server = http.createServer(function (request, response) {

    // let html = `
    //     <html>
    //         <head>
    //             <style>
    //                 body {
    //                     color: red;
    //                 }
    //             </style>
    //         </head>
    //         <body>hello world</body>
    //     </html>
    // `;

    // let about = `
    //     <html>
    //     <head>
    //         <meta charset="UTF-8">
    //     </head>
    //     <body>
    //         关于千锋
    //     </body>
    //     </html>
    // `

    // __dirname nodejs 的一个全局变量, 里面保持着当前 js 文件的绝对路径
    console.log(__dirname)
    console.log(__dirname + '/public')

    console.log(__dirname + '/public' + request.url)

    let url;

    if (request.url === '/') {
        url = '/index.html'
    } else {
        url = request.url;
    }


    // 返回完整路径
    const fullPath = __dirname + '/public' + url;

    const Mime = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.png': 'image/png',
        '.js': 'application/javascript'
    };

    //  fs.existSync  用来判断参数指定的路径是否存在, 如果存在 返回 true 否则 返回 false
    if (fs.existsSync(fullPath)) {
        const htmlData = fs.readFileSync(fullPath);

        // extname 返回 文件的扩展名
        let ext = path.extname(fullPath)

        // 输出一些 响应 头信息 headers
        response.writeHead(200, {
            'Content-Type': Mime[ext]
        });

        response.end(htmlData);
    } else {
        response.end('Not Found');
    }



    // if (request.url === '/' || request.url === '/index.html') {
    //     const htmlData = fs.readFileSync('./public/index.html');
    //
    //     // response end 方法是把参数 的值 发送到浏览器端
    //     response.end(htmlData);
    // } else if (request.url === '/about.html') {
    //     const htmlData = fs.readFileSync('./public/about.html');
    //
    //     response.end(htmlData)
    // } else {
    //     response.end('Not Found');
    // }

    console.log(request.url);


});

// 开始监听 3000 端口
server.listen(3000, function (err) {
    if (err) {
        console.log('绑定端口失败')
        return
    }

    console.log('服务已经开启, 请访问  http://localhost:3000')
});
