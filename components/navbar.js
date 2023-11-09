const navElement = [
    {title:'Home', link:'../Home/home.html'},
    {title:'Componentes de PC', link:'../ComponentesPC/componentesPC.html'},
    {title:'Teléfonos', link:'../Telefonos/telefonos.html'},
    {title:'Accesorios', link:'../Accesorios/accesorios.html'},
    {title:'Notificaciones', link:'../Notificaciones/notificaciones.html'},
    
];


export const navbarComponent = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a href="#" class="navbar-grand"><img width="50" src="https://t4.ftcdn.net/jpg/05/11/40/43/240_F_511404377_HiSaHkQZ00nPFA0cnsqu1hVaobNpFAlD.jpg" alt=""></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav">
                    
                    ${
                        navElement.map(e =>{
                           return `
                           <li class="nav-item">
                           <a href="${e.link}" class="nav-link" >${e.title}</a>
                            </li>
                           ` 
                        }).join('')
                    }
                </ul>

                <a class="btn btn-secondary ms-auto mx-2" href="../CarritoCompras/carrito.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </a>
                <a class="btn btn-danger" href="../Login/login.html">Log out</a>
            </div>
        </div>
    </nav>`;