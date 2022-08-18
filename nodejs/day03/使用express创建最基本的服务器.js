// 导入express
const express = require('express')

// 创建web服务器
const app = express()

// 监听客户端的GET和POST请求
app.get('/user', (req, res) => {
    res.send({ name: '张三', age: 18, gender: '男' })
})

app.post('/user',(req,res)=>{
    res.send('请求成功')
})

app.get('/',(req,res)=>{
    // 获取客户端访问服务器的参数
    console.log(req.query)
    res.send(req.query)
})

// id是动态的参数
app.get('/user/:id/:username',(req,res)=>{
    // 获取URL中的动态参数
    console.log(req.params);
    res.send(req.params)
})

// 调用app.listen 
app.listen(80, () => {
    console.log('http://127.0.0.1')
})