import "./style.css"
import test from './landing';

const mainContainer = document.querySelector('#content');

Main Page
const mainHeader = document.querySelector('header');
const mainFooter = document.querySelector('footer');

/* header*/
const topButtonsContainer = document.createElement('div');
topButtonsContainer.classList.add("top-btn-container");

const btnHome = document.createElement('button');
btnHome.textContent = "Home";
btnHome.classList.add("btn-home");

const btnMenu = document.createElement('button');
btnMenu.textContent = "Menu";
btnMenu.classList.add("btn-menu");

const btnContact = document.createElement('button');
btnContact.textContent = "Contact";
btnContact.classList.add("btn-contact");

mainHeader.appendChild(topButtonsContainer);
topButtonsContainer.appendChild(btnHome);
topButtonsContainer.appendChild(btnMenu);
topButtonsContainer.appendChild(btnContact);


/* body*/
const mainTitle = document.createElement('h1');
mainTitle.textContent = "Welcome to Ambrosia's Diner";
mainTitle.classList.add("main-title");

const mainImage = document.createElement('img');
mainImage.src = "/img/pizza-g2cb6cf464_1920.png";
mainImage.classList.add("main-image");

const mainText = document.createElement('div');
mainText.textContent = "Enjoy our new dishes!";
mainText.classList.add("main-text");

mainContainer.appendChild(mainTitle);
mainContainer.appendChild(mainImage);
mainContainer.appendChild(mainText);


/* footer*/
const footerContainer = document.createElement('div');
footerContainer .classList.add("footer-container");

const footerOne = document.createElement('button');
footerOne.textContent = "Background image: https://patternico.com";
footerOne.classList.add("footer-one");

const footerTwo = document.createElement('button');
footerTwo.textContent = "Chef image: Alexas_Fotos from Pixabay";
footerTwo.classList.add("footer-two");

footerContainer.appendChild(footerOne);
footerContainer.appendChild(footerTwo);
mainFooter.appendChild(footerContainer);


