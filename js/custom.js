(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        var homepageslide = $('.home-slides');
        /*==========  owl carousel slider  ==========*/
        homepageslide.owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false
        });
        /*==========  owl carousel slider effect  ==========*/
        homepageslide.on("translate.owl.carousel", function () {
            $(".slider-content h2").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-content P").removeClass("animated fadeInUp").css("opacity", "0");
            $(".h3-bancontent .seori-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        homepageslide.on("translated.owl.carousel", function () {
            $(".slider-content h2").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-content P").addClass("animated fadeInUp").css("opacity", "1");
            $(".h3-bancontent .seori-btn").addClass("animated fadeInUp").css("opacity", "1");
        });

        var reviewslider = $('.review-group');
        /*==========  Review Slider  ==========*/
        reviewslider.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        });
        /*========== Responsive Menu  ==========*/
        $("#mobilemenu").slicknav({
            prependTo: '#responsive-menu'
        });
        // /*==========  wow  ==========*/
        new WOW().init();
        /*========== scroll to top  ==========*/
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn(200);
            } else {
                $('.scroll-top').fadeOut(200);
            }
        });
        $('.scroll-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });
        /*==========  menu scroll  ==========*/
        $('.menu-right li a').on('click', function (event) {
            $('.menu-right li a').parent().removeClass('active');
            var $anchor = $($(this).attr('href')).offset().top - 70;
            $(this).parent().addClass('active');
            $('body, html').animate({
                scrollTop: $anchor
            }, 800);
            event.preventDefault();
            return false;
        });
        /*==========  menu sticky  ==========*/
        $('.onepage-head').sticky({
            topSpacing: 0
        });
        /*==========  counterUp  ==========*/
        $('.counter1').counterUp({
            delay: 100,
            time: 3000
        });
        /*==========  typer  ==========*/
        var typers = $(".typer");
        $(function () {
            typers.typed({
                strings: ["Designer and Developer", "Software Developer"],
                typeSpeed: 15,
                loop: true,
            });
        });
        /*==========  isotop  ==========*/
        jQuery(window).load(function () {
            jQuery(".wehpy-loader").fadeOut(500);
            /*========== Project Grid  ==========*/
            var $grid = $('.project-grid').isotope({});
            /*========== Project Filter  ==========*/
            $('.project-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            /*========== Project Active  ==========*/
            $('.project-filter').on('click', 'li', function () {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });
})(jQuery);