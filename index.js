import { navbarComponent } from "./components/navbar.js"
import { crearCards } from "./components/customCard.js"



let navContainer = document.querySelector('header');
let cardContainer = document.getElementById('customCardHTML');

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navbarComponent;
    cardContainer.innerHTML = crearCards(5);
    document.title = 'MiTienda';
})