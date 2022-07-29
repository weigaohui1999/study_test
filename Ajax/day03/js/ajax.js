
/** 1.处理data
 * @param {data} 需要发送到服务器的参数
 * @return       返回拼接的查询字符串
 */

function resolveData(data) {
    var arr = []
    for (let k in data) {
        arr.push(k + '=' + data[k])
    }

    return arr.join('&')
}


/**
 * 封装请求接口函数，传入options
 * 处理data以及处理返回成功的函数
 * 
*/

function ajax(options) {
    var xhr = new XMLHttpRequest()

    // 把外界传回来的数据转为查询字符串
    var qs = resolveData(options.data)
    // 设置超时
    xhr.timeout = options.timeout
    // 超时的回调函数
    xhr.ontimeout = function(){
        alert('请求超时le')
    }

    // 判断请求的类型
    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-type', 'application/x-www-urlencoded')
        xhr.send(qs)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }

}