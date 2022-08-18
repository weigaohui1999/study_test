const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    throw new Error('服务器法身了错误')
    res.send('Home Page!')
})

app.use((err,req,res,next)=>{
    res.send('Error!' + err.message)
})

app.listen(8082,()=>{
    console.log('http://127.0.0.1:8082')
})