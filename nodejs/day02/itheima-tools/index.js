// 这是包的入口文件
const dataFormat = require('./dataFormat')

const htmlEscape = require('./htmlEscape')

module.exports = {
    ...dataFormat,
    ...htmlEscape
}