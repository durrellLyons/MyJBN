function navMenu() {
  $('.navicon').click(function() {
    if($(this).hasClass('fa-bars')) {
      toggleMenu('-1em', '10em', '3em', 'block');
      $(this).removeClass('fa-bars');
      $(this).addClass('fa-times');
    } else if($(this).hasClass('fa-times')) {
      toggleMenu(0, 0, 0, 'none');
      $(this).removeClass('fa-times');
      $(this).addClass('fa-bars');
    }
  });

  if($('nav ul').hasClass('mobileNav')){
    $('.mobileNav li').click(function() {
      toggleMenu(0, 0, 0, 'none');
      $('.navicon').removeClass('fa-times');
      $('.navicon').addClass('fa-bars');
    });
  }
}

function toggleMenu(right, width, top, display) {
  $('.mobileNav').css('display', display);
  $('.navMenu').animate({
                right: right,
                width: width,
                top: top
  }, 'fast');
}

function changeStation(url) {
  $('#main-frame').attr('src', url);
}
