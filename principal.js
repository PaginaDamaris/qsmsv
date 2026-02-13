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


function togglePlaylist() {
  const playlist = document.getElementById("playlistContent");

  if (playlist.style.maxHeight) {
    playlist.style.maxHeight = null;
  } else {
    playlist.style.maxHeight = playlist.scrollHeight + "px";
  }
}


function verificarAdmin() {
  const pass = prompt("Ingresa la contraseña:");

  if (pass === "Oscar3262...") {
    const nuevaCancion = prompt("Escribe el nombre de la nueva canción:");

    if (nuevaCancion) {
      document.getElementById("songTitle").textContent = nuevaCancion;

      localStorage.setItem("cancionSemana", nuevaCancion);

      alert("Canción actualizada 💜");
    }
  } else {
    alert("Contraseña incorrecta 😅");
  }
}


window.addEventListener("DOMContentLoaded", function () {
  const guardada = localStorage.getItem("cancionSemana");

  if (guardada) {
    document.getElementById("songTitle").textContent = guardada;
  } else {
    document.getElementById("songTitle").textContent = "Aquí pondré una nueva canción cada semana 💕";
  }
});


