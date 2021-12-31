import "./style.css"
import {makeHeader, makeBody, makeFooter} from './landing';
import {makeMenu} from './menu';
import {makeContact} from './contact';

const mainContainer = document.querySelector('#content');
const mainFooter = document.querySelector('footer');

makeHeader();
const btnHome = document.querySelector('.btn-home');
const btnMenu = document.querySelector('.btn-menu');
const btnContact = document.querySelector('.btn-contact');
const topButtonsContainer = document.querySelector('.top-btn-container');


function home(){
    makeBody(mainContainer);
    let creditOne = "Background image: https://patternico.com";
    let creditTwo = "Chef image: Alexas_Fotos from Pixabay";
    makeFooter(creditOne, creditTwo);
}

function menu(){
    makeMenu(mainContainer);
    let creditOne = "Background image: https://patternico.com";
    let creditTwo = "Food images from Pixabay";
    makeFooter(creditOne, creditTwo);
}

function contact(){
    makeContact(mainContainer);
    let creditOne = "Background image: https://patternico.com";
    let creditTwo = "Icons made by Cuputo (plane), Becris (house), Slidicon (phone) from www.flaticon.com ";
    makeFooter(creditOne, creditTwo);
}

function switchPages(e){

    while (mainContainer.firstChild) {
        mainContainer.firstChild.remove()
    } 
    
    while (mainFooter.firstChild) {
        mainFooter.firstChild.remove()
    } 


    if (e.target.className == "btn-home"){
        home()    
    } else if (e.target.className == "btn-menu"){

        menu()
    } else if (e.target.className == "btn-contact"){
        contact()
    } else{
    }
}

topButtonsContainer.addEventListener("click", switchPages);
home();





