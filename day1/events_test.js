const EventEmitter = require('events');


const events = new EventEmitter();

class MyObject extends EventEmitter {

}

const myObj = new MyObject();


// 注册一个 aaaa 事件
myObj.on('aaaa', function (data) {
    console.log('my obj aaaa 事件触发了 参数=', data)
});

// 触发 aaaa 事件
myObj.emit('aaaa', 'hello');

// 注册 click 事件
events.on('click', function (data) {
    console.log(data);
});

function removeHandler(data) {
    console.log('一个东西被删除了', data.userId);
}

// 注册 remove 事件
events.on('remove', removeHandler);


// 触发 click 事件
events.emit('click', '被点击了');

// 触发 remove 事件
events.emit('remove', {userId: '1234'});

// 取消remove 事件
events.off('remove', removeHandler);

// 触发 remove 事件, 但是 由于 上一句代码 取消到了, 所以事实上 不会触发 remove 事件
events.emit('remove', {userId: '4567'});
