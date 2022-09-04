(function ($) {
  function featuresPageChanger() {
    $(".nav-header_slider").click(function (e) {
      e.preventDefault();
      $(".nav-header_slider").removeAttr("id");
      $(this).attr("id", "active");

      var attr = $(this).attr("id", "active");

      if (typeof attr !== typeof undefined && attr !== false) {
        if ($(this).hasClass("bookmark_btn")) {
          $(".slider_page").removeClass("active_page");
          $(".simple-bookmarking_page").addClass("active_page");
        }
        if ($(this).hasClass("intelligent-search_btn")) {
          $(".slider_page").removeClass("active_page");
          $(".intelligent-search_page").addClass("active_page");
        }
        if ($(this).hasClass("share-bookmarks_btn")) {
          $(".slider_page").removeClass("active_page");
          $(".share-bookmarks_page").addClass("active_page");
        }
      }
    });
  }
  featuresPageChanger();

  function faqAccordion() {
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
  }
  faqAccordion();
})(jQuery);
