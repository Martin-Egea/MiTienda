import { navbarComponent } from "./components/navbar.js"
import { crearCardsJSON, customCard } from "./components/customCard.js"
import { getData, setData, deleteData } from "./utils/localStorage.controller.js";


let navContainer = document.querySelector('header');
let cardContainer = document.getElementById('customCardHTML');
let categoria = document.getElementById('tipoDeProducto').value;

let botonesAgregar = document.querySelectorAll('.botones-agregar');

window.addEventListener('load', ()=>{
    fetch('../data/dataCards.json').then(res => res.json()).then(data =>{
        localStorage.setItem('productosLS',JSON.stringify(data))
      });
    navContainer.innerHTML = navbarComponent;
    cardContainer.innerHTML = crearCardsJSON(categoria);
    
    
    actualizarBotonesAgregar()
    const item = getData('carritoCompras')    
    botonesAgregar.forEach(boton => {
      boton.addEventListener('click', (e) =>{
          let idProducto = e.currentTarget.id
          const newItem = getData('productosLS').find(e => e.id == idProducto)                    
          item.push(newItem)          
          setData('carritoCompras', item)          
      })
    })

    document.title = 'MiTienda';
})

function actualizarBotonesAgregar(){
  botonesAgregar = document.querySelectorAll('.botones-agregar');
}

