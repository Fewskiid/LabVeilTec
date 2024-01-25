document.addEventListener("DOMContentLoaded", function() {
    var svgElement = document.querySelector('.menu svg');
    svgElement.addEventListener("click", toggleMenu);
  });
  
  function toggleMenu() {
    var yellowPage = document.getElementById("yellowPage");
    var brouillon = document.getElementById("brouillon");
  
    // Si la page jaune est cachée, la montrer
    if (yellowPage.style.display === "" || yellowPage.style.display === "none") {
      yellowPage.style.display = "block";
        brouillon.style.display = "block";
    } else {
      // Sinon, la cacher
      yellowPage.style.display = "none";
        brouillon.style.display = "none";
    }
  }
  