// === Theme Toggle Script ===
// Этот код запускается только после полной загрузки страницы
document.addEventListener("DOMContentLoaded", () => {

  // Находим кнопку по ID
  const themeBtn = document.getElementById("theme-btn");

  // Проверяем, есть ли вообще кнопка на странице
  if (!themeBtn) return;

  // Выбираем все основные элементы, которые должны менять тему
  const elements = document.querySelectorAll("body, header, main, footer, .sidebar");

  // Добавляем обработчик события клика
  themeBtn.addEventListener("click", () => {
    // Переключаем класс night-mode у всех выбранных элементов
    elements.forEach(el => el.classList.toggle("night-mode"));

    // Меняем текст кнопки для удобства пользователя
    if (document.body.classList.contains("night-mode")) {
      themeBtn.textContent = "Switch to Day Mode ☀️";
    } else {
      themeBtn.textContent = "Switch to Night Mode 🌙";
    }
  });
});
