$(function () {

    resetui()

    $('.input_sub').on('click', function () {

        var text = $('.input_txt').val().trim()

        if (text.length <= 0) {
            return $('input_txt').val('')
        }

        $('.talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span> ' + text + '</span></li>')

        $('.input_txt').val('')

        resetui()

        getMsg(text)
    })

    function getMsg(text) {
        $.ajax({
            type: 'get',
            url: 'http://ajax.frontend.itheima.net:3006/api/robot',
            data: {
                spoken: text
            },
            success: function (res) {
                if (res.message === 'success') {
                    var msg = res.data.info.text

                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')

                    resetui()

                    getVideo(msg)
                }
            }
        })
    }


    function getVideo() {
        $.ajax({
            type: 'get',
            url: 'http://ajax.frontend.itheima.net:3006/api/synthesize',
            data: { text: text },
            success: function (res) {
                if (res.status === 200) {
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }

    $('.input_sub').on('keyup', function(e){
        if(e.keycode === '11'){
            $('.input_sub').click()
        }
    })
})