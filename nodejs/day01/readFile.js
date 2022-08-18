//  1.导入fs模块，来操作文件
const fs = require('fs')

// 调用fs.readFile()方式来读取文件
// 参数1：读取文件的存放地址
// 参数2：读取文件时候采取的编码格式，一般默认utf-8
// 参数3：回调函数，拿到失败和成功的结果 err datastr

fs.readFile('./files/1.txt', 'utf-8', function(err,dataStr){
    if(err){
        return console.log('读取文件失败' + err.message)
    }
    console.log('读取文件成功' + dataStr)
})