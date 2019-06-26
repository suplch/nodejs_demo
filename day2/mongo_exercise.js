const mongodb =  require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbUrl = 'mongodb://localhost:27017';

// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     testDb.collection('students').find({age: {$gte: 30}}).toArray(function (err, result) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
//
// });

// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     testDb.collection('students').insert({name: '小赵', age: 35}, function (err, result) {
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
//
// });

// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     testDb.collection('students').update({name: 'li'}, {$set: {name: '李'}}, function (err, result) {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
//
// });

// 连接mongo数据库数据
MongoClient.connect(dbUrl, function (err, client) {
    // 如果有错误 进行错误处理
    if (err) {
        console.log(err);
        return;
    }
    // 否则表示连接成功
    console.log('连接成功');
    // client 表示 回调函数返回的mongo客户端
    // client.db方法可以返回 具体的数据库对象
    const testDb = client.db('test');
    // collection 方法 返回 具体的数据表
    testDb.collection('students').remove({name: '韩梅梅'}, function (err, result) {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result)
    });
    client.close();
});

// 安装一下 cnpm 工具
// npm install -g cnpm --registry=https://registry.npm.taobao.org
