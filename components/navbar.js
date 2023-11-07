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
                <a class="btn btn-danger ms-auto" href="../Login/login.html">Log out</a>
            </div>
        </div>
    </nav>`;