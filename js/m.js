/*
$(function() {
    // toggle du btn active
    $('[data-filter-color]').click(function() {
         var choosenColor = $(this).data('filter-color');

        $('[data-filter-color]').each(function(e){
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        //toggle des sliders
        $('[data-slider]').each(function(e){
            if($(this).data('slider') = choosenColor){
                $(this).addClass('active');
                $(this).slick('setPosition');
            }else{
                $(this).removeClass('active');
            }
        });
        return false;
    });
});*/



$(function () {

    // toggle menu mobile
    $('[data-mobile-menuburger-open]').click(function () {
        $('.header-mobile__menu').css("display", "block");
    });

    $('[data-mobile-menuburger-close]').click(function () {
        $('.header-mobile__menu').css("display", "none");
    });



    // toggle le sous menu
    $('[data-menu-dropdown]').click(function () {
        if ($(this).find('.dropdown').hasClass('dropdown--opened')) {
            $(this).find('.dropdown').removeClass('dropdown--opened');
            $(this).find('.header-mobile__link').removeClass('header-mobile__link--opened');
        } else {
            $(this).find('.dropdown').addClass('dropdown--opened');
            $(this).find('.header-mobile__link').addClass('header-mobile__link--opened');
        }
    });

});



$(function () {
    /*
       // toggle menu mobile
       $('[data-mobile-menuburger-open]').click(function() {
           $('.header-mobile__menu').css("display", "block");
       });

       $('[data-mobile-menuburger-close]').click(function() {
           $('.header-mobile__menu').css("display", "none");
       });*/

    // toggle le sous menu
    $('[data-menu-dropdown]').click(function () {
        if ($(this).find('.dropdown').hasClass('dropdown--opened')) {
            $(this).find('.dropdown').removeClass('dropdown--opened');
            $(this).find('.header-mobile__link').removeClass('header-mobile__link--opened');
        } else {
            $(this).find('.dropdown').addClass('dropdown--opened');
            $(this).find('.header-mobile__link').addClass('header-mobile__link--opened');
        }
    });
});
/*
$(function () {
    $(".header__main-menu > a").click(function () {
        if ($(".dropdown").hasClass(".dropdown--opened")) {
$(".dropdown").removeClass("dropdown--opened");
        };
    });

});*/























































// SLIDER (ROUGE, VERT, BLEU)
$(function () {
    // toggle du btn active
    $('.slider-section__toggle-cta').click(function () {
        var choosenColor = $(this).index();

        $('.slider-section__toggle-cta').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        // REMOVE "SELECTED TO ALL"
        $('.slider-section__slider').each(function () {
            $(this).removeClass('selected');
        });

        // ADD "SELECTED" AS "EQ"
        $(".slider-section__slider:eq(" + choosenColor + ")").addClass('selected');

        // SLIDER TOGGLE
        $('.slider-section__slider').each(function (e) {
            if ($(this).data('slider') == choosenColor) {
                $(this).addClass('active');
                $(this).slick('setPosition');
            } else {
                $(this).removeClass('active');
            }
        });
        return false;
    });
});


// SLIDER BEHAVIOR AS PEAR @MEDIA SCREEN WIDTH
$(document).ready(function () {
    let slideWrapper = $(".slider-section__slider");
    if (window.matchMedia('(max-width: 768px)').matches) {
        // Mobile
        slideWrapper.slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        });
    } else {
        slideWrapper.slick({
            //Desktop
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        });
    }
});