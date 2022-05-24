// require('dotenv').config
// const URL = process.env.URL
function validar(e) {
  e.preventDefault();

let email = document.querySelector("#email").value;
let pass = document.querySelector("#password").value;
// let error = document.querySelector('#error');

let userInfo = {
    "email": email,
    "password": pass
}
  
  if (email && pass ) {
    try {
      fetch(`http://localhost:3019/api/login`, {
        method: "POST",
        redirect: 'follow',
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),      
      })                   
        .then((response) => response.json())
        .then((res) => {
          if(res.status = 200){
            console.log(res)
            localStorage.setItem('user', res.user)
            localStorage.setItem('token', res.token)
            window.location.replace('/api')
          }
        })        
        .catch((error) => console.log('No llego al 200 desde loginScript', error));
    } catch (error) {
      console.log(error);
    }
  }else{
    error.innerHTML = '<div class="error">Debe completar todos los campos</div>'
  }
}
