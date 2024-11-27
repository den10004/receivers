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

const dropCheckmark = document.querySelector(".drop-checkmark");

function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown");
  if (dropdown.classList.contains("show")) {
    dropCheckmark.style.transform = "rotate(180deg)";
    dropdown.classList.remove("show");
  } else {
    setTimeout(() => {
      dropdown.classList.add("show");
    }, 500);
  }
}
