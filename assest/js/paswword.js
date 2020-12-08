$(document).ready(function(){
    $(".form-group input").focusin(function(){
$("label").addClass("transfomr-input");
    });
    $(".form-group input").focusout(function(){
    if($(this).val()!= ''){
        $("label").addClass("transfomr-input");
    }
    else{
        $("label").removeClass("transfomr-input");
    }
});
$(window).scroll(function(){
  var scrol=$(window).scrollTop(),
  dh=$(document).height(),
  dw=$(document).width();
 scrollPercent=(scrol / (dh + dw)) * 500;
  $("#progerspar").css('height',scrollPercent + '%');
    });
});