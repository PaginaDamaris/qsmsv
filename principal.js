document.addEventListener("DOMContentLoaded", () => {

  const correctPassword = "soypobreeinutil";

  const passwordModal = document.getElementById("passwordModal");
  const passwordInput = document.getElementById("passwordInput");
  const passwordBtn = document.getElementById("passwordBtn");
  const passwordError = document.getElementById("passwordError");

  const valentinModal = document.getElementById("valentinModal");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  passwordModal.style.display = "none";
  valentinModal.style.display = "none";

  if (!localStorage.getItem("passwordUnlocked")) {
    passwordModal.style.display = "flex";
  } else if (localStorage.getItem("valentinAccepted") !== "true") {
    valentinModal.style.display = "flex";
  }

  passwordBtn.addEventListener("click", checkPassword);
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPassword();
  });

  function checkPassword() {
    if (passwordInput.value === correctPassword) {
      localStorage.setItem("passwordUnlocked", "true");
      passwordModal.style.display = "none";
      valentinModal.style.display = "flex";
    } else {
      passwordError.textContent = "Mmm… esa no es 🥺 inténtalo otra vez 💕";
      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  yesBtn.addEventListener("click", () => {
    localStorage.setItem("valentinAccepted", "true");
    valentinModal.querySelector(".question-text").textContent =
      "Gracias mi amorrr, te amo 💕";

    setTimeout(() => {
      valentinModal.style.display = "none";
    }, 1200);
  });

  noBtn.addEventListener("click", () => {
    valentinModal.querySelector(".question-text").textContent =
      "Inténtalo otra vez… 😌";
    noBtn.style.display = "none";
  });

});


