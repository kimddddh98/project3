// window.location.reload=function(){
//     video1.play(bar(video1.duration,0))
// }

$(function () {
    let today=new Date();
        let year=today.getFullYear();
        let month=today.getMonth()+1;
        let date=today.getDate();
        let time=today.getHours();
        $('.year').text(year)
        $('.month').text(month)
        $('.date').text(date)
        if(time>18 || time<9){
        $('.time').text('18:00 기준')
        }
        else{
        $('.time').text(time+':00 기준')
        }
    // svg배경ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    function ani() {
        for (var i = 0; i < $('path').length; i++) {
            $('path').delay(1000).eq(i).animate({ opacity: 1 }, 1000)
                .animate({ opacity: 0.4 }, 1000)
        }
    }
    ani();
    setInterval(ani, 18000)
 
    $('#mainmenu>li').mouseover(function(){
        $(this).find('.sub').css('display','block')
    })
    $('#mainmenu>li').mouseout(function(){
        $(this).find('.sub').css('display','none')
    })
    $('#mini>li').click(function(){
        if($(this).find('.mini_sub').css('display')=='block'){
        $('.mini_sub').stop().slideUp();
        }
        else{
            $('.mini_sub').stop().slideUp();
            $(this).find('.mini_sub').stop().slideDown();
        }
    })
    $('#click_menu').click(function(){
        if($('#mini').css('right')=='0px'){

            $('#mini').stop().animate({right:-100+'vw'},500,function(){
            $('.mini_sub').css('display','none')
            $('#mini').css('display','none')

            })
        }
        else{
            $('#mini').css('display','flex')
            $('#down').stop().animate({top:-20+'vh'},500,function(){
                $('#down').css('display','none')
                })
            $('#mini').stop().animate({right:0},500)

        }
    })
    $('#click_search').click(function(){
        if($('#down').css('top')=='80px'){
            $('#down').stop().animate({top:-20+'vh'},500,function(){
            $('#down').css('display','none')
            })
        }
        else if($('#down').css('top')=='120px'){
            $('#down').stop().animate({top:-20+'vh'},500,function(){
                $('#down').css('display','none')
                })
        }
        
        else{
            if(window.matchMedia("(max-width: 1299px)").matches){
                $('#down').stop().animate({top:80+'px'})
            }
            else{
                $('#down').stop().animate({top:120+'px'})
            } 
            $('#mini').stop().animate({right:-100+'vw'},500,function(){
                $('.mini_sub').css('display','none')
                $('#mini').css('display','none')
    
                })
            $('#down').css('display','flex')
        }
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

    video1.play(bar(22,0))
    //차트메뉴 슬라이드다운ㅡㅡㅡㅡㅡㅡㅡㅡ
    $('#container_m>div').on('click', function () {
        var index = $(this).index()
        $('.fadein').css('display', 'none');
        $('.fadein').eq(index).stop().slideDown(1000).css('display', 'flex')
        $(this).css('background', 'rgba(16,16,16,0.8)')
        .siblings().css('background', 'rgba(250,250,250,0.2)')
    })
    $('#container_m>div').eq(0).css('background', 'rgba(16,16,16,0.8)')

    // 차트 슬라이드,ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    // for (var i = 1; i < 6; i++) {
    //     $('.slider>ul>li').removeClass('item' + i)
    // }
    // $('.slider>ul>li').addClass('item3');
    // $('.item3').eq(2).css('z-index', '4')
   
    $('.next').click(function () {
        var x = $('.next').index(this)
        $('.slider').eq(x).find('li:first').stop().appendTo($('.slider').eq(x).find('ul'))
        $('.slider').eq(x).find('li:last').stop().animate({display:'none'},500,function(){
            $('.slider').eq(x).find('li:last').animate({display:'block'},500)
        })
        for (var i = 1; i <= $('.slider').eq(x).find('li').length; i++) {
            $('.slider').eq(x).find('.item' + i).removeClass('item' + i)
            $('.slider').eq(x).find('li').eq(i - 1).toggleClass('item' + i)
            if (i == 2) {
                $('.slider').eq(x).find('li').eq(i).css('top', '50%')
            }

        }
        // $('.slider').eq(x).find('li:last').css('display','block')

        $('.item3').find($('.txt')).fadeIn()
        $('.item3').siblings().find($('.txt')).fadeOut();
    })
    $('.sc ul').find('img[alt=1]').prop('src','img/main/chart1.jpg')
    $('.sc ul').find('img[alt=2]').prop('src','img/main/chart2.jpg')
    $('.sc ul').find('img[alt=3]').prop('src','img/main/chart3.jpg')
    $('.sc ul').find('img[alt=4]').prop('src','img/main/chart4.jpg')
    $('.sc ul').find('img[alt=5]').prop('src','img/main/chart5.jpg')
    $('.prev').click(function () {
        var y = $('.prev').index(this)
        $('.slider').eq(y).find('li:last').stop().prependTo($('.slider').eq(y).find('ul'))
        $('.slider').eq(y).find('li:first').stop().animate({display:'none'},500,function(){
            $('.slider').eq(y).find('li:first').animate({display:'block'},500)
        })
        for (var i = 1; i <= $('.slider').eq(y).find('li').length; i++) {
            $('.slider').eq(y).find('.item' + i).removeClass('item' + i)
            $('.slider').eq(y).find('li').eq(i - 1).toggleClass('item' + i)
            if (i == 2) {
                $('.slider').eq(y).find('li').eq(i).css('top', '50%')
            }
        }
        $('.item3').find($('.txt')).fadeIn()
        $('.item3').siblings().find($('.txt')).fadeOut();

    })
    $('.item3').find($('.txt')).show()
    $('.item3').siblings().find($('.txt')).hide();
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
    // function Chart(title,artist,album){
    //     this.title=title;
    //     this.artist=artist;
    //     this.album=album;
    // }
    $.ajax({
        url:"~/../js/indexJson.json",
        dataType:"json",
    })
    .done(function(data){
        console.log(data)
        for(let i=0;i<data.length;i++){
            $('tbody>tr>td').find(`img[alt=${i+1}]`).parent().siblings('.title').text(data[i].title)
            .siblings('.artist').text(data[i].artist)
            .siblings('.album').text(data[i].album);
            $('.sc ul li').find(`img[alt=${i+1}]`).siblings('.txt').text(data[i].title+' - '+data[i].artist)
        }
    })
    // table 복제ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('.table').appendTo('.chart');
    
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
