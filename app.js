
var last_known_scroll_position = 0;
var ticking = false;
var nav = document.getElementById("navbar");

function changeNavBg(scroll_pos) {
    console.log(nav.className)
    if (scroll_pos > 2 &&  nav.className == "navbar navbar-dark navbar-expand-md fixed-top") {
        nav.classList.toggle("active");
    }
    if (scroll_pos < 2 &&  nav.className == "navbar navbar-dark navbar-expand-md fixed-top active") {
        nav.classList.toggle("active");
    }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      changeNavBg(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});