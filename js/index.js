(function($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: Math.min(Math.max((target.offset().top) - 100, 0), $(document).height() - $(window).height())
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

})(jQuery);

$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    // elemTop -= 100;
    // var elemBottom = elemTop + $(elem).height();

    return (elemTop <= docViewBottom - 500);
}

jQuery(function() {
    $(window).on('scroll', function() {
        var sections = ['#stepsForJob', '#courses', '#products'];
        sections.forEach(section => {
            if (isScrolledIntoView($(section))) {
                $(section + ' .card').animate({
                    'opacity': 1
                }, 'slow');
            }
        });
    });
});

if ($('#navbar').is(':visible')) {
    $('.nav-link').on('click', function() {
        var navbarElems = $('.nav-link');
        jQuery.each(navbarElems, function(index, value) {
            $(value).removeClass('active');
        });

        $(this).addClass('active');
    });

    $('.navbar-brand').on('click', function() {
        var navbarElems = $('.nav-link');
        jQuery.each(navbarElems, function(index, value) {
            $(value).removeClass('active');
        });
    });
}

jQuery(function() {
    var carouselItems = $('#testimonialsCarousel .carousel-item');
    var maxHeight = 0;
    carouselItems.each(function() {
        maxHeight = Math.max(maxHeight, $(this).height());
        console.log(maxHeight);
    });

    $('#testimonialsCarousel .carousel-inner').height(maxHeight + 200);
});