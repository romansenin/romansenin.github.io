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
  $(".tooltip").tooltipster({
    animation: "fade",
    delay: 100,
    theme: "tooltipster-punk",
    trigger: "click"
  });

  // Animations on scroll
  
});
