import Ichef from "./img/pizza-g2cb6cf464_1920.png";

function makeHeader(){
    const mainHeader = document.querySelector('header');
    
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
    
    topButtonsContainer.appendChild(btnHome);
    topButtonsContainer.appendChild(btnMenu);
    topButtonsContainer.appendChild(btnContact);
    mainHeader.appendChild(topButtonsContainer);
}

function makeBody(mainContainer){
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Welcome to Ambrosia's Diner";
    mainTitle.classList.add("main-title");

    const mainImage = document.createElement('img');
    mainImage.src = Ichef;
    mainImage.classList.add("main-image");

    const mainText = document.createElement('div');
    mainText.textContent = "Enjoy our new dishes!";
    mainText.classList.add("main-text");

    mainContainer.appendChild(mainTitle);
    mainContainer.appendChild(mainImage);
    mainContainer.appendChild(mainText);
}

function makeFooter(creditOne, creditTwo){
    const mainFooter = document.querySelector('footer');

    if (creditTwo == ""){
        const footerContainer = document.createElement('div');
        footerContainer .classList.add("footer-one-container");

        const footerOne = document.createElement('div');
        footerOne.textContent = creditOne;
        footerOne.classList.add("footer-one");

        footerContainer.appendChild(footerOne);
        mainFooter.appendChild(footerContainer);
    
    } else {
        const footerContainer = document.createElement('div');
        footerContainer .classList.add("footer-two-containers");
      
        const footerOne = document.createElement('div');
        footerOne.textContent = creditOne;
        footerOne.classList.add("footer-one");

        const footerTwo = document.createElement('div');
        footerTwo.textContent = creditTwo;
        footerTwo.classList.add("footer-two");
        
        footerContainer.appendChild(footerOne);
        footerContainer.appendChild(footerTwo);
        mainFooter.appendChild(footerContainer);
    }
}

export {makeHeader, makeBody, makeFooter}
