const express = require('express')

const apiRouter = express.Router()


// 配置解析表单数据的中间件
apiRouter.use(express.urlencoded({ extended: false }))

apiRouter.get('/get', (req, res) => {
    // 获取客户端通过查询字符串，发送到服务器中的数据
    const query = req.query

    res.send({
        status: 0,
        msg: 'GET 请求成功',
        data: query // 响应给客户端的数据
    })
})

apiRouter.post('/post', (req, res) => {
    const body = req.body

    res.send({
        status: 0,
        msg: 'POST 请求成功',
        data: body
    })
})

module.exports = apiRouter