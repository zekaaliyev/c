const opener = document.querySelectorAll(".left .opener");
const cont = document.querySelectorAll(".left .content");
const arrow = document.querySelectorAll(".left .opener i");

function dropdown(open, content , icon ){
	for (let i = 0; i < open.length; i++) {
		open[i].addEventListener("click", function(){
			content[i].classList.toggle("content-active");
			icon[i].classList.toggle("rotate");
		});	
	}
}
dropdown( opener, cont,  arrow );


const swiper = new Swiper(".box .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar"
    // }
  });
  
$(".ad_transa").click(function(){
    $("#transa_noua").show();
});
$(document).on('click', function(){
    $('#transa_noua').hide();
});
$('.ad_transa, #transa_noua').on('click', function(e){
    e.stopPropagation();
});

$(".ad_transa2").click(function(){
    $("#transa_noua2").show();
});
$(document).on('click', function(){
    $('#transa_noua2').hide();
});
$('.ad_transa2, #transa_noua2').on('click', function(e){
    e.stopPropagation();
});

$(".ad_transa2").on('click', function(){
    $('#transa_noua').hide();
});
$(".ad_transa").on('click', function(){
    $('#transa_noua2').hide();
});



$(".button").on('click', function(){
    $('.overflow').fadeIn( "fast");
});
$(".overflow").on('click', function(){
    $('.overflow').hide();
});
$('.modal').on('click', function(e){
    e.stopPropagation();
});

$(".modal_close").on('click', function(){
    $('.overflow').hide();
});


  $(".filter_button").on('click', function(){
    $('.left').toggleClass( "active" );
});
$(".filter_button").on('click', function(){
    $('.left_overlay').toggleClass( "active" );
});
$(".left_overlay").on('click', function(){
    $('.left').toggleClass( "active" );
    $('.left_overlay').toggleClass( "active" );
});

$(".left_close i").on('click', function(){
    $('.left').toggleClass( "active" );
    $('.left_overlay').toggleClass( "active" )
});