
if ($(window).width() < 768) {
    $("#mainmenu").css("right", "-54%");
    function togglemenu() {
        console.log('togglemenu click');
        var div = document.getElementById('mainmenu');
        div.style.right = div.style.right == "-54%" ? "0" : "-54%";
       
        $(".blakpatch").toggleClass("opened");
    }
    // function counter(id, start, end, duration) {
    //     let obj = document.getElementById(id),
    //         current = start,
    //         range = end - start,
    //         increment = end > start ? 1 : -1,
    //         step = Math.abs(Math.floor(duration / range)),
    //         timer = setInterval(() => {
    //             current += increment;
    //             obj.textContent = current;
    //             if (current == end) {
    //                 clearInterval(timer);
    //             }
    //         }, step);
    // }
    // counter("count1", 99900, 100000, 1000);
    // counter("count2", 0, 50, 1000);
    // counter("count3", 0, 92, 1000);
    // counter("count4", 0, 70, 1000);

    $(' .ks-landing-how .ks-landing-how-animation .slidegalbnav .nav-prev').click(function() {
         $(".gallery").flipBackward();
    });
    $('.ks-landing-how .ks-landing-how-animation .slidegalbnav .nav-next').click(function() {
         $(".gallery").flipForward()
    });
    $(".student-landing #ksLandingNewIntro .knowmorebtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#ksLandingwelive").offset().top
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
$('#kSBottomSec').click(function(){
    var why = $('.bg-darkblue.why').offset().top; 
    window.scrollTo({
      top: why,
      behavior: "smooth"
     });
});

$(document).on("click", "#ksForCollegeBtn-1" , function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
     });
})

$(document).on("click", "#ksForCollegeBtn-2" , function() {
    var why = $('.bg-darkblue.why').offset().top; 
    window.scrollTo({
      top: why,
      behavior: "smooth"
     });
})

$(document).on("click", "#ksForCollegeBtn-3" , function() {
    var what = $('.bg-darkblue.what').offset().top; 
    window.scrollTo({
      top: what,
      behavior: "smooth"
     });
})

$(document).on("click", "#ksForCollegeBtn-4" , function() {
    var acheive = $('.bg-darkblue.acheive').offset().top; 
    window.scrollTo({
      top: acheive,
      behavior: "smooth"
     });
})

$(document).on("click", "#ksForCollegeBtn-5" , function() {
    var benefit = $('.bg-darkblue.benefit').offset().top; 
    window.scrollTo({
      top: benefit,
      behavior: "smooth"
     });
})


$(function(){

//   if (document.addEventListener) {
//       document.addEventListener("mousewheel", MouseWheelHandler, {passive: false}); //IE9, Chrome, Safari, Opera
//       document.addEventListener("DOMMouseScroll", MouseWheelHandler, {passive: false}); //Firefox
//   } else {
//       document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
//   }

//   var i = 1;
//   var mouseWheel = true;
  
//   var lastScrollTop = 0;
//   var diamondStart = $('.bg-darkblue.why').offset().top - 200;
//   console.log(diamondStart);

//   var landinggalsec = $('.student-landing div#section3').offset().top - 200;
//   console.log(landinggalsec);
//   function MouseWheelHandler(event) {
//     if (!mouseWheel) {
//         return false;
//     }
//     mouseWheel = false;
//     setTimeout(function() {
//         mouseWheel = true;
//     }, 500); // Stop mouse wheel event for 3 seconds
    
//     var st = $(this).scrollTop();
//     console.log(st);
//     // console.log(event);
//     if(st >= 0){
//         if(event.deltaY){
//             var scroll = event.deltaY;
//         }
//         else {
//             var scroll = event.detail;
//         }
//         // console.log(scroll);

//         var why = $('.bg-darkblue.why').offset().top;  console.log(why);
//         var what = $('.bg-darkblue.what').offset().top; console.log(what);
//         var acheive = $('.bg-darkblue.acheive').offset().top; console.log(acheive);
//         var benefit = $('.bg-darkblue.benefit').offset().top; console.log(benefit);


//         console.log("++++"+st);

//         if (scroll > 0){
//            // downscroll code
//            if(st >= acheive){
//             console.log("down to benefit");
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: benefit,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//            if(st >= what){
//             console.log("down to acheive");
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: acheive,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//            if(st >= why){
//             console.log("down to what");
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: what,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//            if(st < why){
//             console.log("down to why");
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: why,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//         }
//         else{
//            // upscroll code
//            if(st <= why){
//             console.log("intro visible");
//             setTimeout(function(){             
//                  window.scrollTo({
//                   top: 0,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//            if(st <= what){
//             console.log("up to why");
//              var why = $('.bg-darkblue.why').offset().top; 
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: why,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//            if(st <= acheive){
//             console.log("up to what");
//              var what = $('.bg-darkblue.what').offset().top; 
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: what,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//            if(st <= benefit){
//             console.log("up to acheive");
//              var acheive = $('.bg-darkblue.acheive').offset().top; 
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: acheive,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//            if(st > benefit){
//             console.log("up to benefit");
//              var benefit = $('.bg-darkblue.benefit').offset().top; 
//              setTimeout(function(){             
//                  window.scrollTo({
//                   top: benefit,
//                   behavior: "smooth"
//                  });
//              },100);
//              return;
//            }
//         }
//     }
//   }


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