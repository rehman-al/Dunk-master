$(document).ready(function () {
    // menu toggler 
    $('#menu-toogler-icon').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('change');
        $('nav .navigations menu').toggleClass('menu-toggler-class');
    });

    $('nav .navigations menu a').click(function (e) {
        $('nav .navigations menu').removeClass('menu-toggler-class');
        $('#menu-toogler-icon').removeClass('change');
    });


    // nav toggler 
    $(window).scroll(function () {
        // console.log(window.scrollY)
        if (scrollY > 20) {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });

    // typed js 
    var typed = new Typed('#element', {
        strings: ['MASTER YOUR DUNKS.', 'WITH DUNK MASTER.'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    var typed = new Typed('#appliaction', {
        strings: ['AVAILABLE ON APP STORE', 'AVAILABLE ON PLAY STORE.'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    var typed = new Typed('#htu-head-text', {
        strings: ['1: INSTALL APP', '2: TURN ON DEVICE'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    var typed = new Typed('#myd-typed', {
        strings: ['Track progress', 'Measure effort', 'Improve your dunk skills every time.'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });

    // var typed = new Typed('#dmi-typed', {
    //     strings: ['Understand the differences', 'between a Dunk Master player ', 'And others players'],
    //     typeSpeed: 50,
    //     loop: true,
    //     backDelay: 1000,
    //     backspeed: 10
    // });
    var typed = new Typed('#buynow-typed', {
        strings: ['Buy DUNK MASTER', 'Just in one click'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    var typed = new Typed('#au-typed', {
        strings: [' Instagram', ' Tiktok', ' WhatsApp'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    // aos aimation 
    AOS.init();


    // owl carousel 
    $('.right-box').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.app-imgs').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});