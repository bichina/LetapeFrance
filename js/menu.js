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

//리뷰 더보기 접기
function shortSize(){
  reviewText.style.height="40px";
  more.style.display="block";
}
function longSize(){
  reviewText.style.height="auto";
  more.style.display="none";
}

