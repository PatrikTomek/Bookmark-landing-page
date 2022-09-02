(function ($) {
  $(".faq-question").click(function () {
    if ($(this).next(".faq-answer").hasClass("open")) {
      $(".faq-answer").removeClass("open").slideUp();
      $(".faq-arrow").removeClass("reversed-arrow");
    } else {
      $(".faq-answer").removeClass("open").slideUp();
      $(".faq-arrow").removeClass("reversed-arrow");
      $(this).next(".faq-answer").addClass("open").slideDown();
      $(this).children(".faq-arrow").addClass("reversed-arrow");
    }
  });
})(jQuery);
