// JavaScript Document

 $(document).ready(function() {
      $(".banner_slider").owlCarousel({
      
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true,
	  autoplay:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
    });
	
//http://www.jqueryscript.net/demo/jQuery-Plugin-For-Horizontal-Text-Scrolling-Simple-Marquee/
//http://www.jquerynewsticker.com/
	
$(function(){
	    		var timer = !1;
				_Ticker = $("#T1").newsTicker();
				_Ticker.on("mouseenter",function(){
					var __self = this;
					timer = setTimeout(function(){
						__self.pauseTicker();
					},200);
				});
				_Ticker.on("mouseleave",function(){
					clearTimeout(timer);
					if(!timer) return !1;
					this.startTicker();
				});
			});
			
			
			


	
	$(document).ready(function() {
    $(".owl-carousel3").owlCarousel({
		items: 3,
        itemsDesktop: [1400, 3],
        itemsDesktopSmall: [1100, 3],
        itemsTablet: [700, 2],
        itemsMobile: [500, 1],
		autoplay:true
    });
            });			