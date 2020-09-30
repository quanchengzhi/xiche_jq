
$(function () {
    $('.toTop').on('click', function () {
        $('.mescroll').animate({ scrollTop: 0 }, 500);
        console.log(111)
    })


    $('.callToKefu').on('click', function () {
        console.log(211)
        $('.bgGray').removeClass('thisHide');
        $('.callKefu').removeClass('thisHide');
    })
    $('.realCancel').on('click', function () {
        $('.bgGray').removeClass('thisHide');
        $('.cancelOrder').removeClass('thisHide');
    })
    $('.callCancel').on('click', function () {
        $('.bgGray').addClass('thisHide');
        $('.callKefu').addClass('thisHide');
        $('.cancelOrder').addClass('thisHide');
    })
    var localCity = null;
  $('.hot div').on('click', function () {
    window.location.href = '../../index.html?localCity=' + $(this).text();
  })
  $('.container').on('click', 'li',function () {
    window.location.href = '../../index.html?localCity=' + $(this).children('p').text();
  })
  $('.city-list p').on('click', function () {
    window.location.href = '../../index.html?localCity=' + $(this).text();
  })
  $('#cityS').on('click', function () {
    var top = $(window).scrollTop();
    $(window).scrollTop($('.city-list p[name=' + $('.searchCity').val() + ']').offset().top)
  })
})  
