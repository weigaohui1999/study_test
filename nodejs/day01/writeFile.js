// 1.导入fs模块
const fs = require('fs')
// 2.写入文件
// 参数1： 文件存放的路径
// 参数2： 文件写入的内容
// 参数3: 写入文件的内容
// 参数4： 回调函数
fs.writeFile('./filess/2.txt', 'hello nodejs', 'utf-8', function(err){
    console.log(err)

    // 如果err的值等于null ,写入成功
    // 如果err的值等于一个错误对象，写入失败
    if(err){
        return console.log('文件写入失败',err.message)
    }
    console.log('文件写入成功')
})