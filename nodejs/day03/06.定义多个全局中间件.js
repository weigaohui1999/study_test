const express = require('express')
const app = express()

// 定义第一个全局中间件
const mw = function(req,res,next){
  console.log('这是一个中间件');
}
app.use(mw)

// 定义全局中间件的简写模式
app.use((req,res,next)=>{
  console.log('这是定义的第二个中间件的简化模式');
  next()
})
// 定义一个路由
app.get('/user', (req, res) => {
  res.send('User page.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
