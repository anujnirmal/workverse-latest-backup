function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
}

function disableScroll() {
  document.addEventListener('mousewheel', preventScroll, {passive: false}); //IE9, Chrome, Safari, Opera
  document.addEventListener('DOMMouseScroll', preventScroll, {passive: false}); //Firefox
}
function enableScroll() {
	document.removeEventListener('mousewheel', preventScroll, {passive: false});
	document.removeEventListener('DOMMouseScroll', preventScroll, {passive: false});
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
  var diamondStart = $('.ks-change').offset().top - 200;
  console.log(diamondStart);

  function MouseWheelHandler(event) {
	if (!mouseWheel) {
	    return false;
	}
	mouseWheel = false;
	setTimeout(function() {
	    mouseWheel = true;
	}, 500); // Stop mouse wheel event for 3 seconds
	
    var st = $(this).scrollTop();
    console.log(st);
    // console.log(event);
    if(st >= diamondStart){
    	disableScroll();
    	if(event.deltaY){
    		var scroll = event.deltaY;
    	}
    	else {
    		var scroll = event.detail;
    	}
    	// console.log(scroll);
	    if (scroll > 0){
	       // downscroll code
	       if($("#ksWhySec").is(":visible")){
	       	 jQuery("#ksForCollegeBtn-3").trigger("click");
	       	 return;
	       }
	       if($("#ksWhatSec").is(":visible")){
	       	 jQuery("#ksForCollegeBtn-4").trigger("click");
	       	 return;
	       }
	       if($("#ksAchiveSec").is(":visible")){
	       	 jQuery("#ksForCollegeBtn-5").trigger("click");
	       	 return;
	       }
	    }
		else{
	       // upscroll code
	       if($("#ksKeyBenifit").is(":visible")){
	       	 jQuery("#ksForCollegeBtn-4").trigger("click");
	       	 setTimeout(function(){	       	 	
	       	 	window.scrollTo(0,document.body.scrollHeight);
	       	 },100);
	       	 return;
	       }
	       if($("#ksAchiveSec").is(":visible")){
	       	 jQuery("#ksForCollegeBtn-3").trigger("click");
	       	 setTimeout(function(){	       	 	
	       	 	window.scrollTo(0,document.body.scrollHeight);
	       	 },100);
	       	 return;
	       }
	       if($("#ksWhatSec").is(":visible")){
	       	 jQuery("#ksForCollegeBtn-2").trigger("click");
	       	 setTimeout(function(){	       	 	
	       	 	window.scrollTo(0,document.body.scrollHeight);
	       	 },100);
	       	 return;
	       }
	       if($("#ksWhySec").is(":visible")){
	       	 jQuery("#ksForCollegeBtn-1").trigger("click");
	       	 enableScroll();
	       	 setTimeout(function(){	       	 	
		       	 window.scrollTo({
			      top: 0,
	      		  behavior: "smooth"
			     });
	       	 },100);
	       	 return;
	       }
		}
	}
  }


});