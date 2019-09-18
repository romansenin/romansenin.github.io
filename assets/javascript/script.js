$(document).ready(function() {
  $(".main-nav__brand").addClass("animated fadeInDown");

  // Sticky navbar toggle
  $(".js--about-me").waypoint(function(direction) {
    if (direction === "down") $("nav").addClass("sticky");
    else $("nav").removeClass("sticky");
  }, {
    offset: "65px"
  });

  // Navigation smooth scrolling

  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      1000
    );
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
  $(".js--wp-1").waypoint(function() {
    $(".js--wp-1").addClass("animated fadeInLeft");
  }, {
    offset: "60%"
  });
  
  $(".js--wp-2").waypoint(function() {
    $(".js--wp-2").addClass("animated bounceInRight");
  }, {
    offset: "72%"
  });

  $(".js--wp-3").waypoint(function() {
    $(".js--wp-3").addClass("animated fadeIn");
  }, {
    offset: "70%"
  });

  $(".js--wp-4").waypoint(function() {
    $(".js--wp-4").addClass("animated pulse");
  }, {
    offset: "70%"
  });
});
