document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
});

    menuToggle.addEventListener("click"), () => {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
            menuToggle.textContent = "☰";
        } else {
            navMenu.style.display = "block";
            menuToggle.textContent = "❌";
        };

        window.onload = function() {
            const d = new Date();
            let year = d.getFullYear();
            document.getElementById("currentyear").textContent = year;
            let oLastModif = new Date(document.lastModified);
            document.getElementById("lastModified").textContent = oLastModif;
        };
    

    

    // Dynamic Footer Year and Last Modified Date

   // function updateFooter() {
    // let now =new Date();
    // let formattedDate = now.toLocaleDateString(); // Formats date and time based on the local time
    // document.getElementById("lastModified").textContent = formattedDate;
   // }

   // updateFooter();
   // </script> 