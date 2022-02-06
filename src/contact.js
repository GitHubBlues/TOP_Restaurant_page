import Iplane from "./img/plane_message.png";
import Ihouse from "./img/house.png";
import Iphone from "./img/phone_1.png";

function makeContact(mainContainer){
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
        contactChannel.setAttribute('style', 'white-space: pre;');
        contactChannel.textContent = channel;
        contactChannel.classList.add("contact-channel");

        const contactIcon = document.createElement("img");
        contactIcon.src = channelURL;
        contactIcon.classList.add("contact-icon");

        contactItem.appendChild(contactChannel);
        contactItem.appendChild(contactIcon);
        contactItemContainer.appendChild(contactItem);
    }


    let iChannel = "304 East Park Avenue \r\n" + "Greenborough, Ireland";
    let iIcon = Ihouse;
    createContactItem (iChannel, iIcon);

    iChannel = "info@ambrosia.com";
    iIcon = Iplane;
    createContactItem (iChannel, iIcon);

    iChannel = "353-8212499";
    iIcon = Iphone;
    createContactItem (iChannel, iIcon);

    contactPage.appendChild(contactItemContainer);
    mainContainer.appendChild(contactPage);
}

export {makeContact}
