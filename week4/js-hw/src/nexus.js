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

const noticeItems = document.querySelectorAll(".notice-list p");
const popupBg = document.getElementById("popupBg");
const popupClose = document.getElementById("popupClose");

noticeItems[1].addEventListener("click", () => {
  popupBg.classList.add("show");
});

popupClose.addEventListener("click", () => {
  popupBg.classList.remove("show");
});

popupBg.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("show");
  }
});

const bannerWrap = document.querySelector(".banner-wrap");

let index = 0;

setInterval(() => {
  index++;

  if (index > 1) {
    index = 0;
  }

  bannerWrap.style.transform = `translateY(-${index * 400}px)`;
}, 3000);