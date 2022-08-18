// 导入mysql模块
const mysql = require('mysql')

// 建立数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'my_db_01'
})

// db.query('select * from users', function(err,results){
//     if(err) return console.log(err.message)

//     console.log(results)
// })

// // 插入的数据
const user = { username: 'pink', password: '123456789' }
// // 执行的SQL语句

// const sqlStr = 'insert into users (username, password) values (?, ?)'

// db.query(sqlStr, [user.username, user.password], function (err, results) {
//     if (err) return console.log(err.message)

//     if (results.affectedRows === 1) {
//         console.log('插入成功')
//     }
// })

// 演示插入数据的便捷方式

// const sqlStr = 'insert into users set ?'

// db.query(sqlStr,user,function(err,results){
//     if(err) return console.log(err.message)
// })

// 演示更新用户数据的信息
// const SQLStr = 'update users set username=?,password=? where id=?'

const user1 = { username: 'pink2', password: '12345678', id: 4 }

// db.query(SQLStr, [user.id, user.username, user.password], function (err, results) {
//     if (err) return console.log(err.message)
// })

// 演示更新数据的简写形式
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr,[user1,user1.id],function(err,results){
//     if(err) return console.log(err.message)
// })

// 演示删除id为5的数据 (不安全)
// const sqlStr = 'delete from users where id=? '
// db.query(sqlStr, 4,function(err){
//     if(err) return console.log(err.message)
// })

// 标记删除（推介）
const sqlStr = 'update users set status=? where id=?'
const user2 = {status: 1,id: 1}

db.query(sqlStr,[user2.status,user2.id],function(err,results){
    if(err) return console.log(err.message)
})