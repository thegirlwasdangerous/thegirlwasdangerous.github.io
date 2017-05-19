var swiper = new Swiper('.swiper-container1', {
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
var swiper2 = new Swiper('.swiper-container2', {	        
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
var swiper3 = new Swiper('.swiper-container3', {	
    nextButton: '.arrow-next',
    prevButton: '.arrow-prev',
});

$(document).on("click", ".mobileMenu", function( event ){
	$(".mobileMenu").toggleClass("opened");
	$(".navigate").toggleClass("opened");
});

function mobileBut() {
	if (window.matchMedia('(max-width: 767px)').matches) {
		$('.logo_wrap').children().detach().appendTo('.toLogoWrap');
	} else{
		$('.toLogoWrap').children().detach().prependTo('.logo_wrap');
	}
}
mobileBut();
$(window).resize(function() {
	mobileBut();
})