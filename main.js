"use strict";

// 1. scroll이라는 이벤트가 발생하면 class추가 및 삭제
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
const navbarLog = document.querySelector(".navbar__logo img");

navbarLog.addEventListener("click", () => {
  scrollIntoView("#home");
});

navbarMenu.addEventListener("click", (event) => {
  const active = document.querySelector(".navbar__menu__item.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  event.target.classList.add("selected");

  const link = event.target.dataset.link;
  if (link == null) {
    //   ==, null,undefined type 상관없이 둘다
    return;
  } else {
    scrollIntoView(link);
  }
});

// 2-1. toggle button
const toggleBtn = document.querySelector(".navbar__toggle-btn");

toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("toggle");
});

// 2-2 contactBtn 클릭 할 경우 해당위치로 scroll
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
// 3-1. arrow up--btn을 클릭 할 경우 위로 scroll
arrowBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

// 4. work 버튼을 클릭 할 경우 project 이미지가 필터링
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  // 버튼과 span버튼안에 있는 속성 data-filter값
  if (filter == null) {
    return;
  }
  // 선택된 버튼만 하이라이트 class 추가
  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  } else {
    event.target.classList.add("selected");
  }

  // 버튼을 클릭했을 때 animation-out class(작아지고 내려가는) 추가
  projectContainer.classList.add("animation-out");

  // setTimeout, 300초가 지나면 필터링 되면서
  // animation-out class(작아지고 내려가는) 삭제
  // setTimeout을 사용하지 않을 경우 필터링 후 animation이 적용되서 부자연스럽다.
  setTimeout(() => {
    projects.forEach((project) => {
      // 배열 각각(project)을 순회
      if (filter === "*" || filter === project.dataset.type) {
        // 버튼에 filter값이 *이거나 project type값이 같다면
        // 안보이는게 하는 class를 삭제
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("animation-out");
  }, 300);
});
