
function NumeroRandom(max) {
    return Math.floor(Math.random() * max);
  }

let linkImagen = document.getElementById('linkIMG').value;

const customCard = `
    <div class="cardCustom">
        <h3>Titulo</h3>
        <img src="${linkImagen}" alt="imagen de producto">
        <div class="desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum perspiciatis culpa fugit. Tempora cumque quaerat ipsum rem, debitis ex placeat, quae repellendus quia cum atque consectetur ut fugiat dicta?</p>
        </div>
        <div class="card-footer">
            <p class="price">${NumeroRandom(50000)}</p>
            <div>
                <label>Cantidad:</label>
                <input type="number" name="" id="" min="0" max="10">
            </div>
            <button class="btn-add">Agregar</button>            
        </div>
    </div>
    `
export function crearCards(cant){
    let arrayCards = customCard;
    for(let i = 0; i <= cant; i++){
        arrayCards += customCard 
    }
    return arrayCards;
}