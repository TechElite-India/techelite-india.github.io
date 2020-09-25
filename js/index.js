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

jQuery(function() {
    if ($('.navbar-toggler').is(':visible')) {
        $('.dropdown-toggle').css('float', 'right');
    }
})

// function toggleDropdown() {
//     $('.fa-caret-down').toggleClass('fa-flip-vertical')
//     if ($('.dropdown-content').css('display') == 'none') {
//         $('.dropdown-content').css('display', 'block');
//         if ($('.navbar-toggler').is(':visible')) {
//             console.log($(window).width());
//             var marginLeft = ($(window).width() - $('.dropdown-content').width()) - 40;
//             console.log(marginLeft);
//             $('.dropdown-content').css('margin-left', marginLeft);
//         } else {
//             var currleft = $('.dropdown-content').offset().left;
//             var reqLeft = ($(window).width() - $('.dropdown-content').width()) - 20;
//             console.log(reqLeft - currleft);
//             var marginLeft = reqLeft - currleft;
//             $('.dropdown-content').css('margin-left', marginLeft);
//         }
//     } else {
//         $('.dropdown-content').css('display', 'none');
//         $('.dropdown-content').css('margin-left', 0);
//     }
// }

// $(window).on('orientationchange', function() {
//     $('.dropdown-content').css('display', 'none');
//     $('.dropdown-content').css('margin-left', 0);
//     if ($('.fa-caret-down').hasClass('fa-flip-vertical')) {
//         $('.fa-caret-down').removeClass('fa-flip-vertical')
//     }
// });

// $(document).on('click', function(event) {
//     if (event.target !== $('.dropbtn')[0]) {
//         $('.dropdown-content').css('display', 'none');
//         $('.dropdown-content').css('margin-left', 0);
//         if ($('.fa-caret-down').hasClass('fa-flip-vertical')) {
//             $('.fa-caret-down').removeClass('fa-flip-vertical')
//         }
//     }
// });