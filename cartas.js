const cards = [
  {
    title: "San valentín 2024",
    date: "2024-02-14",
    link: "carta.html"
  },
  {
    title: "San valentín 2026",
    date: "2026-02-14",
    link: "carta2.html"
  }
];

const container = document.getElementById("cardsContainer");
const today = new Date();

cards.forEach(card => {
  const unlockDate = new Date(card.date + "T00:00:00");

  const div = document.createElement("div");
  div.classList.add("card");

  if (today >= unlockDate) {
    div.classList.add("open");
    div.innerHTML = `💌 ${card.title}`;
    div.onclick = () => window.location.href = card.link;
  } else {
    div.classList.add("locked");
    div.innerHTML = `
      🔒 ${card.title}
      <small>Disponible el ${unlockDate.toLocaleDateString("es-MX")}</small>
    `;
  }

  container.appendChild(div);
});

