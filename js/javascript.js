// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.topnav').addClass('sticky');
    } else {
        $('.topnav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.topnav').hasClass('open-nav')) {
        $('.topnav').removeClass('open-nav');
    } else {
        $('.topnav').addClass('open-nav');
    }
});

$('.topnav li a').click(function() {
    if ($('.topnav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.topnav').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('li a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});