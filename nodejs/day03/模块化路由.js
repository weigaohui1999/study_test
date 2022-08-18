const express = require('express')

const app = express()
// 导入路由模块
const userRouter = require('./router')
// 注册路由模块
app.use(userRouter)
// 为路由模块添加前缀
app.use('/user',userRouter)

app.listen(8083,()=>{
    console.log('http://127.0.0.1:8081')
})