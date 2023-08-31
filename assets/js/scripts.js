
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $(".nk-header-main").addClass("has-fixed");
  } else {
    $(".nk-header-main").removeClass("has-fixed");
  }
});


lightGallery(document.getElementById("control-panel-videos"), {
  plugins: [lgVideo, lgThumbnail],
  thumbnail: true,
  mode: "lg-fade",
});

$(document).on("click", "#panel-play-button", function () {
  $("#control-panel-videos a:first-child > img").trigger("click");
});

lightGallery(document.getElementById("app-panel-videos"), {
  plugins: [lgVideo, lgThumbnail],
  thumbnail: true,
  mode: "lg-fade",
});

$(document).on("click", "#app-play-button", function () {
  $("#app-panel-videos a:first-child > img").trigger("click");
});

$(document).ready(function() {
  const body = $('body');
  const darkModeToggle = $('.dark-mode-toggle');

  const isDarkModePreferred = localStorage.getItem('darkModePreferred');
  const darkModeIcone = localStorage.getItem('darkModeIcone');
  
  if (isDarkModePreferred === 'true') {
    body.addClass('is-dark');
  }
  if (darkModeIcone === 'true') {
    darkModeToggle.toggleClass('dark-active');
  }

  darkModeToggle.on('click', function() {
    body.toggleClass('is-dark');

    darkModeToggle.toggleClass('dark-active');

    if (body.hasClass('is-dark')) {
      localStorage.setItem('darkModePreferred', 'true');
      localStorage.setItem('darkModeIcone',true);
    } else {
      localStorage.setItem('darkModePreferred', 'false');
      localStorage.setItem('darkModeIcone',false);
    }
  });
});
