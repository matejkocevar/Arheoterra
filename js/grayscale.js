/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

//Magnific Popup
$(document).ready(function() {
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        gallery:{
            enabled:true
        }
    });
});

$(document).ready(function(){
    $('.slider-povezave').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
    $('.slider-slike').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px'
    });
});
