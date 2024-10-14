document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-c36cc905' );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-df72e80f', {"layout":"number","heading":"\u0627\u0642\u062f\u0627\u0645 \u0628\u0647 \u062b\u0645\u0631 \u0631\u0633\u06cc\u062f\u0647","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":120,"totalNumber":120,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-168fc294', {"layout":"number","heading":"\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0631\u0636\u0627\u06cc\u062a \u0645\u0646\u062f","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":130,"totalNumber":130,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-70698ffa', {"layout":"number","heading":"\u062a\u0639\u062f\u0627\u062f \u062f\u0641\u0627\u062a\u0631","numberPrefix":"","numberSuffix":"","startNumber":0,"endNumber":3,"totalNumber":120,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-014dbdb8', {"layout":"number","heading":"\u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u0642\u0627\u0646\u0648\u0646\u06cc","numberPrefix":"","numberSuffix":"","startNumber":0,"endNumber":45,"totalNumber":120,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-1395e03c' );
});
jQuery( document ).ready( function() {
	if( jQuery( '.uagb-block-6718545d' ).length > 0 ){
	jQuery( '.uagb-block-6718545d' ).find( ".is-carousel" ).slick( {"slidesToShow":3,"slidesToScroll":1,"autoplaySpeed":"2000","autoplay":true,"infinite":true,"pauseOnHover":true,"speed":"500","arrows":true,"dots":true,"rtl":true,"prevArrow":"<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: var(--ast-global-color-0);border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='var(--ast-global-color-0)'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: var(--ast-global-color-0);border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='var(--ast-global-color-0)' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":2,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]} );
	}
	var $scope = jQuery('.uagb-block-6718545d');
	var enableEqualHeight = ( '' );
			if( enableEqualHeight ){
				$scope.imagesLoaded( function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				});

				$scope.on( "afterChange", function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				} );
			}
} );
 });