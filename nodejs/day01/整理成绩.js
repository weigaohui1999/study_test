// 1.导入fs模块
const fs = require('fs')
// readfile读取文件内容
fs.readFile(__dirname + './files/study.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败：', err.message)
    }
    console.log('读取文件成功：', dataStr)
    // 将文件里面的内容拼接为字符串
    const arr = dataStr.split(' ')
    const newArr = []
    arr.forEach(item => {
        newArr.push(item.replace('=', ':'))
    })

    const newStr = newArr.join('\r\n')
    // writeFile写入文件
    // __dirname动态拼接写入文件
    fs.writeFile(__dirname + './files/整理后的成绩文件.txt', newStr, function (err) {
        if (err) {
            console.log('成绩文件生成失败', err.message)
        }
        console.log('成绩生成成功');
    })
})