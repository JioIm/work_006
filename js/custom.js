$(function () {
    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000
    });



    $('.main_tab li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();

        $('.tab_content li').removeClass('on');
        $('.tab_content li').eq(idx).addClass('on');
    });

    $('.tab_slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        arrows: false,

    });



})