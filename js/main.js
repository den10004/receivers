window.addEventListener("vite:preloadError", (e) => {
  window.reload();
});

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
/*
const headerOpen = document.querySelector(".header-open");
const headerMenu = document.querySelector(".header__links");*/
const openConsultModal = document.querySelectorAll(".cons-open");
const openCompilationModal = document.querySelectorAll(".compilationOpenModal");
const openChoiceModal = document.querySelector(".openChoiceModal");
const closeAllModal = document.querySelectorAll(".closeAllModal");
const popup = document.querySelectorAll(".popup");
const popupChoiceModal = document.querySelector(".popup-choice");
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
/*
function openHeader() {
  headerMenu.style.display = "flex";
}
*/
function openConsultModalFunc() {
  consultModal.style.display = "block";
}

function openChoiceModalFunc() {
  popupChoiceModal.style.display = "block";
}

function openConsultCompilationFunc(title) {
  CompilationModal.style.display = "block";
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = title;
}
/*
headerOpen.addEventListener("click", openHeader);*/

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
    const title = e.target.dataset.title;
    openConsultCompilationFunc(title);
  })
);

openChoiceModal.addEventListener("click", openChoiceModalFunc);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultForm");
  sendForm(form);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("helpForm");
  sendForm(form);
});

function sendForm(form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    try {
      const formData = new FormData(form);
      let object = {};
      formData.forEach((value, key) => (object[key] = value));
      localStorage.setItem("name", object.name);
      const response = await fetch("sendforms.php", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const message = await response.text();
      closeAllModals();
      window.location.href = "/thanks.html";
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
    }
  });
}
