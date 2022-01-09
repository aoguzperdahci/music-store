window.onscroll = function() {myFunction()};



function myFunction() {
    var navbar = document.getElementById("menu");
    var sticky = 63;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}