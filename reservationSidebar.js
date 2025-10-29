document.addEventListener("DOMContentLoaded", () => {
  // Получаем форму и шаги
  const form = document.getElementById("privateFormSidebar");
  if (!form) return; // Если формы нет на странице, выходим

  const steps = form.querySelectorAll(".form-step");
  let currentStep = 0;

  const successMessage = document.getElementById("private-success");

  // Функция показа текущего шага
  function showStep(step) {
    steps.forEach((s, i) => s.classList.toggle("step-active", i === step));
  }

  showStep(currentStep); // Показываем первый шаг при загрузке

  // Кнопки "Next"
  form.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  // Кнопки "Back"
  form.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  // Обработка отправки формы
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Не перезагружаем страницу

    // Собираем данные
    const data = {
      name: form.guestName.value,
      guests: form.guests.value,
      occasion: form.occasion.value
    };

    // Имитируем отправку на сервер через fetch
    fetch("https://example.com/private-reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          form.style.display = "none";
          successMessage.style.display = "block";
        } else {
          alert("❌ Ошибка отправки формы!");
        }
      })
      .catch(() => alert("❌ Ошибка отправки формы!"));
  });
});
