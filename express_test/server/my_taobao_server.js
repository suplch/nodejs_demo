const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// bodyParser.json() 的 功能是分析提交上来的数据, 将其解析为 js 对象
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));
// 增加一个 get 请求  请求的路径是 /get_friends
//                     req 表示 浏览器的请求,   res 表示 服务器的响应
app.get('/get_friends', function (req, res) {

    let friends = [
        {name: '张三'},
        {name: '李四'},
    ];

    // res 上有一个send的方法, 用来把数据传递给 浏览器
    res.send(friends);
});

app.get('/get_friends_2', function (req, res) {
    res.send([{"name": "zhang"},{"name": "san"}]);
});

// post 表示提供一个post 的服务
app.post('/register_user', function (req, res) {
    console.log(req.body);
    res.send({
        status: 10001,
        msg: '数据库连接失败',
        data: {
            user_id: '10000111'
        }
    })
});
// 启动服务 监听3000 端口
app.listen(3000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务已经启动, http://localhost:3000')
});
