document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");

  if (navMenu) {
    const menuItems = navMenu.querySelectorAll("a");

    // Ищем текущий активный элемент
    let currentIndex = Array.from(menuItems).findIndex(item => item.classList.contains("active"));
    if (currentIndex === -1) currentIndex = 0; // Если нет active, по умолчанию 0

    // Слушаем клик мышью, чтобы обновлять текущий индекс
    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        currentIndex = index;
      });
    });

    // Навигация клавишами
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % menuItems.length;
        menuItems[currentIndex].focus();
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        menuItems[currentIndex].focus();
        e.preventDefault();
      }
    });
  }
});
