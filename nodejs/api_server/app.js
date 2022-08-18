const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')

const app = express()
app.use('/api', userRouter)
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.cc = function (err, status = 1) {
        res.send({ // 状态 
            status, // 状态描述，判断 err 是 错误对象 还是 字符串 
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})