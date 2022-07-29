; (function () {
  // 新增
  function count() {
    $('.todo-count strong').text($('.todo-list li').val().length)
  }

  $('#addTodo').keyup(function (e) {
    if (e.keyCode == 13) {
      let value = $(this).val()
      if (value !== '') {
        $('.todo-list').append(`
        <li style="display:none">
          <div class="view">
            <label>${value}</label>
            <button class="destroy"></button>
          </div>
        </li>
        `)
        $('.todo-list li').last().slideDown(
          count()
        )
        $(this).val('')
      }
    }
  })

  // 删除
  $('.tode-list').on('click', '.destroy', function () {
    let li = $(this).parent().parent()
    li.fadeOut(function () {
      $(this).remove()
      count()
    })
  })


})()
