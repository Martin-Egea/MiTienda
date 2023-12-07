import { navbarComponent } from "./components/navbar.js"
import { crearCardsJSON, customCard } from "./components/customCard.js"
import { getData, setData, deleteData } from "./utils/localStorage.controller.js";
import { customFooter } from "./components/footer.js";

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');
let cardContainer = document.getElementById('customCardHTML');
let categoria = document.getElementById('tipoDeProducto').value;

let botonesAgregar = document.querySelectorAll('.botones-agregar');
let inputDeProductos = document.querySelectorAll('.input-cant-productos');

window.addEventListener('load', ()=>{
    fetch('../data/dataCards.json').then(res => res.json()).then(data =>{
        localStorage.setItem('productosLS',JSON.stringify(data))
      });
    navContainer.innerHTML = navbarComponent;
    footerContainer.innerHTML = customFooter;
    cardContainer.innerHTML = crearCardsJSON(categoria);
        
    actualizarBotonesAgregar();
    actualizarInputCantidadProd();
    const item = getData('carritoCompras')    
    botonesAgregar.forEach(boton => {
      boton.addEventListener('click', (e) =>{
          let idProducto = e.currentTarget.id                  
          let cantProducto = 1;

          inputDeProductos.forEach(input =>{
            if(input.getAttribute('id') === idProducto){
              cantProducto = input.value
            }            
          });
          console.log('Input cantidad de productos: '+cantProducto)  

          const newItem = getData('productosLS').find(e => e.id == idProducto)
          newItem.cantidad = cantProducto;               
          item.push(newItem)          
          setData('carritoCompras', item)
                 
          Toastify({
            text: "Producto agregado al carrito!",
            duration: 3000,
            destination: "../CarritoCompras/carrito.html",
            newWindow: false,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

      })
    })

    document.title = 'MiTienda';
})

function actualizarBotonesAgregar(){
  botonesAgregar = document.querySelectorAll('.botones-agregar');
}
function actualizarInputCantidadProd(){
  inputDeProductos = document.querySelectorAll('.input-cant-productos');
}

