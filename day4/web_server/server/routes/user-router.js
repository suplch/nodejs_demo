const jwt = require('jsonwebtoken');
const Const = require('../const_value');


const key = 'dffhgdfgdhgdghfdfgdfghdghgfh';

const express = require('express');

const { getStoreDB } = require('../mongo');

const userRouter = express.Router();

userRouter.post('/register', function (req, res) {

    getStoreDB(function (storeDb) {

        storeDb.collection('users').insertOne(req.body, function (err, result) {
            if (err) {
                res.send({
                    status: 10001,
                    msg: err.message
                });
                return;
            }
            res.send({
                status: Const.SUCCESSFUL,
                msg: 'ok',
                data: {
                    user_id: result.insertedId
                }
            })
        });
    });
});

userRouter.post('/login', function (req, res) {
    const login_name = req.body.login_name;
    const password = req.body.password;

    getStoreDB(function (storeDb) {
        storeDb.collection('users').find({login_name: login_name, password: password}).toArray(function (err, result) {
            if (err) {
                res.send({
                    status: 10002,
                    msg: '数据库连接错误'
                });
                return;
            }

            if (result.length !== 0) {

                // 登录成功后 使用用户的信息生成 token 字符串 响应到浏览器的 cookie里
                // 以后 浏览器每次发请求都会 将 cookie里的token 带到服务端
                const token = jwt.sign({
                    login_name: login_name
                }, key);

                // 将 token 字符串 发到浏览器的 cookie 里
                res.cookie('token', token);

                res.send({
                    status: Const.SUCCESSFUL,
                    msg: 'ok'
                })
            } else {
                res.send({
                    status: 10003,
                    msg: '登录失败'
                });
            }

        })
    });
});

module.exports = userRouter
