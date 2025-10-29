document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select-header");

  const translations = {
    en: {
      nav: ["Home", "Menu", "About", "Contact"],
      sidebar: ["Contact Us", "Reserve a Table", "Contact Information", "Rate Our Website", "Click on a star to rate!", "Switch to Night Mode 🌙", "🍣 Random Japanese Food Fact", "Click the button to discover an interesting fact!"],
      hero: ["About Us", "Authentic Japanese Cuisine with a Modern Twist"],
      gallery: ["Upcoming Events", "Live Music Night", "Cooking Class with Chef", "Themed Party Night", "Culinary Discovery Night", "Japanese Traditions Night", "Wine Tasting Event", "Japanese Cuisine Workshop", "Sushi Making Workshop", "Japan Food Tour"],
      interior: ["Interior Design"],
      offers: ["Special Offers", "Birthday Discount", "Get 15% off on your birthday! Celebrate with us and make your special day even better.", "First Delivery Free", "Your first delivery is on us! Enjoy the convenience of having our delicious dishes delivered to your door for free.", "Free Drink with Any Meal", "Order any meal and get a free drink! Enjoy your meal with a refreshing beverage on us.", "Use Offer"],
      faq: ["Frequently Asked Questions", "What payment methods does your restaurant accept?", "We accept cash, bank cards (Visa, MasterCard, Mir), and online payments via Kaspi Pay and Apple Pay.", "Do I need to book a table in advance?", "We recommend booking in advance, especially during evenings and weekends. You can make a reservation through our website or by phone.", "Is it possible to host private events at your restaurant?", "Yes, we have private dining areas suitable for events such as birthdays, corporate dinners, and celebrations. Please contact us in advance to discuss the details.", "Do you offer takeaway or delivery services?", "Absolutely! We offer both takeaway and city-wide delivery. You can place your order through our website or by phone."],
      reviews: [
        `"The sushi was amazing! Fresh ingredients, great taste, and fantastic service. I’ll definitely be back!"`,
        `"Oishiro is my go-to restaurant for Japanese cuisine. The ambiance is cozy and the dishes are consistently delicious!"`,
        `"Absolutely loved the experience. Every dish we ordered was full of flavor, and the staff was very attentive."`,
        `"A hidden gem! Perfect for date nights. The sushi rolls were phenomenal, and the atmosphere was intimate."`
      ]
    },
    ru: {
      nav: ["Главная", "Меню", "О нас", "Контакты"],
      sidebar: ["Связаться с нами", "Забронировать стол", "Контактная информация", "Оцените наш сайт", "Нажмите на звезду, чтобы оценить!", "Переключить на ночной режим 🌙", "🍣 Случайный факт о японской кухне", "Нажмите кнопку, чтобы узнать интересный факт!"],
      hero: ["О нас", "Аутентичная японская кухня с современным акцентом"],
      gallery: ["Предстоящие события", "Ночь живой музыки", "Кулинарный мастер-класс с шеф-поваром", "Тематическая вечеринка", "Вечер кулинарных открытий", "Вечер японских традиций", "Дегустация вин", "Мастер-класс по японской кухне", "Мастер-класс по приготовлению суши", "Гастрономический тур по Японии"],
      interior: ["Дизайн интерьера"],
      offers: ["Специальные предложения", "Скидка на день рождения", "Скидка 15% в день вашего рождения! Отпразднуйте с нами и сделайте свой день особенным.", "Бесплатная первая доставка", "Ваша первая доставка бесплатно! Наслаждайтесь удобством доставки наших блюд прямо к вам.", "Бесплатный напиток с любым блюдом", "Закажите любое блюдо и получите бесплатный напиток! Наслаждайтесь вашей едой с освежающим напитком.", "Использовать предложение"],
      faq: ["Часто задаваемые вопросы", "Какие способы оплаты принимает ваш ресторан?", "Мы принимаем наличные, банковские карты (Visa, MasterCard, Mir) и онлайн-платежи через Kaspi Pay и Apple Pay.", "Нужно ли бронировать стол заранее?", "Рекомендуем бронировать заранее, особенно вечером и в выходные. Вы можете сделать бронирование через наш сайт или по телефону.", "Можно ли проводить частные мероприятия в вашем ресторане?", "Да, у нас есть частные зоны для мероприятий, таких как дни рождения, корпоративные ужины и праздники. Пожалуйста, свяжитесь с нами заранее для уточнения деталей.", "Предлагаете ли вы услуги на вынос или доставку?", "Конечно! Мы предлагаем как на вынос, так и доставку по городу. Вы можете сделать заказ через наш сайт или по телефону."],
      reviews: [
        `"Суши были потрясающими! Свежие ингредиенты, отличный вкус и фантастическое обслуживание. Обязательно вернусь!"`,
        `"Oishiro — это мой выбор японской кухни. Атмосфера уютная, блюда всегда вкусные!"`,
        `"Нам очень понравился опыт. Каждое блюдо было полно вкуса, а персонал внимательный."`,
        `"Скрытая жемчужина! Отлично для свиданий. Роллы были феноменальными, а атмосфера интимной."`
      ]
    },
    kz: {
      nav: ["Басты бет", "Мәзір", "Біз туралы", "Байланыс"],
      sidebar: ["Бізбен байланысыңыз", "Үстел брондау", "Байланыс ақпараттары", "Сайтты бағалау", "Баға қою үшін жұлдызға басыңыз!", "Түнгі режимге ауыстыру 🌙", "🍣 Жапон тағамдары туралы кездейсоқ факт", "Қызықты фактты көру үшін батырманы басыңыз!"],
      hero: ["Біз туралы", "Заманауи акцентпен аутентикалық жапон тағамдары"],
      gallery: ["Келесі оқиғалар", "Тірі музыка кеші", "Шеф-пен кулинарлық мастер-класс", "Тақырыптық кеш", "Кулинарлық ашылу кеші", "Жапон дәстүрлері кеші", "Шара шаралары дәмін тату", "Жапон ас үйі семинары", "Суши дайындау семинары", "Жапония гастрономиялық туры"],
      interior: ["Ішкі интерьер дизайны"],
      offers: ["Арнайы ұсыныстар", "Туған күндік жеңілдік", "Туған күніңізде 15% жеңілдік! Біздің мерекемізбен бірге ерекше күнді жасаңыз.", "Бірінші жеткізу тегін", "Бірінші жеткізу тегін! Дәмді тағамдарымызды үйіңізге жеткізудің ыңғайлылығын пайдаланыңыз.", "Кез келген тамаққа тегін сусын", "Кез келген тамақты тапсырыс беріп, тегін сусын алыңыз! Ас болсын!", "Ұсынысты пайдалану"],
      faq: ["Жиі қойылатын сұрақтар", "Сіздің мейрамханаңыз қандай төлем әдістерін қабылдайды?", "Біз қолма-қол ақша, банк карталары (Visa, MasterCard, Mir) және онлайн төлемдерді Kaspi Pay және Apple Pay арқылы қабылдаймыз.", "Мен алдын ала үстел брондауы қажет пе?", "Әсіресе кешкі уақытта және демалыс күндері алдын ала брондау ұсынылады. Сіз біздің веб-сайт арқылы немесе телефон арқылы тапсырыс жасай аласыз.", "Сіздің мейрамханаңызда жеке іс-шараларды өткізуге болады ма?", "Иә, бізде туған күндер, корпоративтік кешкі ас және мерекелер сияқты жеке орындар бар. Толығырақ келісу үшін алдын ала хабарласыңыз.", "Сіз ас үйден алып кету немесе жеткізу қызметін ұсынасыз ба?", "Әрине! Біз ас үйден алу және қала бойынша жеткізу ұсынамыз. Сіз тапсырысты веб-сайт арқылы немесе телефон арқылы жасай аласыз."],
      reviews: [
        `"Суши керемет болды! Жаңа ингредиенттер, тамаша дәм және керемет қызмет. Мен міндетті түрде қайта ораламын!"`,
        `"Oishiro — менің сүйікті жапон ас үйім. Атмосфера ыңғайлы, тағамдар әрдайым дәмді!"`,
        `"Тәжірибе өте ұнады. Әр тағам дәмге бай, қызметкерлер өте көңілді."`,
        `"Жасырын қазына! Кездесулерге өте қолайлы. Роллдар керемет, атмосфера интимді."`
      ]
    }
  };

  function applyTranslation(lang) {
    // Навигация
    const navLinks = document.querySelectorAll("#nav-menu li a");
    navLinks.forEach((link, index) => {
      link.textContent = translations[lang].nav[index];
    });

    // Sidebar строго по порядку
    const sidebarHeader = document.querySelector(".sidebar h3");
    sidebarHeader.textContent = translations[lang].sidebar[0];

    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
    sidebarLinks[0].textContent = translations[lang].sidebar[1];
    sidebarLinks[1].textContent = translations[lang].sidebar[2];

    const ratingMessage = document.getElementById("rating-message");
    ratingMessage.textContent = translations[lang].sidebar[4];

    const themeBtn = document.getElementById("theme-btn");
    themeBtn.textContent = translations[lang].sidebar[5];

    const factHeader = document.querySelector(".random-fact h3");
    factHeader.textContent = translations[lang].sidebar[6];

    const factBox = document.getElementById("fact-box");
    factBox.textContent = translations[lang].sidebar[7];

    // Hero
    const heroTitle = document.querySelector(".hero-left h1");
    const heroDesc = document.querySelector(".hero-left p");
    heroTitle.textContent = translations[lang].hero[0];
    heroDesc.textContent = translations[lang].hero[1];

    // Gallery
    const galleryHeader = document.querySelector(".gallery h2");
    galleryHeader.textContent = translations[lang].gallery[0];
    const galleryCaptions = document.querySelectorAll(".gallery .caption");
    galleryCaptions.forEach((cap, i) => {
      if (translations[lang].gallery[i + 1]) cap.textContent = translations[lang].gallery[i + 1];
    });

    // Interior
    const interiorTitle = document.querySelector(".interior h2");
    interiorTitle.textContent = translations[lang].interior[0];

    // Offers
    const offersHeading = document.querySelector(".special-offers-heading");
    offersHeading.textContent = translations[lang].offers[0];
    const offerTitles = document.querySelectorAll(".offer-text h3");
    const offerTexts = document.querySelectorAll(".offer-text p");
    const offerBtns = document.querySelectorAll(".offer-btn");
    offerTitles.forEach((title, i) => title.textContent = translations[lang].offers[i * 2 + 1]);
    offerTexts.forEach((text, i) => text.textContent = translations[lang].offers[i * 2 + 2]);
    offerBtns.forEach((btn) => btn.textContent = translations[lang].offers[7]); // "Use Offer"

    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    const faqText = translations[lang].faq;
    faqItems.forEach((item, i) => {
      const q = item.querySelector(".faq-question span");
      const a = item.querySelector(".faq-content p");
      q.textContent = faqText[i * 2 + 1];
      a.textContent = faqText[i * 2 + 2];
    });
    const faqHeader = document.querySelector(".faq h2") || document.querySelector(".faq");
    if (faqHeader) faqHeader.textContent = faqText[0];

    // Reviews
    const reviewTexts = document.querySelectorAll(".review-text p");
    reviewTexts.forEach((rev, i) => {
      if (translations[lang].reviews[i]) rev.textContent = translations[lang].reviews[i];
    });
  }

  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    applyTranslation(lang);
  });

  applyTranslation(langSelect.value);
});
