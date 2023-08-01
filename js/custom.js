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

    $('.article_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        asNavFor: '.main_slide',
    });

    $('.slide_dots>li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.article_slide').slick('slickGoTo', idx);
    });

    $('.article_slide').on('init afterChange', function (e, s, c) {
        const current = $('.article_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slide_dots>li').eq(0).addClass('on');
        $('.slide_dots>li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.notice_slide').slick({
        arrows: false,
        vertical: true,
    });

    $('.notice_area .arrows .left').on('click', function () {
        $('.notice_slide').slick('slickPrev');
    });
    $('.notice_area .arrows .right').on('click', function () {
        $('.notice_slide').slick('slickNext');
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.article_slide'
    });

    $('.research_slide').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.main_research .arrows .left').on('click', function () {
        $('.research_slide').slick('slickPrev');
    });
    $('.main_research .arrows .right').on('click', function () {
        $('.research_slide').slick('slickNext');
    });


})