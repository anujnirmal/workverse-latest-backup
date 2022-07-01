// Owlcarousel
$(document).ready(function () {
    $(".impact-slider").owlCarousel({
        loop: true,
        margin: 60,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        center: true,
        touchDrag  : true,
        mouseDrag: true,
        freeDrag: false,
        smartSpeed: 1000,
       
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
            1025: {
                items: 3
            }
        }
    });

   
    
});