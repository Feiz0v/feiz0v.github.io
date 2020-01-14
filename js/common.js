$(document).mousemove(function(e) {
    var x = (e.pageX * -1 / 40), y = (e.pageY * -1 / 40);
    $('.parallax').css('background-position', x + 'px ' + y + 'px');
});
$(document).ready(function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
        $(".header").addClass("scrolled");
        $(".header__container").addClass("scrolled");
        $(".logo").addClass("scrolled-logo");
        $(".fa-globe-asia").addClass("scrolled-asia");
        $(".menu__item").addClass("new-bottom");
        $(".menu__item").addClass("scrolled-menu");
        $(".contacts").addClass("scrolled-contacts");
        $(".contacts__link").addClass("new-bottom-contacts");
      } else {
        $(".header").removeClass("scrolled");
        $(".header__container").removeClass("scrolled");
        $(".logo").removeClass("scrolled-logo");
        $(".fa-globe-asia").removeClass("scrolled-asia");
        $(".menu__item").removeClass("new-bottom");
        $(".menu__item").removeClass("scrolled-menu");
        $(".contacts").removeClass("scrolled-contacts");
        $(".contacts__link").removeClass("new-bottom-contacts");
      }
    });
  });

  $(document).ready(function(){
    var owl = $('.owl-carousel');
    $('.owl-carousel').owlCarousel({
        onTranslated: function(me) {
            $(me.target).find(".owl-item [class]:not(.center)").each(function(j) {
                $('.portfolio__description').removeClass("desc-active");
            });
            $(me.target).find(".owl-item.center").each(function(i) {
                $('.center .portfolio__description').addClass("desc-active");
            });
        },
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        loop:true,
        margin:100,
        nav:true,
        center:true,
        autoWidth:true,
        items: 3,
        dots:false,
        navSpeed:1200,
        navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
    });
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        menu: '#top-menu',
        anchors:['homePage', 'portfolioPage', 'whatIncludePage', 'variantsPage', 'aboutPage'],
        css3: true,
        navigation: true,
        lockAnchors: false,
        onLeave: function(origin, destination, direction){
            var leavingSection = this;
            if(destination.index !== 0) {
                $(".header").addClass("scrolled");
                $(".header__container").addClass("scrolled");
                $(".logo").addClass("scrolled-logo");
                $(".fa-globe-asia").addClass("scrolled-asia");
                $(".menu__item").addClass("new-bottom");
                $(".menu__item").addClass("scrolled-menu");
                $(".contacts").addClass("scrolled-contacts");
                $(".contacts__link").addClass("new-bottom-contacts");
            } else if(destination.index == 0){
                $(".header").removeClass("scrolled");
                $(".header__container").removeClass("scrolled");
                $(".logo").removeClass("scrolled-logo");
                $(".fa-globe-asia").removeClass("scrolled-asia");
                $(".menu__item").removeClass("new-bottom");
                $(".menu__item").removeClass("scrolled-menu");
                $(".contacts").removeClass("scrolled-contacts");
                $(".contacts__link").removeClass("new-bottom-contacts");
            }
            //after leaving section 2
            if(origin.index == 0 && (destination.index == 1 || destination.index == 2 || destination.index == 3 || destination.index == 4) && direction =='down'){
                $('a.home-link').removeClass('active-p');
               if (destination.index == 1) {
                $('a.portfolio-link').addClass('active-p');
               } else if (destination.index == 2) {
                $('a.what-include-link').addClass('active-p');
               } else if (destination.index == 3) {
                $('a.variants-link').addClass('active-p');
               } else if (destination.index == 4) {
                $('a.about-link').addClass('active-p');  
               }
            }
    
            else if(origin.index == 1 && direction == 'up'){
                $('a.home-link').addClass('active-p'),
                $('a.portfolio-link').removeClass('active-p');
            } 
            
            else if(origin.index == 1 && (destination.index == 2 || destination.index == 3 || destination.index == 4) && direction == 'down'){
                $('a.portfolio-link').removeClass('active-p');
                if(destination.index == 2) {
                    $('a.what-include-link').addClass('active-p');
                } else if (destination.index == 3) {
                    $('a.variants-link').addClass('active-p');
                } else if (destination.index == 4) {
                    $('a.about-link').addClass('active-p');
                }
                
            }

            else if(origin.index == 2 && (destination.index == 1 || destination.index == 0) && direction == 'up'){
                $('a.what-include-link').removeClass('active-p');
                if (destination.index == 1) {
                    $('a.portfolio-link').addClass('active-p');
                } else if (destination.index == 0) {
                    $('a.home-link').addClass('active-p');
                }
            }

            else if (origin.index == 2 && (destination.index == 3 || destination.index == 4) && direction == 'down'){
                $('a.what-include-link').removeClass('active-p');
                if (destination.index == 3) {
                    $('a.variants-link').addClass('active-p');
                } else if (destination.index == 4) {
                    $('a.about-link').addClass('active-p');
                }
            }

            else if(origin.index == 3 && (destination.index == 2 || destination.index == 1 || destination.index == 0) && direction == 'up'){
                $('a.variants-link').removeClass('active-p');
                if (destination.index == 2) {
                    $('a.what-include-link').addClass('active-p');
                } else if(destination.index == 1) {
                    $('a.portfolio-link').addClass('active-p');
                } else if(destination.index == 0) {
                    $('a.home-link').addClass('active-p');
                }
            }

            else if(origin.index == 3 && direction == 'down'){
                $('a.about-link').addClass('active-p'),
                $('a.variants-link').removeClass('active-p');
            } 
            
            else if(origin.index == 4 && (destination.index == 3 || destination.index == 2 || destination.index == 1 || destination.index == 0) && direction == 'up'){
                $('a.about-link').removeClass('active-p');
                if(destination.index == 3) {
                    $('a.variants-link').addClass('active-p');
                } else if(destination.index == 2) {
                    $('a.what-include-link').addClass('active-p');
                } else if(destination.index == 1) {
                    $('a.portfolio-link').addClass('active-p');
                } else if(destination.index == 0) {
                    $('a.home-link').addClass('active-p');
                }
            }
        }
    });
    
    //methods
    fullpage_api.setAllowScrolling(true);
});

$(document).ready(function() {
    $('#cmsItem').mouseenter(function(){
        setTimeout(function(){
            $('#cmsItem .top-bord').addClass('top-zero');
         }, 0);
         setTimeout(function(){
            $('#cmsItem .right-bord').addClass('right-zero');
         }, 210);
         setTimeout(function(){
            $('#cmsItem .bottom-bord').addClass('bottom-zero');
         }, 0);
         setTimeout(function(){
            $('#cmsItem .left-bord').addClass('left-zero');
         }, 210);
        setTimeout(function(){
            $('#designItem .left-bord, #impLayoutItem .left-bord, #programmingItem .left-bord').removeClass('left-zero');
         }, 0);
         setTimeout(function(){
            $('#designItem .bottom-bord, #impLayoutItem .bottom-bord, #programmingItem .bottom-bord').removeClass('bottom-zero');
         }, 210);
        setTimeout(function(){
            $('#designItem .right-bord, #impLayoutItem .right-bord, #programmingItem .right-bord').removeClass('right-zero');
         }, 0);
        setTimeout(function(){
            $('#designItem .top-bord, #impLayoutItem .top-bord, #programmingItem .top-bord').removeClass('top-zero');
         }, 210);
         setTimeout(function() {
            $('#cms').addClass('what-description_active'),
            $('#cmsItem i').addClass('light'),
            $('#design, #impLayout, #programming').removeClass('what-description_active'),
            $('#designItem i, #impLayoutItem i, #programmingItem i').removeClass('light'),
            $('.design, .imp-layout, .programming').removeClass('what-include_active');
         }, 150);
     });

     $('#designItem').mouseenter(function(){
        setTimeout(function(){
            $('#designItem .top-bord').addClass('top-zero');
         }, 0);
         setTimeout(function(){
            $('#designItem .right-bord').addClass('right-zero');
         }, 210);
         setTimeout(function(){
            $('#designItem .bottom-bord').addClass('bottom-zero');
         }, 0);
         setTimeout(function(){
            $('#designItem .left-bord').addClass('left-zero');
         }, 210);
         setTimeout(function() {
            $('#design').addClass('what-description_active'),
            $('#cms, #impLayout, #programming').removeClass('what-description_active'),
            $('#designItem i').addClass('light'),
            $('#cmsItem i, #impLayoutItem i, #programmingItem i').removeClass('light'),
            $('.cms, .imp-layout, .programming').removeClass('what-include_active');
         }, 150);
         setTimeout(function(){
            $('#cmsItem .left-bord, #impLayoutItem .left-bord, #programmingItem .left-bord').removeClass('left-zero');
         }, 0);
         setTimeout(function(){
            $('#cmsItem .bottom-bord, #impLayoutItem .bottom-bord, #programmingItem .bottom-bord').removeClass('bottom-zero');
         }, 210);
        setTimeout(function(){
            $('#cmsItem .right-bord, #impLayoutItem .right-bord, #programmingItem .right-bord').removeClass('right-zero');
         }, 0);
        setTimeout(function(){
            $('#cmsItem .top-bord, #impLayoutItem .top-bord, #programmingItem .top-bord').removeClass('top-zero');
         }, 210);
     });

     $('#impLayoutItem').mouseenter(function(){
        setTimeout(function(){
            $('#impLayoutItem .top-bord').addClass('top-zero');
         }, 0);
         setTimeout(function(){
            $('#impLayoutItem .right-bord').addClass('right-zero');
         }, 210);
         setTimeout(function(){
            $('#impLayoutItem .bottom-bord').addClass('bottom-zero');
         }, 0);
         setTimeout(function(){
            $('#impLayoutItem .left-bord').addClass('left-zero');
         }, 210);
         setTimeout(function() {
            $('#impLayout').addClass('what-description_active'),
            $('#cms, #design, #programming').removeClass('what-description_active'),
            $('#impLayoutItem i').addClass('light'),
            $('#cmsItem i, #designItem i, #programmingItem i').removeClass('light'),
            $('.cms, .design, .programming').removeClass('what-include_active');
         }, 150);
         setTimeout(function(){
            $('#designItem .left-bord, #cmsItem .left-bord, #programmingItem .left-bord').removeClass('left-zero');
         }, 0);
         setTimeout(function(){
            $('#designItem .bottom-bord, #cmsItem .bottom-bord, #programmingItem .bottom-bord').removeClass('bottom-zero');
         }, 210);
        setTimeout(function(){
            $('#designItem .right-bord, #cmsItem .right-bord, #programmingItem .right-bord').removeClass('right-zero');
         }, 0);
        setTimeout(function(){
            $('#designItem .top-bord, #cmsItem .top-bord, #programmingItem .top-bord').removeClass('top-zero');
         }, 210);
     });

     $('#programmingItem').mouseenter(function(){
        setTimeout(function(){
            $('#programmingItem .top-bord').addClass('top-zero');
         }, 0);
         setTimeout(function(){
            $('#programmingItem .right-bord').addClass('right-zero');
         }, 210);
         setTimeout(function(){
            $('#programmingItem .bottom-bord').addClass('bottom-zero');
         }, 0);
         setTimeout(function(){
            $('#programmingItem .left-bord').addClass('left-zero');
         }, 210);
         setTimeout(function() {
            $('#programming').addClass('what-description_active'),
            $('#cms, #design, #impLayout').removeClass('what-description_active'),
            $('#programmingItem i').addClass('light'),
            $('#cmsItem i, #designItem i, #impLayoutItem i').removeClass('light'),
            $('.cms, .design, .imp-layout').removeClass('what-include_active');
         }, 150);
         setTimeout(function(){
            $('#designItem .left-bord, #cmsItem .left-bord, #impLayoutItem .left-bord').removeClass('left-zero');
         }, 0);
         setTimeout(function(){
            $('#designItem .bottom-bord, #cmsItem .bottom-bord, #impLayoutItem .bottom-bord').removeClass('bottom-zero');
         }, 210);
        setTimeout(function(){
            $('#designItem .right-bord, #cmsItem .right-bord, #impLayoutItem .right-bord').removeClass('right-zero');
         }, 0);
        setTimeout(function(){
            $('#designItem .top-bord, #cmsItem .top-bord, #impLayoutItem .top-bord').removeClass('top-zero');
         }, 210);
     });

     $('.hamburger').click(function(){
         $('.hamburger').toggleClass('is-active');
         $('.mobile').toggleClass('mobile-active');
     });
     $('.mobile__navlink').click(function(){
        $('.mobile').removeClass('mobile-active');
        $('.hamburger').removeClass('is-active');
     });
});