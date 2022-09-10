(function ($) {
  $("#mobile-menu_overlay").hide();
  $(".mobile-menu_btn").click(function (e) {
    console.log("clicked");
    $(this).next("#mobile-menu_overlay").addClass("open").slideDown();
  });

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

  function emailValidator() {
    function emailValid() {
      $(".email-error_input-icon").css("display", "none");
      $(".email-error_sign").css("display", "none");
      $("#email_input").css("border", "none");
    }
    function emailNotValid() {
      $(".email-error_input-icon").css("display", "flex");
      $(".email-error_sign").css("display", "flex");
      $("#email_input").css("border", "2px solid var(--Soft-Red)");
    }

    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailInput = $("#email_input");

    if (emailValidation.test(emailInput.value)) {
      emailValid();
      return true;
    } else {
      emailNotValid();
      return false;
    }
  }

  $("#email_input").change(emailValidator);
})(jQuery);
