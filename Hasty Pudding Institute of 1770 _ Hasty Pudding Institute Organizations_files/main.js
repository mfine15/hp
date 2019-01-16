/*---------------------------------------------------------------
 MAIN SLIDER
 ---------------------------------------------------------------*/

jQuery(document).ready(function($) {
    $(".royalSlider").royalSlider({
        controlNavigation: 'none',
        transitionSpeed: 800,
        keyboardNavEnabled: true,
        autoPlay: {
            // autoplay options go gere
            enabled: true,
            pauseOnHover: true,
	    delay: 4000
        },
        // general options go gere
        block: {
            // animated blocks options go gere
            fadeEffect: true,
            moveEffect: 'top'
        },
        imageScaleMode: 'fill',
        arrowsNavHideOnTouch: true,
        loop: true,
        transitionType: 'fade'

    });


});

/*---------------------------------------------------------------
 STICKY NAVIGATION BAR
 ---------------------------------------------------------------*/

jQuery(document).ready(function() {
    var stickyNavTop = $('.navbar-wrap').offset().top;
    var stickyNavBottom = stickyNavTop + $('.navbar-wrap').outerHeight(true);
    var collapseTop = $('.navbar-collapse').offset().top;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > collapseTop) {
            $('.navbar-wrap').addClass('sticky');
            $('body').css('padding-top', stickyNavBottom);
            $('.header-top-wrapper').hide();
        } else {
            $('.navbar-wrap').removeClass('sticky');
            $('body').css('padding-top', 0);
            $('.header-top-wrapper').show();
            
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});



/*---------------------------------------------------------------
 MEGA NAVIGATION
 ---------------------------------------------------------------*/
jQuery(window).load(function() {

    $("#nav > li > a").click(function() { // binding onclick
        if ($(this).parent().hasClass('selected')) {
            $("#nav .selected div div").slideUp(100); // hiding popups
            $("#nav .selected").removeClass("selected");
        } else {
            $("#nav .selected div div").slideUp(100); // hiding popups
            $("#nav .selected").removeClass("selected");

            if ($(this).next(".subs").length) {
                $(this).parent().addClass("selected"); // display popup
                $(this).next(".subs").children().slideDown(200);
            }
        }
    });
});

jQuery(window).load(function() {
    $(".social").click(function() {
        $(".social .social-icons").toggleClass("is-active");
    });
});

/*---------------------------------------------------------------
 STICKY SIDBAR

$(function() {
    var h = document.getElementById('body').clientHeight;

    if (h < 707)
    {
        h = 707;
    }

    $('#left-sidebar').css({height: h});
});


$(function() {
    $("#stickybox").stickySidebar({
        speed: 400
        , padding: 120
        , easing: "easeInOutQuad"
        , constrain: true
    });
});
---------------------------------------------------------------*/

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});




/*---------------------------------------------------------------
Buy Now Vendini Button Swap
 ---------------------------------------------------------------*/
// 
// $(document).ready(function() {
// 
// 	setTimeout(function(){
// 	
// 		$(".newwhitebox div img").each(function(index) {
// 		
// 			$(this).replaceWith('<button class="new_buy_btn">buy tickets now</button>');
// 			
// 		});
// 
// 	}, 2000);
// 
// });



/*---------------------------------------------------------------
 Guy Haines Smooth Scroll
 ---------------------------------------------------------------*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 300
        }, 1000);
        return false;
      }
    }
  });
});
	
