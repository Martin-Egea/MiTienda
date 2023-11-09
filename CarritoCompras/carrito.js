import { getData, setData} from "../utils/localStorage.controller.js";

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

function agregarProdTabla(){
    let listaProductos = "";
    const productosLS = JSON.parse(localStorage.getItem('productosLS'));
    productosLS.forEach(e => {
        listaProductos += prodCarrito(e.titulo, e.precio, 1, e.precio, e.id);
    });
    return listaProductos
}

window.addEventListener('load', ()=> {
    tablaProductos.innerHTML = agregarProdTabla()

    actualizarBotonesAgregar()
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (e) =>{
            let idProducto = e.currentTarget.id
            const items = getData('carritoCompras')
            const index = items.findIndex(e => e.id == idProducto)
            items.splice(index,1)
            setData('carritoCompras',items)
        })
      })
})

function actualizarBotonesAgregar(){
    botonesEliminar = document.querySelectorAll('.botones-eliminar');
  }
