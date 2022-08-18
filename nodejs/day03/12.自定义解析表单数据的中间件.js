const express = require('express')

const app = express()
// 导入处理查询字符串的querystring模块，parse（）方法将查询字符串解析成对象的格式
const qs = require('querystring')

app.use((req,res,next)=>{
    // 监听req的data事件
    // 1.定义一个str字符串,专门用来存储客户端发送过来的请求体数据

    let str = ''
    // 2.定义监听data数据的事件
    req.on('data',function(chunk){
        str += chunk
    })
    //3.监听req的end 事件 
    req.on('end',()=>{
        // 在str中存的是完整的请求体数据
        const body = qs.parse(str)
        req.body = body
        console.log(body)
        next()
    })
})

app.post('/user',(req,res)=>{
    res.send(req.body)
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})