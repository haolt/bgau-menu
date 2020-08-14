$(document).ready(function () {
  $('.nav-link').on('click', function (event) {
    $(this).next('.nav--sub').toggleClass('show');
    $(this).toggleClass('active');
  });

  // $('.nav-link').next().prev().addClass('icon-addon');

  $('.main-navigation').on('click', function() {
    event.stopPropagation();
  })

  $('.navigation--mobile-wrap, .header__show-mobile-menu-btn').on('click', function () {
    $('.navigation--mobile-wrap').toggleClass('show');
  });

  $('.header__cart-btn').on('click', function() {
    $('.header__cart__dropdown-menu').toggleClass('show');
  });

  $('.search-form__btn--mobile').on('click', function() {
    $('.header__search-form-mobile').toggleClass('show');
  });

  $('.close-search-form-btn').on('click', function() {
    $('.header__search-form-mobile').toggleClass('show');
  });

});
