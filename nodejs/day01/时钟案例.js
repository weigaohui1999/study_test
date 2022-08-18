const { LOADIPHLPAPI } = require('dns')
const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'./时钟素材.html'),'utf-8', function(err,dataStr){
    if(err){
        return console.log('文件读取失败，原因是：', err.message)
    }
    console.log('文件读取成功')
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
})

// 处理css

function resolveCss(htmlStr){
    const c1 = regStyle.exec(htmlStr)
    
    const newCss = c1[0].replace('<style>','').replace('</style>','')
    // console.log(newCss)

    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCss,'utf-8',function(err){
        if(err){
            return console.log('写入文件失败，原因为',err.message);
        }
        console.log('成功')
    })
}

function resolveJs(htmlStr){
    const j1 = regScript.exec(htmlStr)

    const newJs = j1[0].replace('<script>','').replace('</script>','')

    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJs,function(err){
        if(err){
            return console.log('写入文件失败，原因为：', err.message);
        }
        console.log('成功');
    })
}

function resolveHtml(htmlStr){
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript,'<script src="./index.js"></script>')
    // console.log(newHtml)
    fs.writeFile(path.join(__dirname,'./clock/index.html'), newHtml,function(err){
        if(err){
            return console.log('写入文件失败，原因为：', err.message);
        }
        console.log('成功')
    })
}
