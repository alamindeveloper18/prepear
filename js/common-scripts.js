
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
            $('.nav-close').click(function () {
                $("body").removeClass("navShown");
                $(".nav-wrap").fadeOut()
            });
        });
        
        
        if ($('.marquee-slider').length) {
            $('.marquee-slider').marquee({
                direction: 'left',
                duration: 20000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }

        
        // Giving Back page
        if ($('.instagram-item-wrap').length) {
            $('.instagram-item-wrap').slick({
                autoplay: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
                infinite: true,
                responsive: [
                    {
                        
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.instagram-item-wrap').slick('resize');
            });
        }

        if ($('.review-item-wrap').length) {
            $('.review-item-wrap').slick({
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: true,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.review-item-wrap').slick('resize');
            });
        }
        
        // Start shop page
        $('.shop-single-tab-trigger ul li').click(function () {
            $('.shop-single-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.shop-single-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
		
	})// End ready function.
    
	

})(jQuery)

