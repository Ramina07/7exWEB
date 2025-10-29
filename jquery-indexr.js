$(document).ready(function() {
  console.log("jQuery is ready on indexr.html!");
    //Task1 
    $("#gallerySearch").on("keyup", function() {
    let value = $(this).val().toLowerCase();

    $(".gallery-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  //Task2
  // Collect all FAQ questions dynamically
    const faqQuestions = [];
    $('.faq-item .faq-question span').each(function() {
        faqQuestions.push($(this).text());
    });

    $('#faq-search').on('input', function() {
        const query = $(this).val().toLowerCase();
        const filtered = faqQuestions.filter(q => q.toLowerCase().includes(query));

        $('#faq-suggestions').empty();

        if (query && filtered.length > 0) {
            filtered.forEach(item => {
                $('#faq-suggestions').append(`<li>${item}</li>`);
            });
            $('#faq-suggestions').show();
        } else {
            $('#faq-suggestions').hide();
        }
    });
    // Click suggestion: scroll to the FAQ item
    $(document).on('click', '#faq-suggestions li', function() {
    const text = $(this).text();
    const target = $(".faq-item").filter(function() {
        return $(this).find(".faq-question span").text() === text;
    });

    if (target.length) {
        // Прокрутка к нужному элементу
        $('html, body').animate({
            scrollTop: target.offset().top - 20
        }, 300);

        // Если контент скрыт — вызываем клик по кнопке Open
        const content = target.find('.faq-content');
        const button = target.find('.open-btn');
        if (!content.is(':visible')) {
            button.click();
        }
    }

    $('#faq-search').val(text);
    $('#faq-suggestions').hide();
});


    // Hide suggestions if clicked outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.search-container').length) {
            $('#faq-suggestions').hide();
        }
    });
    // === Task 3: Special Offers Search + Highlight  ===
  function highlightText(element, query) {
    if (!query) {
      
      element.html(element.data('original'));
      return;
    }

    const regex = new RegExp(`(${query})`, 'gi');
    element.html(element.data('original').replace(regex, '<span class="highlight">$1</span>'));
  }

  const $offers = $('.special-offers .offer-text');

  
  $offers.each(function() {
    $(this).data('original', $(this).html());
  });

  $('#offer-search').on('input', function() {
    const query = $(this).val().trim();
    $offers.each(function() {
      highlightText($(this), query);
    });
  });

   //task4
   $(window).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height() - $(window).height();
    const scrollPercent = (scrollTop / docHeight) * 100;

    $('.scroll-progress-bar').css('width', scrollPercent + '%');
  });
  //task9
  $(document).ready(function() {
  function lazyLoadImages() {
    $('.interior-images img.lazy').each(function(){
      const $img = $(this);
      if($img.hasClass('loaded')) return;

      const imgTop = $img.offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if(windowBottom > imgTop - 50){
        $img.attr('src', $img.data('src')); // подгружаем картинку
        $img.addClass('loaded visible');    // плавное появление
      }
    });
  }

  // Запуск при scroll, resize и сразу при загрузке
  $(window).on('scroll resize load', lazyLoadImages);
  lazyLoadImages();
});
});
