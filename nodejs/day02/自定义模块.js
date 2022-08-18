// console.log(module)
// 默认情况下module.exports = {}
const age = 20
// 向module.exports对象上挂载username对象
module.exports.username = 'zs'
// 向export对象上挂载sayHello方法
module.exports.sayHello = function(){
    console.log('hello');
}

module.exports.age = age

// 让module.exports指向一个全新的对象
module.exports = {
    username: '小黑',
    sayHello: function(){
        console.log('hello');
    }
}