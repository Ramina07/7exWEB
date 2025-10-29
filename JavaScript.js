document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    let isValid = true;

    // Очистка предыдущих сообщений об ошибках
    let errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(function(msg) {
      msg.remove();
    });

    // Валидация поля 'name'
    let name = document.getElementById("resName");
    let nameRegex = /^[a-zA-Z\s]+$/; // Проверка, что имя содержит только буквы и пробелы
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    } else if (!nameRegex.test(name.value)) {
      showError(name, "Please enter a valid name (only letters and spaces)");
      isValid = false;
    }

    // Валидация поля 'email'
    let email = document.getElementById("resEmail");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    // Валидация поля 'phone'
    let phone = document.getElementById("phone");
    let phoneRegex = /^7\d{10}$/; // Проверка на 11 цифр, начинающихся с 7
    if (phone.value.trim() === "") {
      showError(phone, "Phone number is required");
      isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
      showError(phone, "Please enter a valid phone number (11 digits, starting with 7)");
      isValid = false;
    }

    // Валидация поля 'date' (формат даты DD.MM.YYYY)
    let date = document.getElementById("date");
    let dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (date.value.trim() === "") {
      showError(date, "Reservation date is required");
      isValid = false;
    } else if (!dateRegex.test(date.value)) {
      showError(date, "Please enter a valid date in the format DD.MM.YYYY");
      isValid = false;
    } else {
      let parts = date.value.split(".");
      let day = parseInt(parts[0]);
      let month = parseInt(parts[1]);
      let year = parseInt(parts[2]);

      if (month < 1 || month > 12) {
        showError(date, "Month must be between 01 and 12");
        isValid = false;
      }

      if (isValid) {
        let daysInMonth = getDaysInMonth(month, year);
        if (day < 1 || day > daysInMonth) {
          showError(date, `Day must be between 01 and ${daysInMonth}`);
          isValid = false;
        }
      }
    }

    // Валидация поля 'time' (формат времени HH:MM)
    let time = document.getElementById("time");
    let timeRegex = /^[0-2][0-9]:[0-5][0-9]$/;
    if (time.value.trim() === "") {
      showError(time, "Reservation time is required");
      isValid = false;
    } else if (!timeRegex.test(time.value)) {
      showError(time, "Please enter a valid time in the format HH:MM");
      isValid = false;
    }

    // Если форма не валидна — предотвратить отправку
    if (!isValid) {
      event.preventDefault();
    } else {
      // ✅ Если форма заполнена правильно:
      event.preventDefault(); // предотвращаем перезагрузку страницы
      alert("✅ Reservation successfully submitted!");
      form.reset(); // очищаем форму
    }
  });

  // Функция для отображения сообщения об ошибке
  function showError(inputElement, message) {
    if (!inputElement.nextElementSibling || !inputElement.nextElementSibling.classList.contains("error")) {
      let errorMessage = document.createElement("div");
      errorMessage.classList.add("error");
      errorMessage.style.color = "red";
      errorMessage.textContent = message;
      inputElement.insertAdjacentElement("afterend", errorMessage);
    }
  }

  // Функция для вычисления количества дней в месяце
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
});


