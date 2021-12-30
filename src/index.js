import "./style.css"
import {makeHeader, makeBody, makeFooter} from './landing';
import {makeMenu} from './menu';
import {makeContact} from './contact';

const mainContainer = document.querySelector('#content');


// /**** Main Page ****/
// makeHeader();
// makeBody(mainContainer);
// let creditOne = "Background image: https://patternico.com";
// let creditTwo = "Chef image: Alexas_Fotos from Pixabay";
// makeFooter(creditOne, creditTwo);


/**** Menu page ****/
// makeHeader();
// makeMenu(mainContainer);
// let creditOne = "Background image: https://patternico.com";
// let creditTwo = "";
// makeFooter(creditOne, creditTwo);


/**** Contact page ****/
makeHeader();
makeContact(mainContainer);
let creditOne = "Background image: https://patternico.com";
let creditTwo = "";
makeFooter(creditOne, creditTwo);