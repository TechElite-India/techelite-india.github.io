jQuery(function() {
    $('#demoModal').on('hidden.bs.modal', function() {
        console.log('f');
        $('#player').attr('src', "");
    });

    $('#demo1').on('click', function() {
        console.log('demo1');
        $('#player').attr('src', "https://www.youtube.com/embed/EzJhTb564iA");
        $('#player').attr('height', $(window).height() * 0.6);
    });

    $('#demo2').on('click', function() {
        console.log('demo2');
        $('#player').attr('src', "https://www.youtube.com/embed/EzJhTb564iA");
        $('#player').attr('height', $(window).height() * 0.6);
    });

    $('#demo3').on('click', function() {
        console.log('demo3');
        $('#player').attr('src', "https://www.youtube.com/embed/EzJhTb564iA");
        $('#player').attr('height', $(window).height() * 0.6);
    });
})

$(window).on('orientationchange', function() {
    // $('#player').attr('height', $('#demoModal').width() * 0.3);
})