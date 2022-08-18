const express = require('express')

const router = express.Router()

router.get('/user/list',(req,res)=>{
    res.send('Get User List')
})

router.post('/user/add',(req,res)=>{
    res.send('Add New User')
})
module.exports = {
    router
}