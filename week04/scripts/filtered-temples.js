const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
 
const today = new Date();
currentyear.innerHTML = today.getFullYear()
 
lastModified.innerHTML = document.lastModified
 

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Abidjan Ivory Coast Temple",
      location: "Cocody, Abidjan, Cote d'ivoire",
      dedicated: "2025, May, 01",
      area: 74792,
      imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipOLwWAccWiDB9IboDA-hC3AUnjBgvCaNOVGLmA=s1360-w1360-h1020"
    },
    {
      templeName: "Apia Samoa Temple",
      location: "Pesega Apia Samoa",
      dedicated: "2005, September, 04",
      area: 18691,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
    },
    {
      templeName: "Atlanta Georgia Temple",
      location: "Georgia, United States",
      dedicated: "2011, May, 1",
      area: 34500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
    },
    {
      templeName: "Brisbane Australia Temple",
      location: "Queensland, Australia",
      dedicated: "2003, June, 15",
      area: 10700,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/400x250/brisbane-australia-temple-lds-745088-wallpaper.jpg"
    },
    {
      templeName: "Billing Montana Temple",
      location: "Montana, United States.",
      dedicated: "1999, November, 20-21",
      area: 33800,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/02-Billings-Montana-Temple-1572044.jpg"
    },
    {
      templeName: "Bern Switzerland Temple",
      location: "Zollikofen, Switzerland",
      dedicated: "1992, October, 23-25",
      area: 35546,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-1053202-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
      templeName: "Hong-Kong China Temple",
      location: "Kowloon City, Hong-Kong",
      dedicated: "2022, June, 19",
      area: 51921,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong_kong_china_temple_exterior1.jpeg"
    },

    {
      templeName: "Switzerland Temple",
      location: "Switzerland",
      dedicated: "1992, October, 23-25",
      area: 35546,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-935504-wallpaper.jpg"
    },
  ];

  displayTempleInfo(temples);

const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");
const templesHome = document.querySelector("#home");

oldTemples.addEventListener("click", () => {
    let yearBuilt = temples.filter(temple => parseInt(temple.dedicated) < 1900);
    displayTempleInfo(yearBuilt);
});

newTemples.addEventListener("click", () =>{
    let yearBuilt = temples.filter(temple => parseInt(temple.dedicated) > 2000);
    displayTempleInfo(yearBuilt);
});

largeTemples.addEventListener("click", () =>{
    let size = temples.filter(temple => parseInt(temple.area) > 90000);
    displayTempleInfo(size);

});

smallTemples.addEventListener("click", ()=>{
    let small = temples.filter(temple => parseInt(temple.area) < 10000);
    displayTempleInfo(small);
});

templesHome.addEventListener("click", () =>{
    displayTempleInfo(temples);
});

function displayTempleInfo(filteredtemples) {
    document.querySelector("main").innerHTML = "";
    filteredtemples.forEach(temple =>{
        let info = document.createElement("figure");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let picture = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Date Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Square Footage:</span> ${temple.area} sq ft`;

        picture.setAttribute("src", temple.imageUrl);
        picture.setAttribute("alt", `${temple.templeName} Temple`);
        picture.setAttribute("loading", "lazy");

        info.appendChild(name);
        info.appendChild(location);
        info.appendChild(dedication);
        info.appendChild(area);
        info.appendChild(picture);

        document.querySelector("main").appendChild(info);

    });
}

//Hamburger button responsive code
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
