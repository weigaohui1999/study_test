const express = require('express')

const app = express()
// 导入自定义解析表单的中间件
const customBodyParser = require('./14.custom-body-parser')
app.use(customBodyParser)

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})

