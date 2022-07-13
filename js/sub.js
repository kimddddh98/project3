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
        $('#slider p').html('당신을 위한 추천 Play-List')
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
    const imgUrl1=['url("~/../img/sub/list1_1.jpg")','url("~/../img/sub/content4.jpg")','url("~/../img/sub/list1_2.jpg")']
    const imgUrl2=['url(~/../img/sub/pd4.jpg)',' url(~/../img/sub/list2_2.jpg)', 'url(~/../img/sub/list2_3.jpg)']
    const imgUrl3=['url(~/../img/sub/pd2.jpg)',' url(~/../img/sub/list3_2.jpg)', 'url(~/../img/sub/list3_3.jpg)']
    const imgUrl4=['url(~/../img/sub/pd5.jpg)',' url(~/../img/sub/list4-2.jpg)', 'url(~/../img/sub/list4-3.jpg)']
    const imgUrl5=['url(~/../img/sub/pd1.jpg)',' url(~/../img/sub/list5_2.jpg)', 'url(~/../img/sub/list5_3.jpg)']
    const imgUrl6=['url(~/../img/sub/content5.jpg)',' url(~/../img/sub/list6_2.jpg)', 'url(~/../img/sub/list6_3.jpg)']
    function arrpush1(){
        imgUrl1.push(imgUrl1[0]);
        imgUrl1.shift();
    }
    function arrpush2(){
        imgUrl2.push(imgUrl2[0]);
        imgUrl2.shift();
    }
    function arrpush3(){
        imgUrl3.push(imgUrl3[0]);
        imgUrl3.shift();
    }
    function arrpush4(){
        imgUrl4.push(imgUrl4[0]);
        imgUrl4.shift();
    }
    function arrpush5(){
        imgUrl5.push(imgUrl5[0]);
        imgUrl5.shift();
    }
    function arrpush6(){
        imgUrl6.push(imgUrl6[0]);
        imgUrl6.shift();
    }
    
    const listbox1=document.getElementById('listbox1');
    // const box9='1'
    listbox1.addEventListener('mouseover',function(){
        imgUrl1.push(imgUrl1[0]);
        imgUrl1.shift();
        listbox1.style.backgroundImage= imgUrl1[0]+','+imgUrl1[1]+','+imgUrl1[2]
    })
    // $('#listbox1').mouseover(function(){
    //     // arrpush1();        
    //     imgUrl1.push(imgUrl1[0]);
    //     imgUrl1.shift();
    //     console.log($(this).css)   
    //     $(this).stop().css('background-image',imgUrl1[0]+','+imgUrl1[1]+','+imgUrl1[2])
    // })
    $('#listbox2').mouseover(function(){
        arrpush2();          
        $(this).stop().css('background-image',imgUrl2[0]+','+imgUrl2[1]+','+imgUrl2[2])
    })
    $('#listbox3').mouseover(function(){
        arrpush3();            
        $(this).stop().css('background-image',imgUrl3[0]+','+imgUrl3[1]+','+imgUrl3[2])
    })
    $('#listbox4').mouseover(function(){
        arrpush4();            
        $(this).stop().css('background-image',imgUrl4[0]+','+imgUrl4[1]+','+imgUrl4[2])
    })
    $('#listbox5').mouseover(function(){
        arrpush5();            
        $(this).stop().css('background-image',imgUrl5[0]+','+imgUrl5[1]+','+imgUrl5[2])
    })
    $('#listbox6').mouseover(function(){
        arrpush6();            
        $(this).stop().css('background-image',imgUrl6[0]+','+imgUrl6[1]+','+imgUrl6[2])
    })
});

    