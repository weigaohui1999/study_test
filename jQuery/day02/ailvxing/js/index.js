!$(function () {
  $('.gotop').hide()

  $(window).scroll(function () {
    let top = $('html').scrollTop()
    if (top > 200) {
      $('.gotop').stop().fadeIn(500)
    } else {
      $('.gotop').stop().fadeOut(500)
    }
  })

  $('.gotop').click(function () {
    $('html').animate({ scrollTop: 0 }, 800)
  })

  $('.suggest').click(function () {
    $('.sugform').stop().slideDown(500)
  })

  $('.close').click(function () {
    $('.sugform').stop().slideUp(500)
  })
  function autoPlay() {
    let last = $('.wblist').last()
    let wbdesc = $('.wbdesc')
    wbdesc.prepend(last)
    let height = last.outerHeight(true)
    console.log(height)
    wbdesc.css('top', -height)
    wbdesc.delay(2000).animate({ top: 0 }, function () {
      autoPlay()
    })
  }
  autoPlay()
})
