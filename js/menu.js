//이전 단계로 돌아가기
function goBack() {
  window.history.back();
}

//메뉴보기
$(document).ready(function () {
  $(".mobileMenu").on("click", function () {
    // $('.menu_bg').show();
    $(".menuwrap").show().animate({
      right: 0,
    });
  });
  $(".mobileMenuClose").on("click", function () {
    // $('.menu_bg').hide();
    $(".menuwrap").animate(
      {
        right: "-" + 100 + "%",
      },
      function () {
        $(".menuwrap").hide();
      }
    );
  });
});

//헤더 스크롤시 변하는 거
