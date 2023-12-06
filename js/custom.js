$(function () {
    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000
    });

    $('.tab_slide1').slick({
        slidesToShow: 3,
        arrows: false,
    });
    $('.tab_slide2').slick({
        slidesToShow: 3,
        arrows: false,
    });
    $('.tab_slide3').slick({
        slidesToShow: 3,
        arrows: false,
    });
    $('.tab_slide4').slick({
        slidesToShow: 3,
        arrows: false,
    });

    $('.main_tab li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();

        //$('.tab_content li').removeClass('on');
        $('.tab_content li').eq(idx).addClass('on').siblings().removeClass('on');
    });


})