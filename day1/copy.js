const fs = require('fs');


// 创建一个文件读取流
const readStream = fs.createReadStream('./webpack.mp4');

// 创建一个文件写入流
const writeStrem = fs.createWriteStream('./webpack_bak.mp4');


// 当读到数据的时候 触发 data 事件, 在 回调函数中读取 返回的数据.  data 事件会触发多次, 直到 读取结束
// readStream.on('data', function(data) {
//     console.log(data);
//     writeStrem.write(data)
// });
//
//  当读取的数据结束的时候 触发 end 事件
// readStream.on('end', function () {
//     console.log('读取结束');
//
//     writeStrem.close();
// });


// 将文件读取流 的数据 通过 pipe 管道 连接到 文件输出流中, 进行文件复制
readStream.pipe(writeStrem);
