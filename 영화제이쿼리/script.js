$(function () {
  $("#main_navigation a").click(function () {
    let target = $(this).attr("data-target");
    //4개의 a들 중에서 선택된 요소가 무엇인지는 this 로 알아낸다.
    $(`:not([data-name=${target}])`).removeClass("active");
    //[]안을 제외한 나머지 라는 뜻
    $(`[data-name=${target}]`).addClass("active");
  });

  let currentPosition = 1;
  $("#character > a:nth-child(1)").click(function () {
    console.log("click");
    currentPosition -= 1;
    if (currentPosition < 1) {
      currentPosition = 3;
    }
    $("article").removeClass("show");
    $(`article:nth-of-type(${currentPosition})`).addClass("show");
  });
  $("#character > a:nth-child(2)").click(function () {
    currentPosition += 1;
    if (currentPosition > 3) {
      currentPosition = 1;
    }
    $("article").removeClass("show");
    $(`article:nth-of-type(${currentPosition})`).addClass("show");
  });
});
