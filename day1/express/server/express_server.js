const express = require('express');
// 处理路径的模块
const path = require('path');
// 调用 express 函数 返回 衣蛾app 代表 一个服务器端的 应用程序
const app = express();
const fullpath = path.join(__dirname, '..', 'public');
console.log(__dirname)
console.log(fullpath);

// express.static 方法告诉 express 框架  静态文件在哪里
app.use(express.static(fullpath));

// 对外提供了一个 get 请求服务  路径是  /get_username
app.get('/get_username', function (request, response) {

    // response 表示 服务器对浏览器的响应
    response.send({
        name: '张三'
    })
});
//                               req 代表请求对象, res 代表响应
app.get('/get_classname', function (req, res) {

    res.send({
        name: '1904班'
    })
});

app.get('/get_students', function (req, res) {

    let students = [
        {name: '朱武', gender: '男'},
        {name: '李斌', gender: '女'},
        {name: '张毅', gender: '男'},
        {name: '<script>alert("小刘")</script>', gender: '男'},
    ];
    // 我们将数组 students 发送到浏览器
    res.send(students);
});

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务已经启动, 请访问 http://localhost:3000')
});
