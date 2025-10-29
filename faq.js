document.addEventListener('DOMContentLoaded', function () {
    const faqQuestion = document.querySelectorAll('.faq-item');

    faqQuestion.forEach(item => {
        const button = item.querySelector('.open-btn');
        const answer = item.querySelector('.faq-content');

        button.addEventListener('click', function () {
            // Переключаем класс для отображения ответа
            answer.classList.toggle('show');

            // Изменяем текст на кнопке
            if (answer.classList.contains('show')) {
                button.textContent = 'Close';  // Если ответ открыт, меняем текст на 'Close'
            } else {
                button.textContent = 'Open';  // Если ответ скрыт, текст обратно 'Open'
            }
        });
    });
});

