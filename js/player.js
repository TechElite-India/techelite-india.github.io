jQuery(function() {
    $('#demoModal').on('hidden.bs.modal', function() {
        $('#player').attr('src', "");
    });

    $('#demo1').on('click', function() {
        $('#player').attr('src', "https://www.youtube.com/embed/tPgBUhI7N94");
        $('#player').attr('height', $(window).height() * 0.6);
    });

    $('#demo2').on('click', function() {
        $('#player').attr('src', "https://www.youtube.com/embed/cShJfwk8sfE");
        $('#player').attr('height', $(window).height() * 0.6);
    });
});

$(window).on('orientationchange', function() {
    // $('#player').attr('height', $('#demoModal').width() * 0.3);
});