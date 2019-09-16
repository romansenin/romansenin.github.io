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

  // $(".email").hover(function() {
  //   $(".email-1").hide();
  //   $(".email-2").show();
  // }, function() {
  //   $(".email-1").show();
  //   $(".email-2").hide();
  // });
});