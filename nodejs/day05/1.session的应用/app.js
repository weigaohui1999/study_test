const express = require('express')
var session = require('express-session')
const app = express()

app.use(session({
    secret: 'key-pard-cat',  //任意字符串
    resave: false,  //固定写法
    saveUninitialized: true  // 固定写法
}))

// 登入
app.post('/user/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登陆失败' })
    }
    // 向session上存数据
    req.session.user = req.body
    req.session.isLogim = true

    res.send({ status: 0, msg: '登录成功！' })
})
// 判断用户登入
app.get('/api/username', (req, res) => {
    if (!req.session.isLogim) {
        return res.send({ status: 1, msg: 'fail' })
    }

    res.send({
        status: 0,
        msg: 'success',
        // 向session上取数据
        username: req.session.user.username
    })

})

// 退出登录的接口
app.post('/api/logout',(req,res)=>{
    // 清空单签用户的session的信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})
app.listen(80, () => {
    console.log('http://127.0.0.1')
})

