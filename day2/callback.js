const fs = require('fs');

let content = ''

/// 异步方式
fs.readFile('./file/t1.txt', 'utf-8', function (err, data) {
    content += data;

    fs.readFile('./file/t2.txt', 'utf-8', function (err, data) {
        content += data;




        fs.readFile('./file/t3.txt', 'utf-8', function (err, data) {




            content += data;
            fs.readFile('./file/t4.txt', 'utf-8', function (err, data) {




                content += data;
                fs.readFile('./file/t5.txt', 'utf-8', function (err, data) {




                    content += data;
                    console.log(content);
                });

            });






        });





    });




});
//
let full = '';
full += fs.readFileSync('./file/t1.txt', 'utf-8');
full += fs.readFileSync('./file/t2.txt', 'utf-8');
full += fs.readFileSync('./file/t3.txt', 'utf-8');
full += fs.readFileSync('./file/t4.txt', 'utf-8');
full += fs.readFileSync('./file/t5.txt', 'utf-8');

console.log(full);
