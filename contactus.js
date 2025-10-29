document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openPopupBtn');
  const closeBtn = document.getElementById('closePopupBtn');
  const popup = document.getElementById('popupForm');

  // Открыть форму
  openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  // Закрыть форму по X
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Закрыть при клике вне формы
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  
});
