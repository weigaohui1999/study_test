// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 绑定request事件
server.on('request', (req,res) =>{
    const str = '你请求的路径为：'+ req.url + '您请求的方法为：' + req.method
    console.log('someone visit our web server');
    // 解决中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 向客户端发送一些内容
    res.end(str)
})
// 开启服务器
server.listen(8081,function(){
    console.log('server running at http://127.0.0.1:8081')
})