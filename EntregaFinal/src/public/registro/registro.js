// require('dotenv').config
// const URL = process.env.URL

function validar(e) {
    e.preventDefault();
  
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  let nombre = document.querySelector("#nombre").value;
  let passCheck = document.querySelector("#passwordCheck").value;
  let error = document.querySelector('#error');
  
  let userInfo = {
      "nombre": nombre,
      "email": email,
      "password": pass
  }
    
    if (email != "" && pass != "") {
      if(pass === passCheck){
        try {
          fetch(`http://localhost:3019/api/users`, {
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
          //   .then((response) => response.json())
            .then((res) => {
              if(res.status == 400){
                window.location.replace('/api/registroFail')
              }else{
                window.location.replace('/api/login')
              }
              console.log(res.status)
            })        
            .catch((error) => console.log(error));
        } catch (error) {
          console.log(error);
        }
      } else {
        error.innerHTML = '<div class="error">Las contraseñas no coinciden</div>'
        return;
      }
      
    }else{
      error.innerHTML = '<div class="error">Debe completar todos los campos</div>'
    }
  }
  