const form = document.getElementById('login');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userEmail = document.getElementById('email').value;
    let userPass = document.getElementById('pass').value;

    fetch('../data/usersData.json').then(res => res.json()).then(users => {
        const usuario = users.find(e => e.email === userEmail && e.password === userPass)
        
        if(usuario){
            sessionStorage.setItem('usersData', JSON.stringify(usuario))
            console.log(usuario)
            window.location.href = 'http://127.0.0.1:5500/Home/home.html';
        }else{
            window.alert('no encontro el usuario!')
        }
    })

})