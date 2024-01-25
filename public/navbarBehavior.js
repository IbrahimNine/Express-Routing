document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (
      (document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350) &&
      window.innerWidth > 750
    ) {
      navbar.style.width = "80%";
      navbar.style.borderRadius = "30px";
    } else {
      navbar.style.width = "100%";
      navbar.style.borderRadius = "0";
    }
  }
});
