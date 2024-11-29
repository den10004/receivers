/*import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
*/

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper4 = new Swiper(".mySwiper4", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper5 = new Swiper(".mySwiper5", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper6 = new Swiper(".mySwiper6", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper7 = new Swiper(".mySwiper7", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper8 = new Swiper(".mySwiper8", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

function toggleDropdown(button) {
  const dropdownContent = button.nextElementSibling;
  if (dropdownContent.classList.contains("hidden")) {
    dropdownContent.classList.remove("hidden");
    dropdownContent.classList.add("show");
  } else {
    dropdownContent.classList.remove("show");
    dropdownContent.classList.add("hidden");
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const topOffset = target.offsetTop;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  });
});

const headerOpen = document.querySelector(".header-open");
const headerMenu = document.querySelector(".header__menu");
const closeAllModal = document.querySelectorAll(".closeAllModal");
const popup = document.querySelectorAll(".popup");

function closeAllModals() {
  popup.forEach((el) => (el.style.display = "none"));
  document.body.style.overflow = "";
}

function openHeader() {
  headerMenu.style.display = "block";
}

headerOpen.addEventListener("click", openHeader);

closeAllModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    closeAllModals();
  })
);
