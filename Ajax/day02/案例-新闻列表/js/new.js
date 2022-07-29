$(function(){
    template.defaults.imports.dataFormat = function(data){
        var dr = new Date(data)

        var y = dr.getFullYear()
        var m = dr.getMonth() + 1
        var d = dr.getDate()

        return y + '-' + m + '-' + d
    }

    function getNews(){
        $.get('http://liulongbin.top:3006/api/news',function(res){
            if(res.status !== 200) return false
            console.log(res)
            res.data.forEach((item) => {
                item.tags = item.tags.split(',')
            });
            console.log(res)
            var str = template('news', res)
            $('#news-list').html(str)
        })
    }

    getNews()
})

