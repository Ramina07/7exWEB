document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeColorBtn");

  // Массив цветов для фона
  const colors = ["#ffb6c1", "#ffd6a5", "#caffbf", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#ffffc7"];

  button.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
});
