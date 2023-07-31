$(function () {

    $('.main').fullpage({
        onLeave: function (idx, nidx, dir) {

            if (dir == 'down') {
                $('.header').addClass('on')
            }
            else {
                $('.header').removeClass('on')
            }
        },
    });


    $('.global').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
    });

})