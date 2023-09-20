$(function () {
  let trigger = $("#nav_list");
  let slide = $("#slider_container");

  $(trigger).on("mouseenter", function (e) {
    e.preventDefault();
    slide.slideToggle();
  });

  //   $(trigger).on("mouseout", function (e){
  //     e.preventDefault();
  //     slide.slideToggle();
  // slide.removeAttr("style");
  //   })
});

// $("#nav_list").mouseenter(function () {
//   let menu_i = $(this).index();
//   if (menu_i < 4) {
//     //하단 바(빨간색) 이동으로 인해 index는 4 이하로 한정시킴
//     $(".menu_pan")
//       .css({
//         //모두 display:none 시킨 후
//         display: "none",
//       })
//       .eq($(this).index())
//       .css({
//         // 해당 인덱스 넘버만 보여질 수 있도록 한다.
//         display: "block",
//       });
//   }
// });

// $("#nav_list").mouseleave(function () {
//   let menu_i = $(this).index();

//   if (menu_i < 4) {
//     $("#slider_container").eq($(this).index()).css({
//       display: "none",
//     });
//   }
// });

// //slider_container에 마우스가 올라가있지 않으면...
// $("#slider_container").mouseenter(function () {
//   $(this).css({
//     display: "block",
//   });
// });
// $("#slider_container").mouseleave(function () {
//   $(this).css({
//     display: "none",
//   });
// });
