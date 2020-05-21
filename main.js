"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

// 1. scroll이라는 이벤트가 발생하면 해당 함수를 호출
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 2. 메뉴 클릭 할 경우 해당위치로 scroll
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    //   ==, null,undefined type 상관없이 둘다
    return;
  } else {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
    console.log(event.target.dataset.link);
  }
});
