$(document).ready(function(){
	$('.gallery .row').isotope({
		itemSelector: '.khoi'
	});


	$('.nutscroll').click(function(event) {
		$('html,body').animate({scrollTop: $(this).offset().top},1000);
	
	});

	$(window).scroll(function(event) {
		var vitri = $('body,html').scrollTop();

		if (vitri > 200) {
			$('.menutop.fixed-top').addClass('bienhinh');
			$('li.nav-item a').addClass('black');
			$('a.navbar-brand').addClass('black');
		}
		else
		{
			$('.menutop.fixed-top').removeClass('bienhinh');
			$('li.nav-item a').removeClass('black');
			$('a.navbar-brand').removeClass('black');
		}
	
	});





	$('.navbar ul li a').click(function(event) {

		var gacon = $('.navbar ul li a');
		
		
		for (var i = 0; i < gacon.length; i++) {
		 $(gacon[i]).removeClass('blue');
		}

		$(this).addClass('blue');

		var vitritoado = $(this).attr('href');

		var toado = (($(vitritoado).offset().top)-70);
	
		

		$('html,body').animate({scrollTop: toado});
		return false;

	});

	$('.khoi a').fancybox();
})