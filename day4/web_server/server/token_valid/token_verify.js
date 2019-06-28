const jwt = require('jsonwebtoken');

const key = 'dffhgdfgdhgdghfdfgdfghdghgfh';

// 增加一个 白名单, 里面的服务不需要 进行token 验证,
const whitelist = [
    '/user/login',
    '/user/register'
];

function verifyToken (req, res, next) {
    // 在白名单中 允许继续处理
    if (whitelist.indexOf(req.url) !== -1) {
        // 如果在白名单中 就继续处理后续操作, 不用进行token 验证
        next();
    } else {
        // 通过 jsonwebtoken 校验 来自浏览器cookie 里的 token 值
        jwt.verify(req.cookies.token, key, function (err, loginObj) {
            console.log('校验 token', req.url);

            if (err) {
                // 如果有错误 说明 token 失效 返回给 浏览器具体的错误值
                res.send({
                    status: 11110,
                    msg: 'token 失效 请重新登录'
                });
                return;
            }
            // 否则 token 校验成功, 用户可以继续处理后续操作
            next();
        })
    }
}

module.exports = {
    verifyToken
};
