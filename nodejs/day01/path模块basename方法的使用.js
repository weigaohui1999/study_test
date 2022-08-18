const path = require('path')

const filename = '/a/b/v/c/index.html'
// 返回文件名以及文件拓展名
const newFileName = path.basename(filename)
console.log(newFileName)
// 返回文件名不包含文件拓展名
const newFileName1 = path.basename(filename,'.html')
console.log(newFileName1)