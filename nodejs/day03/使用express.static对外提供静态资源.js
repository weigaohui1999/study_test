const express = require('express')

const app = express()
// 托管静态资源
app.use(express.static('./clock'))
// 托管多个静态资源目录
app.use('/node',express.static('./node_modules'))

app.listen(8081,()=>{
    console.log('http://127.0.0.1:8081');
})