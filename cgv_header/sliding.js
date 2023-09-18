$(function () {
  let trigger = $("#nav_list");
  let slide = $("#slider_container");

  $(trigger).on("mouseenter", function (e) {
    e.preventDefault();
    slide.slideToggle();
  });
});

