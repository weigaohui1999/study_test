import express from 'express'
import router from './router/user_router.js'

const app = express()

app.use('/api', router)

app.listen(80, () => {
    console.log('http://127.0.0.1')
})