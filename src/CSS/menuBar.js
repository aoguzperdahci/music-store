window.onscroll = function() {stickyNav()};



function stickyNav() {
    var navbar = document.getElementById("menu");
    var sticky = 66;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}