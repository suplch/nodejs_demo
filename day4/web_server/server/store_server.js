const express = require('express');
const cookieParser = require('cookie-parser');

const { verifyToken } = require('./token_valid/token_verify');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use 是中间件处理函数, 任何请求上来 都会先 经过 中间件函数处理
//         req 表示浏览器的请求对象, res 表示服务器的响应, next是一个函数, 调用后 会跳到下一个中间件继续处理
app.use(verifyToken);

const userRouter = require('./routes/user-router');
const productRouter = require('./routes/products-router');
app.use('/user', userRouter);
app.use('/products', productRouter);


const port  = 3000;
app.listen(port, function (err) {
   if (err) {
       console.log(err);
       return;
   }
   console.log(`listening port ${port}`)
});
