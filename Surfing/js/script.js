//preloader

/*(function(){
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);
    function frame(){
        if (loading == 50) {
            clearInterval(id);
            window.open("index.html", "_self");
        }
        else{
            loading = loading + 1;
            if (loading == 40) {
                preload.style.animation = "fadeout 1s linear 3";
            }
         }
    }
})();*/

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('spiner-preloader').fadeOut(); // will first fade out the loading animation 
  $('#preload').delay(3000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(3000).css({'overflow':'visible'});
})

//slider

var totalItems = $('.slider').length;
var currentIndex = $('div.active').index() + 1;
$('.num').html('< '+ currentIndex +' / ' + totalItems +' >');

$('#carousel-example-generic').carousel({
    interval: 2000
});


$('#carousel-example-generic').bind('slid', function() {
    currentIndex = $('div.active').index() + 1;
   $('.num').html(''+currentIndex+'/'+totalItems+'');
});

$('#carousel-example-generic').on('slide.bs.carousel', function() {
    currentIndex = $('div.active').index() + 1;
   $('.num').html('< '+ currentIndex +' / ' + totalItems +' >');
});



//surfboard slider

$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 8000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});







