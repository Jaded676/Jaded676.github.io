$(window).scroll(function() {
  if ($("#menu").offset().top > 56) {
      $("#menu").addClass("menu_background_inverse");
  } else {
      $("#menu").removeClass("menu_background_inverse");
  }
});

$(document).ready(function(){

  $('.slider4').bxSlider({
    slideWidth: 318,
    minSlides: 4,
    maxSlides: 6,
    moveSlides: 1,
    slideMargin: 10,
 //    nextSelector: '#slider-next',
 // prevSelector: '#slider-prev',
  // controls: true,
   pager: false//,
 // nextText: '<img src="http://i.imgur.com/TZDsPC0.png" height="25" width="25"/>',
 // prevText: '<img src="http://i.imgur.com/AKjTWvT.png" height="25" width="25"/>'
//         nextSelector: '#slider-next',
// prevSelector: '#slider-prev',
// nextText: 'Onward →',
// prevText: '← Go back'

  });

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

$(".nav_menu_a").click(function(e) {
    e.preventDefault();
$('html, body').animate({
    scrollTop: $(".nosotros").offset().top
}, 2000);
});

$(".nav_menu_b").click(function(e) {
    e.preventDefault();
$('html, body').animate({
    scrollTop: $(".planes").offset().top
}, 2000);
});

$(".nav_menu_c").click(function(e) {
e.preventDefault();
$('html, body').animate({
    scrollTop: $(".galeria").offset().top
}, 2000);
});

$(".nav_menu_d").click(function(e) {
e.preventDefault();
$('html, body').animate({
    scrollTop: $(".categorias").offset().top
}, 2000);
});

$(".nav_menu_e").click(function(e) {
e.preventDefault();
$('html, body').animate({
    scrollTop: $(".contacto").offset().top
}, 2000);
});

$('.responsive-tabs').responsiveTabs({
  accordionOn: ['xs', 'sm'] // xs, sm, md, lg
});

});
