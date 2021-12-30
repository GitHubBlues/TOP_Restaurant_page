import "./style.css"
import test from './landing';

const mainContainer = document.querySelector('#content');

// /**** Main Page ****/
// const mainHeader = document.querySelector('header');
// const mainFooter = document.querySelector('footer');

// /* header*/
// const topButtonsContainer = document.createElement('div');
// topButtonsContainer.classList.add("top-btn-container");

// const btnHome = document.createElement('button');
// btnHome.textContent = "Home";
// btnHome.classList.add("btn-home");

// const btnMenu = document.createElement('button');
// btnMenu.textContent = "Menu";
// btnMenu.classList.add("btn-menu");

// const btnContact = document.createElement('button');
// btnContact.textContent = "Contact";
// btnContact.classList.add("btn-contact");

// mainHeader.appendChild(topButtonsContainer);
// topButtonsContainer.appendChild(btnHome);
// topButtonsContainer.appendChild(btnMenu);
// topButtonsContainer.appendChild(btnContact);


// /* body*/
// const mainTitle = document.createElement('h1');
// mainTitle.textContent = "Welcome to Ambrosia's Diner";
// mainTitle.classList.add("main-title");

// const mainImage = document.createElement('img');
// mainImage.src = "/img/pizza-g2cb6cf464_1920.png";
// mainImage.classList.add("main-image");

// const mainText = document.createElement('div');
// mainText.textContent = "Enjoy our new dishes!";
// mainText.classList.add("main-text");

// mainContainer.appendChild(mainTitle);
// mainContainer.appendChild(mainImage);
// mainContainer.appendChild(mainText);


// /* footer*/
// const footerContainer = document.createElement('div');
// footerContainer .classList.add("footer-container");

// const footerOne = document.createElement('button');
// footerOne.textContent = "Background image: https://patternico.com";
// footerOne.classList.add("footer-one");

// const footerTwo = document.createElement('button');
// footerTwo.textContent = "Chef image: Alexas_Fotos from Pixabay";
// footerTwo.classList.add("footer-two");

// footerContainer.appendChild(footerOne);
// footerContainer.appendChild(footerTwo);
// mainFooter.appendChild(footerContainer);



/**** Menu page ****/
// const menuPage = document.createElement('div');
// menuPage.classList.add("menu-page");

// const menuTitle = document.createElement('div');
// menuTitle.textContent = "Menu"
// menuTitle.classList.add("menu-title");

// const menuItemContainer = document.createElement('div');
// menuItemContainer.classList.add("menu-item-container");



// function createMenuItem(title, description, price, imageURL){
//     const menuItem = document.createElement('div');
//     menuItem.classList.add("menu-item");

//     const menuItemText = document.createElement('div');
//     menuItemText.classList.add("menu-item-text");

//     const menuItemTitle = document.createElement('div');
//     menuItemTitle.textContent = title;
//     menuItemTitle.classList.add("menu-item-title");

//     const menuItemDescription = document.createElement('div');
//     menuItemDescription.textContent = description;
//     menuItemDescription.classList.add("menu-item-description");

//     const menuItemPrice = document.createElement('div');
//     menuItemPrice.textContent = price + "EUR";
//     menuItemPrice.classList.add("menu-item-description");

//     const menuItemImage = document.createElement('img');
//     menuItemImage.src = imageURL;
//     menuItemImage.classList.add("menu-item-image");

//     menuItemText.appendChild(menuItemTitle);
//     menuItemText.appendChild(menuItemDescription);
//     menuItemText.appendChild(menuItemPrice);
//     menuItem.appendChild(menuItemText);
//     menuItem.appendChild(menuItemImage);
//     menuItemContainer.appendChild(menuItem);
// }


// let iName = "Pizza";
// let iDescription = "Savoury pizza with pepperoni, chilli, bacon, double mozarella and pizza sauce";
// let iPrice = "15.60";
// let iURL = "/img/american-g613754ed7_1920.jpg";
// createMenuItem(iName, iDescription, iPrice, iURL);

// iName = "Burger";
// iDescription = "Beef or vegetarian paddy with cheese, pickles, tomato, onions, lettuce and special sauces";
// iURL = "/img/abstract-g34a5f67b5_1920.jpg";
// iPrice = "15.10";
// createMenuItem(iName, iDescription, iPrice, iURL);

// iName = "French fries";
// iDescription = "With garlic, mango and avocado dips";
// iURL = "/img/french-fries-gc66ef6103_1920.jpg";
// iPrice = "12.10";
// createMenuItem(iName, iDescription, iPrice, iURL);

// iName = "Ice cream dessert";
// iDescription = "Four ice cream scoops with cholocate sauce. Available flavours: chocolate, vanilla, banana, strawberry, cookies and cream, mint chocolate chips, coconut, toffee and tiramisu";
// iURL = "/img/ice-cream-g92b23d527_1920.png";
// iPrice = "9.70";
// createMenuItem(iName, iDescription, iPrice, iURL);


// menuPage.appendChild(menuTitle);
// menuPage.appendChild(menuItemContainer);

// mainContainer.appendChild(menuPage);



/**** Contact page ****/
const contactPage = document.createElement('div');
contactPage.classList.add("contact-page");

const contactTitle = document.createElement('h1');
contactTitle.textContent = "Let's get in touch";
contactTitle.classList.add("contact-title");

const contactItemContainer = document.createElement("div");
contactItemContainer.classList.add("contact-item-container");

contactPage.appendChild(contactTitle);

function createContactItem (channel, channelURL){
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");

    const contactChannel = document.createElement("div");
    contactChannel.textContent = channel;
    contactChannel.classList.add("contact-channel");

    const contactIcon = document.createElement("img");
    contactIcon.src = channelURL;
    contactIcon.classList.add("contact-icon");

    contactItem.appendChild(contactChannel);
    contactItem.appendChild(contactIcon);
    contactItemContainer.appendChild(contactItem);
}

let iChannel = "304 East Park Avenue, Greenborough, Ireland";
let iIcon = "/img/house.png";
createContactItem (iChannel, iIcon);

iChannel = "info@ambrosia.com";
iIcon = "/img/plane_message.png";
createContactItem (iChannel, iIcon);

iChannel = "353-8212499";
iIcon = "/img/phone_1.png";
createContactItem (iChannel, iIcon);

contactPage.appendChild(contactItemContainer);
mainContainer.appendChild(contactPage);
