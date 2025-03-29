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