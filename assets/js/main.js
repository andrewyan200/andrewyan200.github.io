/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
	

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

				$('#three').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

				$('#four').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);

// Signature attempt 2

function animatePath(pathname, animation) {
	var path = document.querySelector(pathname);
	var length = path.getTotalLength();
	// Clear any previous transition
	path.style.transition = path.style.WebkitTransition =
		'none';
	// Set up the starting positions
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition =
		animation;
	// Go!
	path.style.strokeDashoffset = '0';
}

// Signature

// Create the observers
const observerDesktop = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const signature1 = document.querySelector(".signature1");
		const signature2 = document.querySelector(".signature2");
		const signature3 = document.querySelector(".signature3");
	
		if (entry.isIntersecting) {
			signature1.classList.add('signature1-animation');
			signature2.classList.add('signature2-animation');
			signature3.classList.add('signature3-animation');
		  	return; // if we added the class, exit the function
		}
		// We're not intersecting, so remove the class!
		signature1.classList.remove('signature1-animation');
		signature2.classList.remove('signature2-animation');
		signature3.classList.remove('signature3-animation');
	  });
});

// Tell the observer which elements to track
observerDesktop.observe(document.querySelector(".fadeshow-desktop"));

const observerMobile = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const signature1 = document.querySelector(".signature1.fadeshow-mobile");
		const signature2 = document.querySelector(".signature2.fadeshow-mobile");
		const signature3 = document.querySelector(".signature3.fadeshow-mobile");
	
		if (entry.isIntersecting) {
			signature1.classList.add('signature1-animation');
			signature2.classList.add('signature2-animation');
			signature3.classList.add('signature3-animation');
		  	return; // if we added the class, exit the function
		}
		// We're not intersecting, so remove the class!
		signature1.classList.remove('signature1-animation');
		signature2.classList.remove('signature2-animation');
		signature3.classList.remove('signature3-animation');
	  });
});
observerMobile.observe(document.querySelector(".fadeshow-mobile"));
