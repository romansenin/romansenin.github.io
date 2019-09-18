$(document).ready(function() {
  $(".main-nav__brand").addClass("animated fadeInDown");

  // Sticky navbar toggle
  $(".js--about-me").waypoint(
    function(direction) {
      if (direction === "down") $("nav").addClass("sticky");
      else $("nav").removeClass("sticky");
    },
    {
      offset: "65px"
    }
  );

  // Navigation smooth scrolling

  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    const offset = $(window).width() < 979 ? 51 : 64;

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - offset
      },
      1000
    );

    if (!$(this).hasClass("btn") && $(window).width() < 979) {
      $(".js--main-nav").slideToggle();
      $(".js--nav-icon i").addClass("fa-bars");
      $(".js--nav-icon i").removeClass("fa-times");
    } else if ($(window).width() < 979) {
      $(".js--main-nav").hide();
      $(".js--nav-icon i").addClass("fa-bars");
      $(".js--nav-icon i").removeClass("fa-times");
    }
  });

  // Tooltipster
  $(".tooltip-click").tooltipster({
    animation: "fade",
    delay: 100,
    theme: "tooltipster-punk",
    trigger: "click"
  });

  // Tooltipster
  $(".tooltip").tooltipster({
    animation: "fade",
    delay: 0,
    theme: "tooltipster-punk"
  });

  // Animations on scroll
  $(".js--wp-1").waypoint(
    function() {
      $(".js--wp-1").addClass("animated fadeInLeft");
    },
    {
      offset: "60%"
    }
  );

  $(".js--wp-2").waypoint(
    function() {
      $(".js--wp-2").addClass("animated bounceInRight");
    },
    {
      offset: "72%"
    }
  );

  $(".js--wp-3").waypoint(
    function() {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-4").waypoint(
    function() {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "70%"
    }
  );

  // Mobile Navigation
  $(".js--nav-icon").click(function() {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  });
});
