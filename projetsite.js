
$(".art div").click(function () {
  $(this).addClass('mot1')

});

<<<<<<< HEAD
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
=======
>>>>>>> daea2c72ae689b179a3423d5c45a596b8c297a9b

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


<<<<<<< HEAD
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
=======

var array = ['IMG_20180216_112811_204.jpg','IMG_20170901_135424_006.jpg','IMG_20170417_153919_279.jpg','IMG_20170423_140844_701.jpg','IMG_20170625_150515_502.jpg']
var compteur = 0
$(".bouton2").click(function(){
  compteur = compteur + 1
  if (compteur == 5){
    compteur = 0
  }
  $('#img2').attr('src',array[compteur])


});


/*
var array = ['archi3.jpg','archi1.jpg','archi2.jpg','dessin .jpg']
var compteur = 0
$(".bouton1").click(function(){
  compteur = compteur + 1
  if (compteur == 4){
    compteur = 0
  }
  $('#img1').attr('src',array[compteur])

});

*/

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
var array = ['large2.jpg','large7.jpg','originalwhi.jpg','IMG_20170423_140844_701.jpg','IMG_20170625_150515_502.jpg']
var compteur = 0
$(".button").click(function(){
  compteur = compteur + 1
  if (compteur == 5){
    compteur = 0
  }
  $('#photo1').attr('src',array[compteur])


});
>>>>>>> daea2c72ae689b179a3423d5c45a596b8c297a9b
