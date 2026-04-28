// ------------------
// 1. 탭 기능
// ------------------

const noticeBtn = document.getElementById("noticeBtn");
const pressBtn = document.getElementById("pressBtn");

const noticeBox = document.getElementById("noticeBox");
const pressBox = document.getElementById("pressBox");

noticeBtn.addEventListener("click", () => {
  noticeBtn.classList.add("active");
  pressBtn.classList.remove("active");

  noticeBox.classList.remove("hidden");
  pressBox.classList.add("hidden");
});

pressBtn.addEventListener("click", () => {
  pressBtn.classList.add("active");
  noticeBtn.classList.remove("active");

  pressBox.classList.remove("hidden");
  noticeBox.classList.add("hidden");
});


// ------------------
// 2. 팝업 기능 (공지 2번째 클릭)
// ------------------

const noticeItems = document.querySelectorAll(".notice-list p");
const popupBg = document.getElementById("popupBg");
const popupClose = document.getElementById("popupClose");

// 👉 2번째 공지 클릭 시 팝업 열기
noticeItems[1].addEventListener("click", () => {
  popupBg.classList.add("show");   // ⭐ class 방식으로 통일
});

// 닫기 버튼
popupClose.addEventListener("click", () => {
  popupBg.classList.remove("show");  // ⭐ 여기 핵심 수정
});

// 배경 클릭 시 닫기
popupBg.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("show");
  }
});


// ------------------
// 3. 배너 전환 (너 방식 유지)
// ------------------

const banner1 = document.querySelector(".banner1");
const banner2 = document.querySelector(".banner2");

let isFirst = true;

setInterval(() => {
  if (isFirst) {
    banner1.style.display = "none";
    banner2.style.display = "block";
  } else {
    banner1.style.display = "block";
    banner2.style.display = "none";
  }

  isFirst = !isFirst;
}, 3000);