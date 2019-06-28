const express = require('express');
const mongodb =  require('mongodb');
const ObjectId = mongodb.ObjectId;

const Const = require('../const_value');

const key = 'dffhgdfgdhgdghfdfgdfghdghgfh';

const { getStoreDB } = require('../mongo');

const productRouter = express.Router();

productRouter.get('/get_products', function (req, res) {
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


productRouter.post('/add_product', function (req, res) {
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

productRouter.post('/del_product', function (req, res) {
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


module.exports = productRouter
