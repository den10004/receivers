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

function toggleBlock(blockId) {
  const block = document.getElementById(blockId);
  const readAll = document.querySelector(".readAll");
  const readAllAfter = window.getComputedStyle(readAll, "::after");
  if (block.classList.contains("show")) {
    block.classList.remove("show");
    block.previousElementSibling.textContent = "Читать полностью";
    const x = window.getComputedStyle(block.previousElementSibling, "::after");
    console.log(x.content);
  } else {
    block.classList.add("show");
    block.previousElementSibling.textContent = "Скрыть блок";
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
const headerMenu = document.querySelector(".header__links");
const openConsultModal = document.querySelectorAll(".cons-open");
const openCompilationModal = document.querySelectorAll(".compilationOpenModal");
const closeAllModal = document.querySelectorAll(".closeAllModal");
const popup = document.querySelectorAll(".popup");
const consultModal = document.querySelector(".popup-consultation");
const CompilationModal = document.querySelector(".popup-compilation");

document.body.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeAllModals();
  }
});

function closeAllModals() {
  popup.forEach((el) => (el.style.display = "none"));
  document.body.style.overflow = "";
}

function openHeader() {
  headerMenu.style.display = "flex";
}

function openConsultModalFunc() {
  consultModal.style.display = "block";
}

function openConsultCompilationFunc() {
  CompilationModal.style.display = "block";
}

headerOpen.addEventListener("click", openHeader);

closeAllModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    closeAllModals();
  })
);

openConsultModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    openConsultModalFunc();
  })
);

openCompilationModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    openConsultCompilationFunc();
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      const formData = new FormData(form);
      const response = await fetch("sendforms.php", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const message = await response.text();
      responseMessage.textContent = message;
      console.log(response);
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      responseMessage.textContent = "Произошла ошибка при отправке формы.";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("compilationForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      const formData = new FormData(form);
      const response = await fetch("sendforms.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const message = await response.text();
      responseMessage.textContent = message;
      console.log(response);
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      responseMessage.textContent = "Произошла ошибка при отправке формы.";
    }
  });
});
