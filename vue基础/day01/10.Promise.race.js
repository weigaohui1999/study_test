import thenFs from 'then-fs'

const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8')
]

// 赛跑机制，只要有一个异步操作执行完成就执行then()方法
Promise.race(promiseArr).then(([r1, r2, r3]) => {
    console.log(r1, r2, r3)
}).catch((err) => {
    console.log(err.message)
})