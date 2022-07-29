; (function () {

  let $editTr = undefined

  function clear() {
    $('.dialog-wrap').fadeOut(function () {
      $('.form')[0].reset()
      $('.form span').text('')
    })
  }
  // 1.点击弹窗
  $('.add').click(function () {
    $('.title h3').val('新增')
    $editTr = undefined
    $('.dialog-wrap').fadeIn()

  })

  // 2.日期选择器
  $('.birthday').datepicker({
    language: 'zh-CN',
    autoHide: true
  })
  // 3.表单校验
  $('.form').validate({
    sendForm: false,
    description: {
      nickname: {
        required: '姓名不能为空！'
      },
      mobile: {
        required: '手机不能为空！',
        pattern: '手机格式有误！'
      },
      birthday: {
        required: '生日不能为空！'
      }
    },
    valid() {
      // 校验成功
      // 一次添加一个
      if ($editTr = undefined) {
        let $tr = $('tbody tr').first().clone()

        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()

        $tr.find('.td-name').text(nickname)
        $tr.find('.td-mobile').text(mobile)
        $tr.find('.td-birth').text(birthday)

        $('tbody').append($tr)
        $tr.show()
        clear()

      }else {
        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()

        $tr.find('.td-name').text(nickname)
        $tr.find('.td-mobile').text(mobile)
        $tr.find('.td-birth').text(birthday)
        clear()
      }

    }
  })

  // 4.点击取消
  $('.cancel').click(function () {
    clear()
  })

  // 5.点击关闭
  $('.close').click(function () {
    clear()
  })

  // 6.点击删除
  $('tbody').on('click', '.del', function () {
    let $tr = $(this).parent().parent()
    $tr.fadeOut(function () {
      $tr.remove()
    })
  })

  // 7.编辑
  $('tbody').on('click', '.edit', function () {
    $tr = $(this).parent().parent()

    let nickname = $tr.find('.td-name').text()
    let mobile = $tr.find('.td-mobile').text()
    let birthday = $tr.find('.td-birth').text()

    $('.title h3').val('编辑')
    $('.nickname').val(nickname)
    $('.mobile').val(mobile)
    $('.birthday').val(birthday)
    $('.dialog-wrap').fadeIn()

    $editTr = $tr
  })
})()
