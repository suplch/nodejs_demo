const fs = require('fs');

// 打开一个文件 读取流, 读取  ./webpack.mp4 的文件内容
const readStream = fs.createReadStream('./webpack.mp4');

let n = 1;

// 当从 数据流中读取到数据是  触发 data 事件, 本事件 会多次调用, 知道 流中的数据读取完成
readStream.on('data', function(data) {
    console.log(`第${n}次 收到 ` + data.length + ' 个字节数据')
    n++
    // console.log(data.toString('utf-8'))
});

// 当流中的数据读取结束, 触发 end 事件, 我们可以再 end 事件处理 回到中执行 最后的一些逻辑
readStream.on('end', function () {
    console.log('读取结束')
});
