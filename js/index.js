const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav section stuff!!
const navSection = document.querySelectorAll("nav a");

navSection[0].textContent = siteContent.nav["nav-item-1"];
navSection[1].textContent = siteContent.nav["nav-item-2"];
navSection[2].textContent = siteContent.nav["nav-item-3"];
navSection[3].textContent = siteContent.nav["nav-item-4"];
navSection[4].textContent = siteContent.nav["nav-item-5"];
navSection[5].textContent = siteContent.nav["nav-item-6"];



//append/prepend children
const newAOne = document.createElement("a");
const newATwo = document.createElement("a");
const navNodeList = document.querySelector('nav');

newAOne.textContent = "Append";
newATwo.textContent = "Prepend";

navNodeList.appendChild(newAOne);
navNodeList.prepend(newATwo);
newAOne.style.color = "green";
newATwo.style.color = "green";

navSection.forEach(x => x.style.color = "green");





//logo
const firstImg = document.getElementById('logo-img');
firstImg.src = siteContent.nav["img-src"];

//cta

const bigHeader = document.querySelector(".cta-text h1");
const buttonText = document.querySelector(".cta-text button");
const headerImg = document.getElementById('cta-img');

bigHeader.textContent = siteContent.cta["h1"];
buttonText.textContent = siteContent.cta["button"];
headerImg.src = siteContent.cta["img-src"];


//main content

const textContentOneHead = document.querySelector(".text-content:nth-child(1) h4");
const textContentOnePar = document.querySelector(".text-content:nth-child(1) p");
const textContentTwoHead = document.querySelector(".text-content:nth-child(2) h4");
const textContentTwoPar = document.querySelector(".text-content:nth-child(2) p");

textContentOneHead.innerHTML = siteContent["main-content"]["features-h4"];
textContentOnePar.innerHTML = siteContent["main-content"]["features-content"];
textContentTwoHead.innerHTML = siteContent["main-content"]["about-h4"];
textContentTwoPar.innerHTML = siteContent["main-content"]["about-content"];


const middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];



const bottomContentOneHead = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
const bottomContentOnePar = document.querySelector(".bottom-content .text-content:nth-child(1) p");
const bottomContentTwoHead = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
const bottomContentTwoPar = document.querySelector(".bottom-content .text-content:nth-child(2) p");
const bottomContentThreeHead = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
const bottomContentThreePar = document.querySelector(".bottom-content .text-content:nth-child(3) p");

bottomContentOneHead.innerHTML = siteContent["main-content"]["services-h4"];
bottomContentOnePar.innerHTML = siteContent["main-content"]["services-content"];
bottomContentTwoHead.innerHTML = siteContent["main-content"]["product-h4"];
bottomContentTwoPar.innerHTML = siteContent["main-content"]["product-content"];
bottomContentThreeHead.innerHTML = siteContent["main-content"]["vision-h4"];
bottomContentThreePar.innerHTML = siteContent["main-content"]["vision-content"];




//contact section
const contactHeader = document.querySelector(".contact h4");
const contactPar = document.querySelectorAll(".contact p");


contactHeader.textContent = siteContent.contact["contact-h4"];
contactPar[0].innerHTML = siteContent.contact["address"];
contactPar[1].textContent = siteContent.contact["phone"];
contactPar[2].textContent = siteContent.contact["email"];


//footer
const footerPar = document.querySelector("footer p");

footerPar.textContent = siteContent.footer.copyright;