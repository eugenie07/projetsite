
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

var mouseX, mouseY, opacity = 0;
$(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    if (opacity < 1)
    {
      opacity = (mouseY / 400);
      opacity = opacity > 1 ? 1 : opacity;
      $('h3').css("opacity", opacity);
    }
}).mouseover();


/*
var mouseX, mouseY, width = 300, height = 300;
$(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    if (height < 400)
    {
      height = (mouseY, mouseX / 400);
      height = height > 1 ? 1: height;
      $('.art div').css("height", height);
    }
    if (width < 400)
    {
      width = (mouseY, mouseX / 400);
      width = width > 1 ? 1 : width;
      $('.art div').css("width", width);
    }
}).mouseover();
*/
