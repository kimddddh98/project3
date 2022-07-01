// window.location.reload=function(){
//     video1.play(bar(video1.duration,0))
// }

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
    function Chart(title,artist,album){
        this.title=title;
        this.artist=artist;
        this.album=album;
    }
    const chart1=new Chart('LOVE DIVE','IVE','LOVE DIVE')

    const chart2=new Chart('사랑인가봐','멜로망스','사랑인가봐')
    const chart3=new Chart('정이라고 하자','BIG Naughty','정이라고 하자')
    const chart4=new Chart('팡파레','다비치','Season Note')
    
    const chart5=new Chart('That That','싸이(PSY)','싸다9')
    const chart6=new Chart('Yet To Come','방탄소년단','Proof')
    const chart7=new Chart('One More Time','폴킴','star')
    
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
  


   
    // 스크롤이벤트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $(window).scroll(function () {
        var c = $('#sound_text').offset()
        var e = $(window).scrollTop()
      
        if (e > c.top) {
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
