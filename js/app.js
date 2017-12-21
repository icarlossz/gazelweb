$(document).ready(function(){
  $('.home-slider').bxSlider();
  $('.nuevos-slider').bxSlider({
		infiniteLoop: true,
	  minSlides: 4,
	  maxSlides: 4,
	  slideWidth: 300,
	  slideMargin: 10,
	  moveSlides: 1,
	  touchEnabled:true,
	  hideControlOnEnd: true,
	});
  $("[data-openTab]").click(function() {
	  // Add active class to the tab
	  var theTab = $(this).attr('data-openTab')
	  var tab = $(theTab)
	  var allTabs = $('.Tabs')

	  tab.toggleClass('active');

	  allTabs.each(function(i, e) {
	    tab[0] !== e && $(e).removeClass('active')
	  })
	  $(".invisible-closer").click(function(){ tab.removeClass('active') })
	});
	$("[data-outProduct]").click(function() {
  	var productID = $(this).attr('data-outProduct');
  	$(productID).addClass('invisible')
  });
});

