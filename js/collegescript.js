
if ($(window).width() < 768) {
    $("#mainmenu").css("right", "-54%");
    function togglemenu() {
        var div = document.getElementById('mainmenu');
        div.style.right = div.style.right == "-54%" ? "0" : "-54%";
        $(".blakpatch").toggleClass("opened");
    }
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 99900, 100000, 1000);
    counter("count2", 0, 50, 1000);
    counter("count3", 0, 92, 1000);
    counter("count4", 0, 70, 1000);
    // $(".gallery").flipping_gallery({
    //     enableScroll: false,
    //     spacing: 20,
    // });
    $(' .forcollege .ks-landing-how-animation .slidegalbnav .nav-prev').click(function() {
        $(".gallery").flipBackward();
   });
   $(' .forcollege .ks-landing-how-animation .slidegalbnav .nav-next').click(function() {
        $(".gallery").flipForward()
   });
   $(".collegesecone .ks-home-img .ks-heading .btn#kSBottomSec").click(function() {
    $('html, body').animate({
        scrollTop: $("#ksWhySec").offset().top
    }, 2000);
});
} else {
    $("#mainmenu").css("right", "-28%");
    function togglemenu() {
        var div = document.getElementById('mainmenu');
        div.style.right = div.style.right == "-28%" ? "0" : "-28%";
        $(".blakpatch").toggleClass("opened");
    }
}

$(function(){

  if (document.addEventListener) {
      document.addEventListener("mousewheel", MouseWheelHandler, {passive: false}); //IE9, Chrome, Safari, Opera
      document.addEventListener("DOMMouseScroll", MouseWheelHandler, {passive: false}); //Firefox
  } else {
      document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
  }

  var i = 1;
  var mouseWheel = true;
  
  var lastScrollTop = 0;

  function MouseWheelHandler(event) {
    if (!mouseWheel) {
        return false;
    }
    mouseWheel = false;
    setTimeout(function() {
        mouseWheel = true;
    }, 500); // Stop mouse wheel event for 3 seconds
    
    var st = $(this).scrollTop();
    // console.log(st);
    // console.log(event);
    if(st >= 0){
        if(event.deltaY){
            var scroll = event.deltaY;
        }
        else {
            var scroll = event.detail;
        }
        // console.log(scroll);

        var collegesecone = $('.collegesecone').offset().top;  console.log(collegesecone);
        var collegesectwo = $('.collegesectwo').offset().top; console.log(collegesectwo);


        console.log("++++"+st);

        if (scroll > 0){
           // downscroll code
           if(st >= collegesecone){
            console.log("down to what");
             setTimeout(function(){             
                 window.scrollTo({
                  top: collegesectwo,
                  behavior: "smooth"
                 });
             },100);
             return;
           }
           if(st < collegesecone){
            console.log("down to why");
             setTimeout(function(){             
                 window.scrollTo({
                  top: collegesecone,
                  behavior: "smooth"
                 });
             },100);
             return;
           }
        }
    }
  }


});



// Landing Page Why section
$('#ksAcceleratorBtn-1').click(function() {
    $('#ksAcceleratorBtn-1 svg').html("<path fill='#77FDEC' d='M242.2 8.3c-9.6-11.1-26.8-11.1-36.4 0l-200 232c-7.8 9-7.8 22.3 0 31.3l200 232c9.6 11.1 26.8 11.1 36.4 0l200-232c7.8-9 7.8-22.3 0-31.3l-200-232z' class=''></path>");
    $('#ksAcceleratorBtn-2 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-3 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-4 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-5 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");


    $('#ksLandingPara').html("XBSL’s 21st century workplace skills accelerator will transform you from just a graduate into a “future ready smart generalist” in 90 days ! <br> <br> Peak into what you’ll experience during your structured e-learning journey.");
})
$('#ksAcceleratorBtn-2').click(function() {
    $('#ksAcceleratorBtn-2 svg').html("<path fill='#77FDEC' d='M242.2 8.3c-9.6-11.1-26.8-11.1-36.4 0l-200 232c-7.8 9-7.8 22.3 0 31.3l200 232c9.6 11.1 26.8 11.1 36.4 0l200-232c7.8-9 7.8-22.3 0-31.3l-200-232z' class=''></path>");
    $('#ksAcceleratorBtn-3 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-4 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-5 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-1 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");

    $('#ksLandingPara').html(" XBSL’s 2nd para Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam rem inventore amet ipsam totam labore veniam repellendus cum <br> <br> ipsum dolore eveniet animi fugiat tempora adipisci.");
})
$('#ksAcceleratorBtn-3').click(function() {
    $('#ksAcceleratorBtn-3 svg').html("<path fill='#77FDEC' d='M242.2 8.3c-9.6-11.1-26.8-11.1-36.4 0l-200 232c-7.8 9-7.8 22.3 0 31.3l200 232c9.6 11.1 26.8 11.1 36.4 0l200-232c7.8-9 7.8-22.3 0-31.3l-200-232z' class=''></path>");
    $('#ksAcceleratorBtn-4 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-5 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-1 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-2 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");


    $('#ksLandingPara').html(" XBSL’s 3rd para Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam rem inventore amet ipsam totam labore veniam repellendus cum <br> <br> ipsum dolore eveniet animi fugiat tempora adipisci.");
})
$('#ksAcceleratorBtn-4').click(function() {
    $('#ksAcceleratorBtn-4 svg').html("<path fill='#77FDEC' d='M242.2 8.3c-9.6-11.1-26.8-11.1-36.4 0l-200 232c-7.8 9-7.8 22.3 0 31.3l200 232c9.6 11.1 26.8 11.1 36.4 0l200-232c7.8-9 7.8-22.3 0-31.3l-200-232z' class=''></path>");
    $('#ksAcceleratorBtn-5 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-1 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-2 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
    $('#ksAcceleratorBtn-3 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");

    $('#ksLandingPara').html(" XBSL’s 4th para Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam rem inventore amet ipsam totam labore veniam repellendus cum <br> <br> ipsum dolore eveniet animi fugiat tempora adipisci.");
})

$('#ksAcceleratorBtn-5').click(function() {
        $('#ksAcceleratorBtn-5 svg').html("<path fill='#77FDEC' d='M242.2 8.3c-9.6-11.1-26.8-11.1-36.4 0l-200 232c-7.8 9-7.8 22.3 0 31.3l200 232c9.6 11.1 26.8 11.1 36.4 0l200-232c7.8-9 7.8-22.3 0-31.3l-200-232z' class=''></path>");
        $('#ksAcceleratorBtn-4 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
        $('#ksAcceleratorBtn-1 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
        $('#ksAcceleratorBtn-2 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");
        $('#ksAcceleratorBtn-3 svg').html("<path fill='#47AA9D' d='M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z'></path>");


        $('#ksLandingPara').html(" XBSL’s 5th para Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam rem inventore amet ipsam totam labore veniam repellendus cum <br> <br> ipsum dolore eveniet animi fugiat tempora adipisci.");
    })
    // Landing Page Why section End

    function togglemenu() {
        var div = document.getElementById('mainmenu');
        div.style.right = div.style.right == "-28%" ? "0" : "-28%";
    }