const express = require('express');
const mongodb =  require('mongodb');
const ObjectId = mongodb.ObjectId;

const { getStoreDB } = require('./mongo');

const Const = require('./const_value');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.post('/register', function (req, res) {

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

app.post('/login', function (req, res) {
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
                res.send({
                    status: Const.SUCCESSFUL,
                    msg: 'ok',

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

app.get('/get_products', function (req, res) {

    getStoreDB(function (storeDb) {
        storeDb.collection('products').find({}).toArray(function (err, result) {
            if (err) {
                res.send({
                    status: 10002,
                    msg: '数据库连接错误'
                });
                return;
            }

            res.send({
                status: Const.SUCCESSFUL,
                msg: 'ok  ok',
                data: {
                    products: result
                }
            })

        })
    });
});

app.post('/add_product', function (req, res) {
    getStoreDB(function (storeDb) {
        storeDb.collection('products').insertOne(req.body, function (err, result) {
            if (err) {
                res.send({
                    status: 10002,
                    msg: '数据库连接错误'
                });
                return;
            }

            console.log(result.insertedId);
            if (result.insertedId) {
                res.send({
                    status: Const.SUCCESSFUL,
                    msg: 'ok',
                    data: {
                        product_id: result.insertedId
                    }
                })
            } else {
                res.send({
                    status: 10005,
                    msg: 'err   '
                })
            }

        })
    });
});


app.post('/del_product', function (req, res) {
    getStoreDB(function (storeDb) {
        storeDb.collection('products').remove({_id: ObjectId(req.body.product_id)}, function (err, result) {
            if (err) {
                res.send({
                    status: 10002,
                    msg: '数据库连接错误'
                });
                return;
            }

            if (result.result.n === 1) {
                res.send({
                    status: 10000,
                    msg: 'ok ok'
                })
            } else {
                res.send({
                    status: 10010,
                    msg: 'err ere'
                })
            }

        })
    });
});

const port  = 3000;
app.listen(port, function (err) {
   if (err) {
       console.log(err);
       return;
   }
   console.log(`listening port ${port}`)
});
