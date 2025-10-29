// === DOM Manipulation and Styling: Rating System ===
document.addEventListener("DOMContentLoaded", () => {
  // Выбираем элементы на странице
  const stars = document.querySelectorAll(".star");
  const message = document.getElementById("rating-message");

  // Добавляем обработчик клика на каждую звезду
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      // Снимаем выделение со всех звёзд
      stars.forEach(s => s.classList.remove("active"));

      // Подсвечиваем звёзды до выбранной
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
      }

      // Меняем текстовое сообщение
      message.textContent = `You rated ${index + 1} out of 5!`;
    });
  });
});
