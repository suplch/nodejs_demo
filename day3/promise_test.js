
var promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
         resolve('返回一个值')

        // reject('这是一个错误')

    }, 3000)
    
});

async function main() {
    const result = await promise;
    console.log(result)
}

main();


// promise.then(function (result) {
//
//     console.log('成功: ', result)
// }).catch(function (err) {
//     console.log('失败', err)
// }).finally(function () {
//     console.log('请求结束')
// });



// let  arr = ['hello', 'boye']
// let arr2 = ['good', 'thank']
// let arr3 = ['hello', 'boye', 'good', 'thank'];
//
//
// let obj = {name: 'zhang', age: 123}
// let obj2 = {gender: '男', salary: 10000}
//
// let obj3 = {...obj, ...obj2};
// console.log(obj3);
