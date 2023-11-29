import { getData, setData, deleteData} from "../utils/localStorage.controller.js";

const prodCarrito = (producto, precio, cantidad, subTotal, id)=>{
    return `
        <tr>
            <td>${producto}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${subTotal}</td>
            <td><button id="${id}" class="btn btn-danger botones-eliminar">Eliminar</button></td>
        </tr>
    `
}

let tablaProductos = document.getElementById('tablaProductos');
let botonesEliminar = document.querySelectorAll('.botones-eliminar');
let totalProductos = document.getElementById('totalCarrito');
let botonConfirmar = document.getElementById('btnConfirmar');

function agregarProdTabla(){
    let listaProductos = "";
    const productosLS = JSON.parse(localStorage.getItem('carritoCompras'));
    productosLS.forEach(e => {
        listaProductos += prodCarrito(e.titulo, e.precio, e.cantidad, (e.cantidad * e.precio), e.id);        
    });
    return listaProductos
}
function sumarTotalProductos(){
    let precioTotal = 0;
    const productosLS = JSON.parse(localStorage.getItem('carritoCompras'));
    productosLS.forEach(e => {
        precioTotal += parseInt(e.precio*e.cantidad);        
    });
    return precioTotal;
}

window.addEventListener('load', ()=> {
    tablaProductos.innerHTML = agregarProdTabla()
    totalProductos.innerHTML = sumarTotalProductos()

    actualizarBotonesAgregar()
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (e) =>{            
            let idProducto = e.currentTarget.id
            const items = getData('carritoCompras')
            const index = items.findIndex(e => e.id == idProducto)
            items.splice(index,1)
            setData('carritoCompras',items)
            location. reload()
        })
      })
    
      botonConfirmar.addEventListener('click', e =>{
        window.location.href='../Home/home.html';
        deleteData('carritoCompras');        
      })
})

function actualizarBotonesAgregar(){
    botonesEliminar = document.querySelectorAll('.botones-eliminar');
  }
