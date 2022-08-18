const express = require('express')

const app = express()
// 导入第三方中间件
const parser = require('body-parser')
// 实例使用parser中间件
app.use(parser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok')
})
app.listen(80, () => {
    console.log('http://127.0.0.1')
})