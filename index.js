import { navbarComponent } from "./components/navbar.js"
import { crearCardsJSON } from "./components/customCard.js"
import { getData, setData, deleteData } from "./utils/localStorage.controller.js";


let navContainer = document.querySelector('header');
let cardContainer = document.getElementById('customCardHTML');
let categoria = document.getElementById('tipoDeProducto').value;

window.addEventListener('load', ()=>{
    fetch('../data/dataCards.json').then(res => res.json()).then(data =>{
        localStorage.setItem('productosLS',JSON.stringify(data))
      });
    navContainer.innerHTML = navbarComponent;
    cardContainer.innerHTML = crearCardsJSON(categoria);
    const arrayDeLasCards = getData();

    //cardContainer.innerHTML = crearCards(5);
    
    document.title = 'MiTienda';
})