function getCommentList() {
    $.ajax({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        success: function (res) {
            if (res.status !== 200) return false
            var rows = []
            $.each(res.data, function (index, item) {
                var str = '<li class="list-group-item"><span class="badge" style="background-color: #5bc0de;">评论时间：'+ item.time +'</span><span class="badge" style="background-color: #f0ad4e;">评论人：'+ item.username +'</span>'+ item.content +'</li > '

                rows.push(str)

            })

            $('.list-group').empty().append(rows.join(''))
        }
    })
}

getCommentList()

$(function(){
    $('form').submit(function(e){
        e.preventDefault()

        var str = $(this).serialize()

        $.post('http://www.liulongbin.top:3006/api/addcmt',str,function(res){
            if(res.status !== 201) return false

            getCommentList()
            $('form')[0].reset()
        })
    })
})