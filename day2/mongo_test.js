const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'test';


MongoClient.connect(url,  { useNewUrlParser: true },function (err, client) {
    if (err) {
        console.log(err);
        return;
    }
    const db = client.db(dbName);

    console.log(db.collection);

    client.close();
});


