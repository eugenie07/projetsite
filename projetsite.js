
$(".art div").click(function () {
  $(this).addClass('mot1')

});


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



var array = ['IMG_20180216_112811_204.jpg','IMG_20170901_135424_006.jpg','IMG_20170417_153919_279.jpg','dessin .jpg']
var compteur = 0
$(".bouton").click(function(){
  compteur = compteur + 1
  if (compteur == 4){
    compteur = 0
  }
  $('#img').attr('src',array[compteur])

});

/*
function imageGallerie()
{
  var active = $('#gallerie.active');
  var next = (active.next().lengh > 0) ? active.next() : $('gallerie img:first');
      active.fadeOut(function(){
      active.removeClass('active');
      next.fadeIn().addClass('active');
    });
}

setInterval('imageGallerie()',2500);
*/
