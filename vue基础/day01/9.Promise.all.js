import thenFs from 'then-fs'

const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8')
]

// 等待机制，等所有异步操作完成后执行。then()方法
Promise.all(promiseArr).then(([r1, r2, r3]) => {
    console.log(r1, r2, r3)
}).catch((err) => {
    console.log(err.message)
})