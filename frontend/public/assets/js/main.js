(function ($) {
  "use strict";

  $(document).ready(function () {
    
    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Sticky Header Js Start <<//
    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    //>> Hero Slider Start <<//
    const sliderActive2 = ".hero-slider";
    const sliderInit2 = new Swiper(sliderActive2, {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 3000,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });

    function animated_swiper(selector, init) {
      const animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");
          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one("animationend", function () {
              $(this).removeClass(anim + " animated");
            });
        });
      };
      animated();
      init.on("slideChange", function () {
        $(sliderActive2 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }
    animated_swiper(sliderActive2, sliderInit2);

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Mouse Cursor Start <<//
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");

        if (e && t) {  // تحقق من وجود العناصر
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          });

          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover"));
          });

          e.style.visibility = "visible";
          t.style.visibility = "visible";
        }
      }
    }
    $(function () {
      mousecursor();
    });

    //>> Loader (Preloader) <<//
    function loader() {
      $(window).on("load", function () {
        $(".preloader").addClass("loaded");
        $(".preloader").delay(600).fadeOut();
      });
    }
    loader();
    
  }); // End Document Ready Function
})(jQuery);
