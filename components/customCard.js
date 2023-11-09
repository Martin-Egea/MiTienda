
/* function NumeroRandom(max) {
    return Math.floor(Math.random() * max);
  }
 */
//let linkImagen = document.getElementById('linkIMG').value;

export const customCard = (title, img, desc, price, id, cat) => {
    return `
    <div class="cardCustom">
        <h3>${title}</h3>
        <img src="${img}" alt="imagen de producto">
        <div class="desc">
            <p>${desc}</p>
        </div>
        <div class="card-footer">
            <p class="price">$${price}</p>
            <div>
                <label>Cantidad:</label>
                <input type="number" name="" id="${cat+id}" min="0" max="10">
            </div>
            <button class="btn-add botones-agregar" id="${id}">Agregar</button>            
        </div>
    </div>
    `

} 
/* export function crearCards(cant){
    let arrayCards = customCard;
    for(let i = 0; i <= cant; i++){
        arrayCards += customCard 
    }
    return arrayCards;
} */
    
export function crearCardsJSON(tipoProducto){
    const items = JSON.parse(localStorage.getItem('productosLS'));
    let arrayCards = ""
    if(tipoProducto === ""){        
        items.forEach(e => {
            arrayCards += customCard(e.titulo, e.imagen, e.descripcion, e.precio, e.id, e.categoria)
        })
        return arrayCards;
    }
    else{
        const prod = items.filter(e => e.categoria == tipoProducto)
        prod.forEach(e => {
            arrayCards += customCard(e.titulo, e.imagen, e.descripcion, e.precio, e.id, e.categoria)
        })
        return arrayCards;
    }
}

export function crearCardsConAPI(){
    let arrayCards = ""
    fetch('https://fakestoreapi.com/products/category/electronics').then(res=>res.json()).then(json=>{
        console.log(json)
        const items = JSON.parse(json)
        items.forEach(e => {
            arrayCards += customCard(e.titulo, e.imagen, e.descripcion, e.precio)
        })
    })
    console.log(arrayCards)
    return arrayCards;
}

