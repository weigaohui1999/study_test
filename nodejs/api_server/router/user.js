const express = require('express')
const userHander = require('../router_handler/user')
const router = express.Router()

router.post('/reguser',userHander.regUser)

router.post('/login',userHander.login)

module.exports = router