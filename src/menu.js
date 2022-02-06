import iIceCream from "./img/ice-cream-g92b23d527_1920.png";
import iFries from "./img/french-fries-gc66ef6103_1920.jpg";
import iBurger from "./img/abstract-g34a5f67b5_1920.jpg";
import iPizza from "./img/american-g613754ed7_1920.jpg";

function makeMenu(mainContainer) {

    const menuPage = document.createElement('div');
    menuPage.classList.add("menu-page");

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu"
    menuTitle.classList.add("menu-title");

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add("menu-item-container");


    function createMenuItem(title, description, price, imageURL){
        const menuItem = document.createElement('div');
        menuItem.classList.add("menu-item");

        const menuItemText = document.createElement('div');
        menuItemText.classList.add("menu-item-text");

        const menuItemTitle = document.createElement('div');
        menuItemTitle.textContent = title;
        menuItemTitle.classList.add("menu-item-title");

        const menuItemDescription = document.createElement('div');
        menuItemDescription.setAttribute('style', 'white-space: pre;');
        menuItemDescription.textContent = description;
        menuItemDescription.classList.add("menu-item-description");

        const menuItemPrice = document.createElement('div');
        menuItemPrice.textContent = price + " EUR";
        menuItemPrice.classList.add("menu-item-price");

        const menuItemImage = document.createElement('img');
        menuItemImage.src = imageURL;
        menuItemImage.classList.add("menu-item-image");

        menuItemText.appendChild(menuItemTitle);
        menuItemText.appendChild(menuItemDescription);
        menuItemText.appendChild(menuItemPrice);
        menuItem.appendChild(menuItemText);
        menuItem.appendChild(menuItemImage);
        menuItemContainer.appendChild(menuItem);
    }


    let iName = "Pizza";
    let iDescription = "Savoury pizza with pepperoni, chilli, \r\n" + "bacon, double mozarella and pizza sauce";
    let iPrice = "15.60";
    let iURL = iPizza;
    createMenuItem(iName, iDescription, iPrice, iURL);

    iName = "Burger";
    iDescription = "Beef or vegetarian paddy with cheese, \r\n" + "pickles, tomato, onions, lettuce and special sauces";
    iURL = iBurger;
    iPrice = "15.10";
    createMenuItem(iName, iDescription, iPrice, iURL);

    iName = "French fries";
    iDescription = "With garlic, mango and avocado dips";
    iURL = iFries;
    iPrice = "12.10";
    createMenuItem(iName, iDescription, iPrice, iURL);

    iName = "Ice cream dessert";
    iDescription = "Four ice cream scoops with cholocate sauce. \r\n" + "Ask for the availabe ice-cream flavours";
    iURL = iIceCream;
    iPrice = "9.70";
    createMenuItem(iName, iDescription, iPrice, iURL);


    menuPage.appendChild(menuTitle);
    menuPage.appendChild(menuItemContainer);

    mainContainer.appendChild(menuPage);
}

export {makeMenu}
