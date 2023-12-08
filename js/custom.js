$(function () {

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.main_tab li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();

        $('.mainProduct .tab_content li').removeClass('on');
        $('.mainProduct .tab_content li').eq(idx).addClass('on');
    });

    $('.mainProduct .tab_content .tab_slide').slick({
        // lazyLoad: 'ondemand',
        slidesToShow: 4,
        arrows: true,
        //dots: true,

    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 200) {
            $('.totop').addClass('on');
            $('.header').addClass('on');
        } else {
            $('.totop').removeClass('on');
            $('.header').removeClass('on');
        }
    });
})