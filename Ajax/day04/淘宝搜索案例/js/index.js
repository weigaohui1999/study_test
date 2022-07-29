$(function () {
    /**
     * 输入框的防抖
     * 1.定义延时器
     * 2.定义防抖的函数
     * 3.清空timer
     * 
    */
    //  1.定义延时器
    var timer = null
    // 定义缓存搜索的列表
    var cachObj = []
    // 2.定义防抖的函数
    function debounceSearch(value) {
        timer = setTimeout(function () {

            getSuggestList(value)

        }, 500);
    }

    $('.ipt').on('keyup', function () {
        // 3.清空timer
        clearTimeout(timer)

        var value = $(this).val().trim()
        if (value.length <= 0) return $('#suggest-list').empty().hide()

        // 先判断缓存里面是否有数据
        if (cachObj[value]) {
            return renderSuggestList(cachObj[va])
        }

        debounceSearch(value)
    })

    function getSuggestList(kw) {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?q=' + kw,
            dataType: 'jsonp',
            success: function (res) {
                renderSuggestList(res)

            }
        })
    }
    function renderSuggestList(res) {
        if (res.result.length <= 0) {
            return $('#suggest-list').empty().hide()
        }

        var str = template('tpl', res)
        $('#suggest-list').html(str).show()

        // 1.获取用户输入的内容，单做键
        var k = $('.ipt').val().trim()
        // 2.将数据作为值。进行缓存
        cachObj[k] = res

    }

    // 没有使用节流
    // var angel = $('.angel')

    // $(document).on('mousemove',function(e){
    //     angel.css('left',e.pageX + 'px').css('top',e.pageY + 'px')
    // })

    /**
     * 使用节流阀
     * 1.定义一个timer1节流阀
     * 2.开启延时器
     * 3.判断节流阀是否没空
    */
    //1.  定义节流阀  
    var timer1 = null
    //2. 开始延时器
    $(document).on('mousemove', function (e) {
        // 3.判断节流阀是否为空，如果为空执行下一步操作
        if (timer1 = null) return
        timer = setTimeout(function () {
            $('.angel').css('left',e.pageX + 'px').css('top',e.pageY + 'px')
        },100)
    })

})

