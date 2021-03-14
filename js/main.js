// событие клика на меню бургер
$('.menu-burger').on('click', () => {
  $('.menu-list').toggleClass('show-menu');
});

// Закрыть меню
$('.close-menu').on('click', () => {
  $('.menu-list').removeClass('show-menu');
});

// Появление меню
$(window).scroll(() => {
  if ($(window).scrollTop() > 400) {
    $('#top_navigation').addClass('stick-nav');
  } else {
    $('#top_navigation').removeClass('stick-nav');
  }
});

// Кнопка наверх
$('.on-top').click(() => {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});