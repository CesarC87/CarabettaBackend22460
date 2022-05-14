
function validar(e) {
  e.preventDefault();

let nombre = document.querySelector("#username").value;
let pass = document.querySelector("#contraseña").value;
let error = document.querySelector('#error');

let userInfo = {
    'nombre': nombre,
    'pass': pass
}
  
  if (nombre != "" && pass != "") {
    try {
      fetch("http://localhost:3012/api", {
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
            window.location.replace('/api')
          }
        })        
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }else{
    error.innerHTML = '<div class="error">Debe completar todos los campos</div>'
  }
}
