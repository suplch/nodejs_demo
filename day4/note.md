### token 验证
+ 用户登录 服务器端产生一个token (加密字符串) 发送给前端 
+ 前端将token 进行保存   
+ 前端发起数据请求的时候携带token  
+ 服务端 验证token 是否合法  如果合法继续操作   不合法终止操作
+ token 的使用场景   无状态请求   保持用户的登录状态  第三方登录（token+auth2.0）  

```js
const jwt=require('jsonwebtoken')
const scrict='sdjfksdjflajflasjflasjflksf'
 
function creatToken(palyload){
    // 产生token
    palyload.ctime=Date.now()
    return jwt.sign(palyload,scrict, { expiresIn: 60 * 60 })
}
function checkToken(token){
    return  new Promise((resovle,reject)=>{
        jwt.verify(token,scrict,(err,data)=>{
           if(err){ reject('token 验证失败')}
           resovle(data)
           })
    })
     
}
module.exports={
    creatToken,checkToken
}
```

### Cookie
+ cnpm instlal cookie-parser --save
+ var cookieParser = require('cookie-parser'); 
+ app.use(cookieParser());  
+ res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true});  
   //HttpOnly 默认 false 不允许 客户端脚本访问
+ req.cookies.name  

### jwt+验证码实现注册登录
+ require('jsonwebtoken')
    - var jwt = require('jsonwebtoken');
    - var token = jwt.sign({_id: '11111', userName: 'zhang' }, 'shhhhh');
    - var decoded = jwt.verify(token, 'shhhhh');
    - console.log(decoded.foo) // bar



### cookie+session 用户鉴权
#### Cookie+Session
 
```js
const  cookieParse=require('cookie-parser')
const  session = require('express-session')
 
app.use(session({
    secret: 'hubwizApp', //为了安全性的考虑设置secret属性
    cookie: {maxAge: 60 * 1000 * 60 * 24 }, //设置过期时间
    resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized: false, //无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
}));
app.get('/somepath', function(req, res) {
  req.session;
})


```
