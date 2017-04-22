$(document).ready(function(){
    $(".info-detail-item-featured-property").hover(function(){
        $(this).css("opacity", 1);
    });
    $(".info-detail-item-featured-property").mouseleave(function(){
        $(this).css("opacity", 0);
    });
});