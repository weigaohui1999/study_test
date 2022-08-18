const express = require('express')
const db = require('../db/index')
const bcrypt = require('bcryptjs')

// 注册用户的处理函数
exports.regUser = (req, res) => {
    const userinfo = req.body

    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }

    const sqlStr = 'select * from ev_users where username=?'

    db.query(sqlStr, [userinfo.username], function (err, results) {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }

        if (results.length > 0) {
            return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
        }

        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

    })

    const sql = 'insert into ev_users set ?'
    db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }

        if (results.length > 0) {
            return res.send({ status: 1, message: '注册用户失败，请稍后再试！！' })
        }

        res.send({ status: 0, message: '注册成功！' })

    })
}

// 登录的处理函数
exports.login = (req, res) => {
    res.send('login OK')
}