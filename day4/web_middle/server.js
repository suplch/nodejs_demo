const express = require('express');
const path = require('path');


const bodyParser = require('body-parser');
const myBodyParser = require('./mybody-parser/MyBodyParser');

const app = express();

// 默认路径规则 是当资源在根路径想 执行 中间件 函数
app.use(function (req, res, next) {
    next()
});
// 当请求路径在 /hello 下的时候执行后面的中间件处理函数
app.use('/hello', function (req, res, next) {

    console.log('你好');
    next();
    //res.send('Hello world');
});

// 可以将不同位置的静态 资源 逻辑上组织在一起
//  当路径匹配/public的时候 应用 后面的中间件
app.use('/public',express.static(path.join(__dirname, 'public')));
//  当路径匹配/static 的时候 应用 后面的中间件
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/desktop', express.static('/Users/chunhua/Desktop/photo'));

app.use(function (req, res, next) {
    console.log('再见');
    next();
});

app.use(bodyParser.json());

//app.use(myBodyParser.json());

app.post('/add_user', function (req, res) {

    console.log('post / add_user ',  req.body);

    res.send('ok')
});

app.get('/get_user', function (req, res) {

    console.log('当前请求的 路径是', req.url);
    res.send({name: 'zhang san'})
});



app.listen(3000);
