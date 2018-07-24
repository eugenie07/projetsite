
$(".art div").click(function () {
  $(this).addClass('mot1')

});

/*
$(function(){
  $('h3').hide();
    if($('h3').mousemove()){
      $('h3').fadeIn(3000);
    }else{
      $('h3').hide();
    }
});
*/

var mouseX, mouseY;
$(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    var opacity = (mouseY / 400);
    opacity = opacity > 1 ? 1 : opacity;
     $('h3').css("opacity", opacity);
     sss
    console.log("mouse position logged at pos X" + mouseX + " Y " + mouseY);
}).mouseover();
