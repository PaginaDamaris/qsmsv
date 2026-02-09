document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");
  const items = list.querySelectorAll("li");

  let position = -Math.random() * (list.scrollHeight / 2);

  const speed = 0.15;

  function animate() {
    position -= speed;

    if (Math.abs(position) >= list.scrollHeight / 2) {
  position = -Math.random() * (list.scrollHeight / 2);
}
    list.style.transform = `translateY(${position}px)`;
    const center = window.innerHeight / 2;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const middle = rect.top + rect.height / 2;
      if (Math.abs(middle - center) < 9) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
});

function goBack() {
  window.history.back();
}




