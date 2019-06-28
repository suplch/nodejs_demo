
var promise = new Promise(function (resolve, reject) {
    resolve('返回一个值')

});

var promise2 = new Promise(function (resolve, reject) {
    resolve('返回第二个值')
});

var p1 = promise.then(function (result) {
    console.log(result);
    return promise2;
});

p1.then(function (result) {

    console.log(result)
});






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
