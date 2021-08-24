//이전 단계로 돌아가기
function goBack() {
  window.history.back();
}
//화면의 크기가 760px 이상일때 적용 할 코드
if (matchMedia("screen and (max-width: 1366px)").matches) {
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
}

//이미지 슬라이더
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//메인화면 - 강사소개
$(document).ready(function () {
  $(".bxslider").bxSlider({
    auto: true, // 자동으로 애니메이션 시작
    speed: 500, // 애니메이션 속도
    pause: 4000, // 애니메이션 유지 시간 (1000은 1초)
    mode: "horizontal", // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
    autoControls: true, // 시작 및 중지버튼 보여짐
    pager: true, // 페이지 표시 보여짐
    captions: true, // 이미지 위에 텍스트를 넣을 수 있음
  });
});

// //리뷰 더보기 접기 - 리뷰보기 화면 변경으로 인해 기능 막아둠
// function shortSize() {
//   $(".close").click(function (e) {
//     $(this).parent().siblings(".reviewImg").height("130px");
//     $(this).parent(".reviewText").height("");
//     $(this).parent().next(".more").css("display", "block");
//   });
//   //  reviewText.style.height="40px";
//   // more.style.display="block";
// }
// function longSize() {
//   $(".more").click(function (e) {
//     $(this).prev().siblings(".reviewImg").height("auto");
//     $(this).prev(".reviewText").height("auto");
//     $(this).css("display", "none");
//   });
// }
