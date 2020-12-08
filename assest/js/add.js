$(document).ready(function(){
    $(window).scroll(function(){
  var scrol=$(window).scrollTop(),
  dh=$(document).height(),
  dw=$(document).width();
 scrollPercent=(scrol / (dh + dw)) * 310;
  $("#progerspar").css('height',scrollPercent + '%');
    });
    //errormesage
  
})