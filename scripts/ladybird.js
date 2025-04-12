document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // ✅ Conditional branching example
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning!" : "Good day!";
    console.log(greeting);
});

// ✅ DOM Manipulation
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`; // ✅ Template literal

lastModified.innerHTML = `Last Updated: ${document.lastModified}`; // ✅ Template literal

// ✅ Working function
function shopNow() {
    window.location.href = "#shop";
}

// ✅ Object example
const featuredProduct = {
    id: "D083",
    name: "VVIP George set",
    price: 450000,
    onSale: true
};
console.log(`Featured Product: ${featuredProduct.name} - ₦${featuredProduct.price}`);

// ✅ Array and method example
const categories = ["George", "Lace", "Silk", "Brocade"];
categories.forEach(cat => console.log(`Category: ${cat}`));

// ✅ localStorage example
localStorage.setItem("lastVisit", today.toLocaleString());
const lastVisit = localStorage.getItem("lastVisit");
console.log(`Last visit was on ${lastVisit}`);
