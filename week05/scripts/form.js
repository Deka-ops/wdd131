// form.js

// Product array
const products = [
    { id: "fc-1888", name: "Georges", averagerating: 4.5 },
    { id: "fc-2050", name: "Beaded laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Isi-Agu", averagerating: 3.5 },
    { id: "ac-2000", name: "Akwaete", averagerating: 3.9 },
    { id: "jj-1969", name: "Acessories", averagerating: 5.0 }
  ];
  
  // Populate the product dropdown
  document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
  
    if (productSelect) {
      products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;            // Use `id` for value
        option.textContent = product.name;    // Use `name` for display
        productSelect.appendChild(option);
      });
    }
  
    // Set current year and last modified
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
  });
  