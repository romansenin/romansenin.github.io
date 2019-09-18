$(document).ready(function() {
  $(".main-nav__brand").addClass("animated fadeInDown");

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

  $("a").click(function() {
    $(this).removeClass("hasactive");
  });

  // Tooltipster
  $(".tooltip").tooltipster({
    animation: "fade",
    delay: 100,
    theme: "tooltipster-punk",
    trigger: "click"
  });
});
