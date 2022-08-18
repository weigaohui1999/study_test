const express = require('express')

const app = express()
// 导入自定义的路由模块
const apiRouter = require('./16.apiRouter')

app.get('/api/jsonp', (req, res) => {
    const funcName = req.query.callback

    const data = { name: '张三', age: 18 }

    const dataStr = `${funcName}(${JSON.stringify(data)})`

    res.send(dataStr)
})

// 导入cors中间件
const cors = require('cors')

app.use(cors())

app.use('/api', apiRouter)

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})