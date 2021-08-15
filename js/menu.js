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
  }
});

//메인화면 - 강사소개
$(document).ready(function () {
  $('.bxslider').bxSlider({
      auto: true, // 자동으로 애니메이션 시작
      speed: 500,  // 애니메이션 속도
      pause: 3000,  // 애니메이션 유지 시간 (1000은 1초)
      mode: 'horizontal', // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
      autoControls: true, // 시작 및 중지버튼 보여짐
      pager: true, // 페이지 표시 보여짐
      captions: true, // 이미지 위에 텍스트를 넣을 수 있음
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

