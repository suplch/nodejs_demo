const fs = require('fs');


async function readFileTest() {
    return new Promise(function (resolve, reject) {

        // 异步读取文件
        fs.readFile('./test1111.txt', 'utf-8', function (err, data) {
            if (err) {
                // 读取失败 执行reject 并且将错误抛出
                reject(err);
                return;
            }
            // 当读取成功后 , 将读取的数据  传递给 resolve 函数
            resolve(data);
        })
    });
}


async function main() {

    try {
        // file_content 相当于 resolve 函数的参数
        let file_content = await readFileTest();

        console.log(file_content)
    } catch (e) {
        // 当 e 相当于 reject 函数执行是 传递的错误 对象
        console.log(' 有错误')
    }
}

main();
