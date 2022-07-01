 
        
        
        // Script 
        function myFunction(e){
            e.classList.toggle('show');
            var element = document.getElementById('navId');
            var appybtn = document.getElementById('menubar');
            var menbtn = document.getElementById('toggle-button');
            var body = document.getElementById('noscroll');
            Style= window.getComputedStyle(element);
            right = Style.getPropertyValue("right");
        
            if(right == '-535px'){
                element.style.right = "-200px";
                appybtn.style.display = "none";
                menbtn.style.marginLeft = "0em";
                body.style.overflowY = "hidden";
                // body.style.position = "fixed";
                body.style.width = "100%";
                // stop scroll 
                
               

            }else{
                element.style.right = "-535px";
                appybtn.style.display = "block";
                menbtn.style.marginLeft = "-5em";
                body.style.overflowY = "scroll";
                // body.style.position = "unset";
            }
        }
        // Script 
         // click outside 
         $(document).click(function(e){
            var container = $("#navId");
            // If the target of the click isn't the container
            if(!$("#navId").is(e.target) && $("#navId").has(e.target).length === 0){
              if ($("#navId").css("right") == "-200px") {
                  $("#navId").css({ right: "-535px" });
                  $('.toggle-collapse').removeClass("show");
                  $('#menubar').css({display: "block"});
                  $('#toggle-button').css({"margin-left" : "-5em"});
                  $('body').css({"overflowY" : "scroll", "position": "unset"});
                }
            }
            });
            // click outside 


             // Tab active move 
    $(document).ready(function () {
        $('.tab-inner ul label').click(function(e) {
    
            $('.tab-inner ul label').removeClass('active');
            $(this).addClass('active');
            
        });
    });
        // Tab active move 

         //   Scroll
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=

        if($(window).width() > 480){
          if (scroll >= 50) {
            //clearHeader, not clearheader - caps H
            $(".myprogram-header").addClass("progra-header-scroll-background");
          } else {
            $(".myprogram-header").removeClass("progra-header-scroll-background");
          }
        }
       

    
      });

 


      $('.pricing-outer-wrapper').on('scroll', function() {

        var scrll = $(this).scrollTop();
        if(scrll >=5){
          $('#first-payment-image-wrapper').addClass('price-none');
          $('#first-payment-image-wrapper .payment-status').removeClass('animate__delay-1s');
          $('#first-payment-image-wrapper .rupee').removeClass('animate__delay-1s');
          $('#first-payment-image-wrapper .pricing-apply img').removeClass('animate__delay-1s');
          $('#first-payment-image-wrapper .scroll-img').removeClass('animate__delay-1s');
          $('.pricing-mobile-img').removeClass('animate__animated animate__slideInUp');
          $('.pricing-inner-wrapper ul').removeClass('animate__delay-2s');
          $('.pricing-inner-wrapper ul').addClass('animate__delay-0s');
        }else{
          $('#first-payment-image-wrapper').removeClass('price-none');
        }
    });

    $('.media').on('scroll', function() {

      var scrll = $(this).scrollTop();
      if($(window).width() > 480){
        if(scrll >= 50){
          $(".myprogram-header").addClass("progra-header-scroll-background");
        }else{
          $(".myprogram-header").removeClass("progra-header-scroll-background");
        }
      }
      
  });
    
  if ($(window).width() > 768) {

    var delay = false;
    $(document).on('mousewheel DOMMouseScroll', function (event) {
      event.preventDefault();
      if (delay) return;
  
      delay = true;
      setTimeout(function () { delay = false }, 200)
  
      if ($('#radio-7').prop('checked')) {
  
        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        if (wd < 0) {
          if ($(window).scrollTop() <= $('.pricing-one').offset().top + $('.pricing-one').outerHeight() - 0 - window.innerHeight) {
            $('.pricing-outer-wrapper').animate({
              scrollTop: $(".pricing-two").offset().top + 200
            });
          }
        } else {
          if ($(window).scrollTop() >= $('.pricing-two').offset().top + $('.pricing-two').outerHeight() - 100 - window.innerHeight) {
            $('.pricing-outer-wrapper').animate({
              scrollTop: $(".pricing-one").offset().top
            });
          }
        }
      }
    });
  
  }

  $(".payment-image-wrapper").bind("mouseover", function(event) {
   //$('.pricing-outer-wrapper').addClass('pricing-outer-noscroll');
  });
  $(".payment-image-wrapper").bind("mouseout", function(event) {
    //$('.pricing-outer-wrapper').removeClass('pricing-outer-noscroll');
   });

 
      
      //   Scroll


        // Header 
     if ($(window).width() <= 1024) {
        $(".mobile-header").removeClass("pt-3");
  
        
      }
  
      if ($(window).width() <= 780){
        function myFunction(e) {
          e.classList.toggle("show");
          var element = document.getElementById("navId");
          var appybtn = document.getElementById('menubar');
          var menbtn = document.getElementById('toggle-button')
          var body = document.getElementById('noscroll');
          Style = window.getComputedStyle(element);
          right = Style.getPropertyValue("right");
  
          if (right == "-250px") {
            element.style.right = "0px";
            appybtn.style.display = "none";
            menbtn.style.marginLeft = "2em";
            body.style.overflowY = "hidden";
            
           

          } else {
            element.style.right = "-250px";
            appybtn.style.display = "block";
            menbtn.style.marginLeft = "-4em";
            body.style.overflowY = "scroll";
            
          }
        }
  
        $(document).click(function(e){
      var container = $("#navId");
      // console.log("click outside nav");
      // If the target of the click isn't the container
      if(!$("#navId").is(e.target) && $("#navId").has(e.target).length === 0){
        if ($("#navId").css("right") == "0px") {
            $("#navId").css({ right: "-250px" });
            $('.toggle-collapse').removeClass("show");
            $('#menubar').css({display: "block"});
            $('#toggle-button').css({"margin-left" : "-4em"});
            $('body').css({"overflowY" : "scroll"});
          }
      }
      });
      }

      if($(window).width() <= 500){
        $('#navbar').removeClass('align-items-center');
        $('#navbar').removeClass('pt-3');
      }
      // Header


    

