document.addEventListener("DOMContentLoaded", () => {
  const loadInfoBtn = document.getElementById("load-info-btn");
  const infoResult = document.getElementById("info-result");

  let currentIndex = 0;

  loadInfoBtn.addEventListener("click", () => {
    fetch('restaurantInfo.json')
      .then(response => response.json())
      .then(data => {
        const info = data[currentIndex];

        // Добавляем контент в контейнер, не заменяя предыдущий
        const newEntry = document.createElement("div");
        newEntry.classList.add("info-entry");
        newEntry.innerHTML = `
          <p><strong>Address:</strong> ${info.address}</p>
          <p><strong>Working Hours:</strong> ${info.hours}</p>
          <p><strong>Did you know?</strong> ${info.fact}</p>
          <hr>
        `;

        infoResult.appendChild(newEntry);
        infoResult.style.display = "block";

        // Переходим к следующей записи
        currentIndex = (currentIndex + 1) % data.length;
      })
      .catch(error => {
        console.error("Error loading restaurant info:", error);
      });
  });
});

