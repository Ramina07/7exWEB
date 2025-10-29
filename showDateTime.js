document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("dateTimeDisplay");

  function updateDateTime() {
    const now = new Date();

    // Настройка формата
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const formatted = now.toLocaleString("en-US", options);
    display.textContent = formatted;
  }

  // Обновляем время каждую секунду
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
