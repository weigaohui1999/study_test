// 导入fa文件系统模块
const fs = require('fs')
// 导入path路径模块
const path = require('path')
// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 绑定request事件
server.on('request',(req,res)=>{
    const url = req.url
    let fpath = ''
    if(url === '/') {
        // 定义默认路径指定为index.html 文件路径
        fpath = path.join(__dirname, '/clock/index.html')
    }else {
        // 定义不为默认路径的地址，进行拼接
      fpath =  path.join(__dirname, '/clock', url)
    }

    // 读文件，如果读取成功将读取的内容发送给客户端
    fs.readFile(fpath,'utf-8',function(err,dataStr){
        if(err){
            return console.log('404 not found')
        }
        // 读取成功将读取的内容发送给客户端
        res.end(dataStr)
    })
})
// 开启web服务器
server.listen(8081,function(){
    console.log('http://127.0.0.1:8081')
})