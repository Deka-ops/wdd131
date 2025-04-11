
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  });

  const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
 
const today = new Date();
currentyear.innerHTML = today.getFullYear()
 
lastModified.innerHTML = document.lastModified

function shopNow() {
    window.location.href = "#shop";
  }