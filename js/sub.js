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
    $('#mini>li>a').eq(3).css('color','red')
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
   
    // 스크롤이벤트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    var cW=document.getElementsByClassName('content_img')[0].clientWidth;
    $('.content_left').css({
        marginLeft:-cW+'px'
    })
    $('.content_right').css({
        marginLeft:cW+'px'
    })
    $('header').css('background-color','rgba(16,16,16,1)')
    $('.content_left').eq(0).animate({
        opacity: 1,
        marginLeft:0
    },1000)
    var e=$(window).scrollTop()
    $(window).scroll(function () {
        e = $(window).scrollTop()
        if($('#content5').offset().top<e){
            $('.content_right').eq(2).animate({
                opacity: 1,
                marginLeft:0
            },1000)
        }
        if($('#content4').offset().top<e){
            $('.content_left').eq(2).animate({
                opacity: 1,
                marginLeft:0
            },1000)
        } 
        if($('#content3').offset().top<e){
            $('.content_right').eq(1).animate({
                opacity: 1,
                marginLeft:0
            },1000)
        }    
        if($('#content2').offset().top<e){
            $('.content_left').eq(1).animate({
                opacity: 1,
                marginLeft:0
            },1000)
        }    
        if($('#content1').offset().top<e){
        $('.content_right').eq(0).animate({
            opacity: 1,
            marginLeft:0
        },1000)    
        }
        if(0<e){
            $('.content_left').eq(0).animate({
                opacity: 1,
                marginLeft:0
            },1000)
        }
    })

    //자동슬라이드ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    
    var autoS=document.getElementById('autoS')
    var li=document.querySelectorAll('#autoS li');
    var autoWidth=li[0].clientWidth;
    autoS.style.width=li.length*autoWidth+10+'px'
    window.addEventListener('resize',function(){
        let autoS=document.getElementById('autoS')
        let li=document.querySelectorAll('#autoS li');
        let autoWidth=li[0].clientWidth;
        autoS.style.width=li.length*autoWidth+10+'px'
    })
    function right(){
        let autoWidth=li[0].clientWidth;
        $('#autoS').animate({marginLeft:-autoWidth+'px'},1950,function(){
            $('#autoS li:first').appendTo('#autoS');
            $('#autoS').css('margin-left','0px')
        })
    }
    $('#autoS li').mouseover(function(){
        clearTimeout(start)
    })
    $('#autoS li').mouseout(function(){
        start=setInterval(right,2000)
    })
    start=setInterval(right,2000)

    $('#tap>ul>li>a').eq(0).click(function(){
        $('#mv').hide()
        $('#mv').css({right:-100+'vw'})
        $('#playList').hide()
        $('#playList').css({right:-100+'vw'})
        $('#content').show()
        $('#content').animate({right:0})
        $('#slider p').html('당신을 위한 추천 앨범')

    })
    $('#tap>ul>li>a').eq(1).click(function(){
        $('#content').hide()
        $('#content').css({right:-100+'vw'})
        $('#playList').hide()
        $('#playList').css({right:-100+'vw'})
        $('#mv').css('display','flex')
        $('#mv').animate({right:0});
        $('#slider p').html('당신을 위한 추천 M/V')
    })
    $('#tap>ul>li>a').eq(2).click(function(){
        $('#content').hide()
        $('#content').css({right:-100+'vw'})
        $('#mv').hide()
        $('#mv').css({right:-100+'vw'})
        $('#playList').css('display','flex')
        $('#playList').animate({right:0});
        $('#slider p').html('당신을 위한 추천 M/V')
    })
    $('#tap>ul>li>a').click(function(){
        $(this).css({color:'red',fontWeight:'bold'});
        $(this).parent().siblings().find('a').css({color:'#fff',fontWeight:'normal'});
    })

    $('#play span').click(function(){
        $('#play').hide()
        $('#play iframe').attr('src','')

    })
    $('.mvbox').click(function(){
        let so=$(this).attr('title')
        $('#play').css('display','flex')
        $('#play iframe').attr('src',so)
    })
    $('.mvbox').hover(function(){
        $(this).css('background-size','115%')
    },function(){
        $(this).css('background-size','cover')
    })
    // autoS.onclick=function(){
    //     s()
    // }
    // var ev
    // autoS.addEventListener('dragstart',function(e){
        
    //         $('#autoS').stop().animate({marginLeft:-autoWidth+'px'},function(){
    //             $('#autoS').css({marginLeft:0+'px'})
    //             $('#autoS li:first').appendTo('#autoS');
    //             })
    //         console.log(e.x)
    // })
    // autoS.addEventListener('dragend',function(){
    //     // $('#autoS').css({marginLeft:600})
    //     if(ev>=autoWidth){
    //         let autoWidth=li[0].clientWidth;
    //     $('#autoS').css({marginLeft:-autoWidth+'px'})
    //     $('#autoS li:first').appendTo('#autoS');
    //     $('#autoS').css('margin-left','0px')
    //     ev=0
    //     }
    // })
});

    