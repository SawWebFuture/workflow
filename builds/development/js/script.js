$(function() {

$('.link').click(function(){
	var fromTop = 49;
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top  - fromTop 
    }, 500);
    return false;
});
	//$(".webThumb").height(Math.max.apply(null, $(".webThumb").map(function() { return $(this).height(); })));

	$('.carousel').carousel({
		
	});
	
	$(".navbar-nav li a").click(function(event) {
	$(".navbar-collapse").collapse('hide');
	});
	
	$('[data-toggle="tooltip"]').tooltip();
	
	$('[data-toggle="popover"]').popover();
	
	
});
