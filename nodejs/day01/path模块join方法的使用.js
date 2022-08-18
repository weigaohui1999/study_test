const path = require('path')
const fs = require('fs')
// // 多少个../就会抵消多少层路径
const pahtStr = path.join('/a','/b/c', '../../../','/d')

console.log(pahtStr)



fs.writeFile(path.join(__dirname, './files/1.txt'), pahtStr, function(err){
    console.log(err)
})