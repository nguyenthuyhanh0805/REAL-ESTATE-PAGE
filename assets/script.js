$(document).ready(function(){
    var count= 0;
    $("#hamburger-icon").click(function(){
        if (count%2==0){
             $('.primary-nav').addClass('show-menu');
        }else{
            $('.primary-nav').removeClass('show-menu');
        }
       count +=1;
    });
    $('.featured-property-content').hover(function(){
        $(this).addClass('active')
    })
    $('.featured-property-content').mouseleave(function(){
        $(this).removeClass('active')
    })
   /* $(window).scroll(function(){
        debugger;
        var windowScroll = $(window).scrollTop();
        if(windowScroll>0){
            $('.main-menu').addClass('active')
        }else{
            $('.main-menu').removeClass('active')
        }
    })*/
});