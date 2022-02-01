const levantarProductos = () => {
    let title = document.querySelector('#title');
    let price = document.querySelector('#price');
    let thumbnail = document.querySelector('#thumbnail');
  
    fetch('http://localhost:3007/api/prods')
      .then(res => {
        if(res.ok){          
          res.json()}
          else{
          console.log('Todo bien')
          }
        })
      .then(data => console.log(data))
      .catch(error => console.log('Error'))
  }

const levantarMensajes = () => {

  let email = document.querySelector('#email');
  let nombre = document.querySelector('#nombre');
  let apellido = document.querySelector('#apellido');
  let edad = document.querySelector('#edad');
  let alias = document.querySelector('#alias');
  let avatar = document.querySelector('#avatar');
  let mensaje = document.querySelector('#mensaje');

  let userData = {
    author: {
      id: email,
      nombre: nombre,
      apellido: apellido ,
      edad: edad,
      alias: alias,
      avatar: avatar
      },
    text: mensaje
  }   
    
    fetch('http://localhost:3007/api/productosTest')
      .then(res => {
        if(res.ok){          
          res.json()}
          else{
          console.log('Todo bien')
          }
        })
      .then(data => console.log(data))
      .catch(error => console.log('Error'))
  }