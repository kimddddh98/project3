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
 
    $('header>ul>li').mouseover(function(){
        $(this).find('.sub').css('display','block')
    })
    $('header>ul>li').mouseout(function(){
        $(this).find('.sub').css('display','none')
    })
    //메인슬라이드ㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('#sound_text>div:first').hover(function () {
        $(this).stop().animate({ width: 100 + '%' })
        $('#sound_text>div:last').stop().animate({ width: 0 })
    }, function () {
        $(this).stop().animate({ width: 80 + '%' })
        $('#sound_text>div:last').stop().animate({ width: 20 + '%' })
    })
   
    var vIndex=0;
    var VideoText={
        one:{
            title:'Celebrity',
            artist:'아이유(IU)',
            album:'IU 5th Album "LILAC"'
        },
        two:{
            title:'태지',
            artist:'창모(CHANGMO)',
            album:'UNDERGROUND ROCKSTAR'
        }
    }
    $('#line p').eq(0).text(VideoText.one.title+' - '+VideoText.one.artist) 
            $('#line p').eq(1).text(VideoText.one.album)
    $('#next').click(function(){
        vIndex++ 
        $('#after').stop().css('width','0')

        if(vIndex>=$('video').length){
            vIndex=0
            $('#maincover img').eq(0).prop('src','img/main/videocover2.jpg')
            $('#sound_index span').eq(0).text('1')
            video2.pause()
            video1.play();
            $('#line p').eq(0).text(VideoText.one.title+' - '+VideoText.one.artist) 
            $('#line p').eq(1).text(VideoText.one.album) 
            bar(parseInt(video1.duration),parseInt(video1.currentTime) );
           


        }
        else{
            $('#maincover img').eq(0).prop('src','img/main/videocover.jpg')
            $('#sound_index span').eq(0).text('2')
            video1.pause()
            video2.play();
        $('#line p').eq(0).text(VideoText.two.title+' - '+VideoText.two.artist) 
        $('#line p').eq(1).text(VideoText.two.album) 

            bar(parseInt(video2.duration),parseInt(video2.currentTime) );

        }
        $('video').eq(vIndex-1).hide();
        $('video').eq(vIndex).fadeIn(500);
        $('.go').eq(0).css('display','block');
        $('.go').eq(1).css('display','none')
    });
    $('#prev').click(function(){
        vIndex-- 
        $('#after').stop().css('width','0')

        if(vIndex<=-1){
            vIndex=$('video').length-1
            $('#maincover img').eq(0).prop('src','img/main/videocover.jpg')
            $('#sound_index span').eq(0).text('2')
            video1.pause()
            video2.play();
            $('#line p').eq(0).text(VideoText.two.title+' - '+VideoText.two.artist) 
        $('#line p').eq(1).text(VideoText.two.album) 

            bar(parseInt(video2.duration),parseInt(video2.currentTime) );

        }
        else{
            $('#maincover img').eq(0).prop('src','img/main/videocover2.jpg')
            $('#sound_index span').eq(0).text('1');
            video2.pause()
            video1.play();
            $('#line p').eq(0).text(VideoText.one.title+' - '+VideoText.one.artist) 
            $('#line p').eq(1).text(VideoText.one.album) 
            bar(parseInt(video1.duration),parseInt(video1.currentTime) );

        }
        $('video').eq(vIndex-1).hide();
        $('video').eq(vIndex).fadeIn(500);
        $('.go').eq(0).css('display','block');
        $('.go').eq(1).css('display','none');
    });
    document.getElementsByClassName('go')[0].onclick=function(){
        if(vIndex==0){
            video1.pause();
        }
        else{
            video2.pause();
        }
        $('#after').stop();
        document.getElementsByClassName('go')[0].style.display='none'
        document.getElementsByClassName('go')[1].style.display='block'
    }
    document.getElementsByClassName('go')[1].onclick=function(){
        video1=document.getElementById('video1');
        video2=document.getElementById('video2');
        if(vIndex==0){
            if(parseInt(video1.duration)-parseInt(video1.currentTime)==0){
                bar(video1.duration,0)
                video1.play();
            }
            else{
                bar(parseInt(video1.duration),parseInt(video1.currentTime) );
                video1.play();
            }
        }
        else{
            if(parseInt(video2.duration)-parseInt(video2.currentTime)==0){
                bar(video2.duration,0)
                video2.play();
            }
            else{
                bar(parseInt(video2.duration),parseInt(video2.currentTime) );
                video2.play();
            }
        }
        
        
        document.getElementsByClassName('go')[1].style.display='none'
        document.getElementsByClassName('go')[0].style.display='block'
        
    }
    function bar(d,c){
        $('#after').animate({
            width:100+'%'
        },(d-c)*1000,'linear',function(){
            document.getElementsByClassName('go')[0].style.display='none';
            document.getElementsByClassName('go')[1].style.display='block';
            $('#after').css('width','0')

        })
    }
    bar(22,0);
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
                $('.sc ul li').eq(i).find('.txt').fadeIn()
                $('.sc ul li').eq(i).siblings().find('.txt').css('display','none');


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
                $('.sc ul li').eq(i).find('.txt').fadeIn()
                $('.sc ul li').eq(i).siblings().find('.txt').css('display','none');

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

    const chart1={
        title:'LOVE DIVE',
        artist:'IVE',
        album:'LOVE DIVE'
    }
    const chart2={
        title:'사랑인가봐',
        artist:'멜로망스',
        album:'사랑인가봐'
    }
    const chart3={
        title:'정이라고 하자',
        artist:'BIG Naughty',
        album:'정이라고 하자'
    }
    const chart4={
        title:'팡파레',
        artist:'다비치',
        album:'Season Note'
    }
    const chart5={
        title:'That That',
        artist:'싸이(PSY)',
        album:'싸다9'
    }
    const chart6={
        title:'Yet To Come',
        artist:'방탄소년단',
        album:'Proof'
    }
    const chart7={
        title:'One More Time',
        artist:'폴킴',
        album:'star'
    }
    const chart8={
        title:'	봄여름가을겨울',
        artist:'BIGBANG(빅뱅)',
        album:'봄여름가을겨울'
    }
    const chart9={
        title:'낭만교향곡',
        artist:'BIG Naughty ',
        album:'낭만'
    }
    const chart10={
        title:'TOMBOY',
        artist:'(여자)아이들',
        album:'I NEVER DIE'
    }
    // table 복제ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('.table').appendTo('.chart');
    $('tbody>tr>td').find('img[alt=1]').parent().siblings('.title').text(chart1.title)
    .siblings('.artist').text(chart1.artist)
    .siblings('.album').text(chart1.album)
    $('tbody>tr>td').find('img[alt=2]').parent().siblings('.title').text(chart2.title)
    .siblings('.artist').text(chart2.artist)
    .siblings('.album').text(chart2.album)
    $('tbody>tr>td').find('img[alt=3]').parent().siblings('.title').text(chart3.title)
    .siblings('.artist').text(chart3.artist)
    .siblings('.album').text(chart3.album)
    $('tbody>tr>td').find('img[alt=4]').parent().siblings('.title').text(chart4.title)
    .siblings('.artist').text(chart4.artist)
    .siblings('.album').text(chart4.album)
    $('tbody>tr>td').find('img[alt=5]').parent().siblings('.title').text(chart5.title)
    .siblings('.artist').text(chart5.artist)
    .siblings('.album').text(chart5.album)
    $('tbody>tr>td').find('img[alt=6]').parent().siblings('.title').text(chart6.title)
    .siblings('.artist').text(chart6.artist)
    .siblings('.album').text(chart6.album)
    $('tbody>tr>td').find('img[alt=7]').parent().siblings('.title').text(chart7.title)
    .siblings('.artist').text(chart7.artist)
    .siblings('.album').text(chart7.album)
    $('tbody>tr>td').find('img[alt=8]').parent().siblings('.title').text(chart8.title)
    .siblings('.artist').text(chart8.artist)
    .siblings('.album').text(chart8.album)
    $('tbody>tr>td').find('img[alt=9]').parent().siblings('.title').text(chart9.title)
    .siblings('.artist').text(chart9.artist)
    .siblings('.album').text(chart9.album)
    $('tbody>tr>td').find('img[alt=10]').parent().siblings('.title').text(chart10.title)
    .siblings('.artist').text(chart10.artist)
    .siblings('.album').text(chart10.album)
    $('.sc ul li').eq(2).css('display','block')
    $('.sc ul li').eq(2).siblings().find('.txt').css('display','none');
    $('.sc ul li').find('img[alt=1]').siblings('.txt').text(chart1.title+' - '+chart1.artist)
    $('.sc ul li').find('img[alt=2]').siblings('.txt').text(chart2.title+' - '+chart2.artist)
    $('.sc ul li').find('img[alt=3]').siblings('.txt').text(chart3.title+' - '+chart3.artist)
    $('.sc ul li').find('img[alt=4]').siblings('.txt').text(chart4.title+' - '+chart4.artist)
    $('.sc ul li').find('img[alt=5]').siblings('.txt').text(chart5.title+' - '+chart5.artist)
    


    //pd sliderㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    setInterval(nn, 5000)
    function nn() {
        var asd = $('#pd_prev>div:eq(3)').find('img').prop('src')
        var alt = $('#pd_prev>div:eq(3)').find('img').prop('alt')
        $('#pd_prev>div>div').remove()

        $('#change').css({ width: 30 + '%', opacity: 0.3 });
        $('#change img').prop('src', asd);
        $('#pd p').text(alt)
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
        var asd = $('#pd_prev>div:eq(1)').find('img').prop('src');
        var alt = $('#pd_prev>div:eq(3)').find('img').prop('alt');

        $('#pd_prev>div>div').remove();
        $('#change').css({ width: 30 + '%', opacity: 0.3 });
        $('#change img').prop('src', asd);
        $('#pd p').text(alt);

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
            // $('header').css({
            //     backgroundColor: rgba(16, 16, 16, 1)

            // })
            $('header').css('background-color','rgba(16,16,16,1)')
        }
        else{
            $('header').css('background-color','rgba(16,16,16,0.8)')
        }
    })
});

