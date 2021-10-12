/*!
 * Start Bootstrap - Agency v5.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

(function ($) {
    'use strict';

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var a = $(this.hash);
            if ((a = a.length ? a : $('[name=' + this.hash.slice(1) + ']')).length) return $('html, body').animate({
                scrollTop: a.offset().top - 54
            }, 1e3, 'easeInOutExpo'), !1
        }
    }), $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    }), $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    /* Navigation Menu */

    // Shrink Navigation Menu on Scroll
    var a = function () {
        100 < $('#mainNav').offset().top ? $('#mainNav').addClass('navbar-shrink') : $('#mainNav').removeClass('navbar-shrink');
    };

    // Click event to Hide/Show Navbar
    a(), $(window).scroll(a), $('.portfolio-modal').on('show.bs.modal', function (a) {
        $('.navbar').addClass('d-none');
    }), $('.portfolio-modal').on('hidden.bs.modal', function (a) {
        $('.navbar').removeClass('d-none');
    });

    /* Search Bar */

    $('#myInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#myCard h2').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    /* Back to Top Button */

    // Show button after 130px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 130) {
            $('.scrollToTop').show();
        } else {
            $('.scrollToTop').hide();
        }
    });

    // Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300, 'linear');
    });


    $(document).ready(function () {
        /* Toggle the side navigation */
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });

        /* Calendar Button */
        $('#rangestart').calendar({
            type: 'date',
            endCalendar: $('#rangeend')
        });
        $('#rangeend').calendar({
            type: 'date',
            startCalendar: $('#rangestart')
        });
    });

})(jQuery);