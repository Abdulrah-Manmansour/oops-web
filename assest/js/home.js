$(document).ready(function(){
    $(".home").height($(window).height())
    $(window).resize(function(){
       $(".home").height($(window).height());
    });
    $(window).scroll(function(){
      var scrol=$(window).scrollTop(),
      dh=$(document).height(),
      dw=$(document).width();
      scrollPercent=(scrol / (dh - dw)) * 106;
      $("#progerspar").css('height',scrollPercent + '%');
        });
 });