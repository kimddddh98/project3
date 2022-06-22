$(function () {
    // svg배경ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    function ani() {
        for (var i = 0; i < $('path').length; i++) {
            $('path').delay(1000).eq(i).animate({ opacity: 1 }, 1000)
                .animate({ opacity: 0.4 }, 1000)
        }
    }
    ani();
    setInterval(ani, 18000)
    //메인슬라이드ㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('#sound_text>div:first').hover(function () {
        $(this).stop().animate({ width: 100 + '%' })
        $('#sound_text>div:last').stop().animate({ width: 0 })
    }, function () {
        $(this).stop().animate({ width: 80 + '%' })
        $('#sound_text>div:last').stop().animate({ width: 20 + '%' })
    })

    //차트메뉴 슬라이드다운ㅡㅡㅡㅡㅡㅡㅡㅡ
    $('#container_m>div').on('click', function () {
        var index = $(this).index()
        $('.fadein').css('display', 'none');
        $('.fadein').eq(index).slideDown(1000).css('display', 'flex')
        $(this).css('background', 'rgba(16,16,16,0.8)').
            siblings().css('background', 'rgba(250,250,250,0.2)')
    })
        .eq(0).css('background', 'rgba(16,16,16,0.8)')

    // 차트 슬라이드,ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    for (var i = 1; i < 6; i++) {
        $('.slider>ul>li').removeClass('item' + i)
    }
    $('.slider>ul>li').addClass('item3');
    $('.item3').eq(2).css('z-index', '4')

    $('.next').click(function () {
        var x = $('.next').index(this)
        $('.slider').eq(x).find('li:first').appendTo($('.slider').eq(x).find('ul'))
        for (var i = 1; i <= $('.slider').eq(x).find('li').length; i++) {
            $('.slider').eq(x).find('.item' + i).removeClass('item' + i)
            $('.slider').eq(x).find('li').eq(i - 1).toggleClass('item' + i)
            if (i == 2) {
                $('.slider').eq(x).find('li').eq(i).css('top', '50%')
            }
        }
    })

    $('.prev').click(function () {
        var y = $('.prev').index(this)
        $('.slider').eq(y).find('li:last').prependTo($('.slider').eq(y).find('ul'))
        for (var i = 1; i <= $('.slider').eq(y).find('li').length; i++) {
            $('.slider').eq(y).find('.item' + i).removeClass('item' + i)
            $('.slider').eq(y).find('li').eq(i - 1).toggleClass('item' + i)
            if (i == 2) {
                $('.slider').eq(y).find('li').eq(i).css('top', '50%')
            }
        }
    })


    // #full 호버효과ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('#full>div').mouseover(function () {
        $(this).siblings().children('div').css({ width: 0, height: 0 })
        $(this).css({
            opacity: 1,
            filter: 'none'
        })
            .children('').css({ opacity: 1 })
            .end().children('div').css({ width: 300, height: 300 })

        $(this).siblings().css({
            opacity: 0.8,
            filter: 'grayscale(50%)'
        })
            .end().siblings().children().css({ opacity: 0 })
    })


    // table 복제ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('.table').appendTo('.chart')

    //pd sliderㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    setInterval(nn, 5000)
    function nn() {
        var asd = $('#pd_prev>div:eq(3)').find('img').prop('src')
        $('#pd_prev>div>div').remove()

        $('#change').css({ width: 30 + '%', opacity: 0.3 });
        $('#change img').prop('src', asd)
        $('#change').stop().animate({
            width: 100 + '%', opacity: 1
        }, 500);
        $('#pd_prev>div:first').appendTo('#pd_prev');

        $('#pd_prev>div').eq(3).append('<div class="aa"></div>')
        $('#pd_prev>div').eq(1).append('<div class="bb"></div>')
        $('.aa').click(function () {
            nn();
        })
        $('.bb').click(function () {
            bb();
        })
        $('#pd_prev>div').even().css({ width: 0 });
        $('#pd_prev>div').odd().css({ width: 100 + '%' });
    }
    function bb() {
        var asd = $('#pd_prev>div:eq(1)').find('img').prop('src')
        $('#pd_prev>div>div').remove()
        $('#change').css({ width: 30 + '%', opacity: 0.3 });
        $('#change img').prop('src', asd)
        $('#change').stop().animate({
            width: 100 + '%', opacity: 1
        }, 500);
        $('#pd_prev>div:last').prependTo('#pd_prev');
        $('#pd_prev>div').eq(3).append('<div class="aa"></div>')

        $('#pd_prev>div').eq(1).append('<div class="bb"></div>')
        $('.bb').click(function () {
            bb();
        })
        $('.aa').click(function () {
            nn();
        })
        $('#pd_prev>div').even().css({ width: 0 });
        $('#pd_prev>div').odd().css({ width: 100 + '%' });
    }
    $('#pd_prev>div').eq(3).append('<div class="aa"></div>')
    $('#pd_prev>div').eq(1).append('<div class="bb"></div>')

    $('.aa').click(function () {
        nn();
    })
    $('.bb').click(function () {
        bb();
    })
    $('#pd_prev>div').even().css({ width: 0 })
    // 스크롤이벤트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $(window).scroll(function () {
        var c = $('#sound_text').offset()
        var e = $(window).scrollTop()
        var chart = $('#container_c').offset()
        if (e > chart.top - 500) {
            $('.slider>ul>li').removeClass('item3');
            for (var i = 0; i < 5; i++) {
                $('.slider>ul>li').eq(i).addClass('item' + (i + 1))
            }
            $('.item3').css('top', '50%');
        }
        else if (e > c.top) {
            $('header').css({
                opacity: 1
            })
        }
        else {
            $('header').css({
                opacity: 0.8
            })
        }
    })
});

