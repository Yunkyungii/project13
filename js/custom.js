$(function () {

    $('.main').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        navigation: true,
        css3: false,
        responsiveWidth: 700,
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {
                $('.header').removeClass('on');
            }
        },
        onLeave: function (idx, nidx, dir) {

            if (dir == 'down') {
                $('.header').addClass('on')
            }

            // else {
            //     $('.header').addClass('on')
            // }
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.main_research .arrows .left').on('click', function () {
        $('.research_slide').slick('slickPrev');
    });
    $('.main_research .arrows .right').on('click', function () {
        $('.research_slide').slick('slickNext');
    });

    $('.com_slide').slick({
        arrows: false,
        fade: true,
    });

    $('.co_name li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.com_slide').slick('slickGoTo', idx);
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.com_slide').on('init afterChange', function (e, s, c) {
        const current = $('.com_slide .slick-current');
        e.preventDefault();
        current.addClass('on').siblings().removeClass('on');
        $('.co_name li').eq(0).addClass('on');
        $('.co_name li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });
    $('.main_community .arrows .left').on('click', function () {
        $('.com_slide').slick('slickPrev');
    });
    $('.main_community .arrows .right').on('click', function () {
        $('.com_slide').slick('slickNext');
    });

    $('.menu_ico').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').reomoveArrt('style');
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).toggleClass('on');
            // $(this).parent().siblings().find('.submenu').slideUp();
        }

    });

})