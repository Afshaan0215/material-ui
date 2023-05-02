$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
});


$(document).ready(function () {
	$('.navbar-nav>li>a').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});

$(document).ready(function () {
	$('#cards').owlCarousel({
		loop: false,
		margin: 20,
		nav: true,
		// rewind: true,
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		autoWidth: true,
		// autoplay: false,
		// autoplaySpeed: 100,
		// autoPlay: 20000,
		// center:true,
		responsive: {

			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
});

$(document).ready((function () {
	$('#sidenav-btn').click(function (e) {
		e.stopPropagation();
		$('.sidenav').toggleClass('active-btn');
		$('.main-body').toggleClass('active-body');
	});

	$('body,html').click(function (e) {
		$('.sidenav').removeClass('active-btn');
		$('.main-body').removeClass('active-body');
	});
}));

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
	if (checkList.classList.contains('visible'))
		checkList.classList.remove('visible');
	else
		checkList.classList.add('visible');
}

// var container = $('.table-height1'),
//     scrollTo = $('#center-tr');

// container.animate({
//     // scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
//     scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - (container.height()/2)
// });




// window.sr = ScrollReveal();

// sr.reveal('.home-title', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '110px',
// 	opacity: 0.3,
// 	delay: 0,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// 	// rotate: { x: 0, y: 10, z: 0 },
// });

// sr.reveal('.home-subtitle', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '100px',
// 	delay: 100,
// 	opacity: 0,
// });

// sr.reveal('.home-btn', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '100px',
// 	delay: 200,
// 	opacity: 0,
// });


// sr.reveal('.choose-title', {
// 	duration: 1500,
// 	origin: 'bottom',
// 	distance: '70px',
// 	viewFactor: 0.01,
// 	delay: 0,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });


// sr.reveal('.choose-content', {
// 	duration: 1900,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.01,
// 	delay: 100,
// 	opacity: 0.6,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });


// sr.reveal('.service-subtitle', {
// 	duration: 2500,
// 	origin: 'right',
// 	distance: '210px',
// 	viewFactor: 0.3,
//     delay: 0,
//     opacity: 0.7,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
