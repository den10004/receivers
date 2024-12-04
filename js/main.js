window.addEventListener("vite:preloadError", (e) => {
  window.reload();
});

function toggleBlock(blockId) {
  const block = document.getElementById(blockId);

  if (block.classList.contains("show")) {
    block.classList.remove("show");
    block.nextElementSibling.innerHTML = `Читать полностью <span class="readAll"></span>`;
  } else {
    block.classList.add("show");
    block.nextElementSibling.innerHTML = `Свернуть <span class="readAll-rotate"></span>`;
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
  /*
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
      // responseMessage.textContent = message;
      alert(message);
      closeAllModals();
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
      //responseMessage.textContent = "Произошла ошибка при отправке формы.";
    }
  });*/
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("compilationForm");
  sendForm(form);
  /*
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
      //responseMessage.textContent = message;
      alert(message);
      closeAllModals();
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
      //responseMessage.textContent = "Произошла ошибка при отправке формы.";
    }
  });*/
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("choiceForm");
  sendForm(form);
  /*
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
      alert(message);
      closeAllModals();
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
      //responseMessage.textContent = "Произошла ошибка при отправке формы.";
    }
  });*/
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("helpForm");

  sendForm(form);
  /*
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
      alert(message);
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
      //responseMessage.textContent = "Произошла ошибка при отправке формы.";
    }
  });*/
});

function sendForm(form) {
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
      alert(message);
      closeAllModals();
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
      //responseMessage.textContent = "Произошла ошибка при отправке формы.";
    }
  });
}
