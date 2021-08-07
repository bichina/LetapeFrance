document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mobileMenu").addEventListener("click", function (e) {
    if (document.querySelector(".menuwrap").classList.contains("on")) {
      //메뉴닫힘
      document.querySelector(".menuwrap").classList.remove("on");
      document.querySelector(".mobileMenu img").classList.remove("closeIcon");
      document.querySelector(".mobileMenu img").classList.add("panelIcon");

      //페이지 스크롤 락 해제
      document.querySelector("#dimmed").remove();
    } else {
      //메뉴펼침
      document.querySelector(".menuwrap").classList.add("on");
      document.querySelector(".mobileMenu img").classList.remove("panelIcon");
      document.querySelector(".mobileMenu img").classList.add("closeIcon");

      //페이지 스크롤 락 레이어 추가
      let div = document.createElement("div");
      div.id = "dimmed";
      document.body.append(div);

      //페이지 스크롤 락  모바일 이벤트 차단
      document
        .querySelector("#dimmed")
        .addEventListener("scroll touchmove touchend mousewheel", function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        });

      //페이지 스크롤 락 레이어 클릭 메뉴 닫기
      document.querySelector("#dimmed").addEventListener("click", function (e) {
        document.querySelector("..mobileMenu1").click();
      });
    }
  });
});
