/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Info Bar Js
03. Data-Background Js
04. Sticky Header Js
05. Mobile Menu Js
06. Scroll To Top Js
07. Hero Slider Js
08. Case Slider Js
09. Client Slider Js
10. Testimonial Slider Js
11. Testimonial Slider 2 Js
12. Testimonial Slider 3 Js
13. Testimonial Slider 4 Js
14. Award Slider Js
15. Masonary Js
16. Showhide Js
17. Counter Js
****************************************************/
(function($) {
    "use strict";

    ////////////////////////
    // 01. PreLoader Js
    $(window).on('load', function() {
        $('.loading').fadeOut(500);
    });

    //////////////////////////////////
    // 02. Info Bar Js
    $(".header-bar").on('click', function() {
        $('.infoArea').addClass('open');
        $('.body-overlay').addClass('opened');
    });
    $(".info__close--icon").on('click', function() {
        $('.infoArea').removeClass('open');
        $('.body-overlay').removeClass('opened');
    });
    $(".body-overlay").on('click', function() {
        $('.infoArea').removeClass('open');
        $('.body-overlay').removeClass('opened');
    });

    $('.expanded-btn').on('click', function() {
        $('.search-area__inner').addClass('expanded');
    });
    $('.search-close-btn').on('click', function() {
        $('.search-area__inner').removeClass('expanded');
    });

    ///////////////////////////////
    // 03. Data-Background Js
    $('[data-background]').each(function() {
        $(this).css('background-image', 'url(' + $(this).attr("data-background") + ')');
    });

    ///////////////////////////////
    // 04. Sticky Header Js
    $(window).on('scroll', function() {
        var navbar = document.querySelector(".sticky__header");
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(navbar).removeClass("sticky");
        } else {
            $(navbar).addClass("sticky");
        }
    });

    ///////////////////////////////
    // 05. Mobile Menu Js
    $("#mobile-menu-active").metisMenu();
    $('#mobile-menu-active .has-dropdown > a').on('click', function(e) {
        e.preventDefault();
    });

    ///////////////////////////////
    // 06. Scroll To Top Js
    $(window).on('scroll', function() {
        if (window.pageYOffset > 82) {
            $('#scroll').fadeIn(200);
        } else {
            $('#scroll').fadeOut(200);
        }
    });

    $('#scroll').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });

    ///////////////////////////////
    // 07. Hero Slider Js
    $('.slider-area-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
            },
            {
                breakpoint: 600,
            },
            {
                breakpoint: 480,
            }
        ]
    });

    /////////////////
    // 07. Hero Slider Js
    $('.slider-area-3-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
            },
            {
                breakpoint: 600,
            },
            {
                breakpoint: 480,
            }
        ]
    });

    ///////////////////////////////
    // 08. Case Slider Js
    $('.case__slider--active').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    ///////////////////////////////
    // 09. Client Slider Js
    $('.client__slider--active').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            575: {
                items: 2,
                nav: false
            },
            767: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false,
            },
            1024: {
                items: 4,
                nav: false,
            }
        }
    });


    ///////////////////////////////
    // 10. Testimonial Slider Js
    $('.testimonial-area-active').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1024: {
                items: 2,
            }
        }
    });


    ///////////////////////////////
    // 11. Testimonial Slider 2 Js
    $('.testimonial-area-2-active').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<button><i class="fas fa-angle-left"></i></button>', '<button><i class="fas fa-angle-right"></i></button>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            767: {
                items: 1,
                nav: true
            },
            992: {
                items: 2,
                nav: true,
            },
            1024: {
                items: 2,
                nav: true,
            }
        }
    });


    ///////////////////////////////
    // 12. Testimonial Slider 3 Js
    $('.testimonial-area-3-active').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<button><i class="fas fa-long-arrow-alt-left"></i></button>', '<button><i class="fas fa-long-arrow-alt-right"></i></button>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1024: {
                items: 1,
            }
        }
    });


    ///////////////////////////////
    // 13. Testimonial Slider 4 Js
    $('.testimonial-area-4-active').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<button><i class="fas fa-long-arrow-alt-left"></i></button>', '<button><i class="fas fa-long-arrow-alt-right"></i></button>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1024: {
                items: 1,
            }
        }
    });

    ///////////////////////////////
    // 14. Award Slider Js
    $('.postbox__gallery').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<button><i class="fas fa-long-arrow-alt-left"></i></button>', '<button><i class="fas fa-long-arrow-alt-right"></i></button>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1024: {
                items: 1,
            }
        }
    });

    ////////////////////////////////
    // 15. Masonary Js
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-item'
        }
    });
    // filter items on button click
    $('.filter-button').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // filter items on button click
    $('.filter-button button').on('click', function(e) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();

    });

    ////////////////////////////////
    // 16. Showhide Js
    $('#showhide').on('click', function() {
        var x = document.getElementById("myPsw");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });

    ////////////////////////////////
    // 17. Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


})(jQuery);