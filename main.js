"use strict";

// 1. scroll이라는 이벤트가 발생하면 해당 함수를 호출
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 1-1. home 화면이 내려갈수록 투명하게
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 2. 메뉴 클릭 할 경우 해당위치로 scroll
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    //   ==, null,undefined type 상관없이 둘다
    return;
  } else {
    scrollIntoView(link);
  }
});

// 2-1 contactBtn 클릭 할 경우 해당위치로 scroll
const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// 3. arrowup--btn이 아래로 scroll 될 때 보이도록
const arrowBtn = document.querySelector(".arrowup--btn");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});
// 3. arrowup--btn을 클릭 할 경우 위로 scroll
arrowBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});
