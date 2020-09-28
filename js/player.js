jQuery(function() {
    $('#demoModal').on('hidden.bs.modal', function() {
        $('#player').attr('src', "");
    });

    $('#demo1').on('click', function() {
        $('#player').attr('src', "https://www.youtube.com/embed/tPgBUhI7N94");
        $('#player').attr('height', $(window).height() * 0.6);
        $('.modal-title').html('Personalized Coding Interviews: Demo');
    });

    $('#demo2').on('click', function() {
        $('#player').attr('src', "https://www.youtube.com/embed/cShJfwk8sfE");
        $('#player').attr('height', $(window).height() * 0.6);
        $('.modal-title').html('Company-Wise Top Interview Questions: Demo');
    });
});