let socket = io();
let date = new Date();


const levantarProductos = () => {
  let title = document.querySelector("#title");
  let price = document.querySelector("#price");
  let image = document.querySelector("#image");
  let description = document.querySelector("#description");
  let stock = document.querySelector("#stock");

  let productos = {
    title: title.value,
    price: price.value,
    image: image.value,
    description: description.value,
    stock: stock.value,
  };

  fetch(`http://localhost:3019/api/productsEcommerce`, {
          method: "POST",
          redirect: 'follow',
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productos),      
        })      
    .then((res) => {
      if (res.ok) {
        res.json();
      } else {
        console.log("Todo bien");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("Error"));
};

const levantarMensajes = (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;  
  let mensaje = document.querySelector("#mensaje").value;

  let userInfo = {
    author: {
      email: email,
      nombre: nombre,
      apellido: apellido,      
    },
    text: mensaje,
  }; 

  document.querySelector("#mensajesView").innerHTML = `<div>
                                                          ${userInfo.author.email} dice: ${userInfo.text}
                                                        </div>`;
  fetch("http://localhost:3019/api/productosTest", {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => console.log(data, "respuesta de data"))
    .catch((error) => console.log(error));
};
function renderChat(data) {
  const html = data.map((elem, index) => {
      return (
          `<div>
              <strong style="color:blue;">${elem.author}</strong> ${date.getDate()}/${date.getMonth()+1}: ${elem.text}
          </div>`
      )
  }).join(" ");
  document.querySelector("#mensajesView").innerHTML = html;
}

socket.on('messages', (data) => {
  console.log('Desde el cliente recibiendo esta data: ' , data)
  renderChat(data);
})

function addMessage(e) {
const mensaje = {
    author: document.querySelector('#nombre').value,
    text: document.querySelector('#mensaje').value
};
socket.emit('new-message', mensaje);
return false;
}

const logOut = () => {
  fetch("http://localhost:3019/api/logout", { 
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json", 
    },
  })
    .then((res) => res.json())
    .then(window.location.replace("/api/login"))
    .catch((error) => {     
      console.log('Error desde Script logout',error)  
    });
}
function verProductos(){
  fetch("http://localhost:3019/api/productsEcommerce", {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(window.location.replace("/api/productsEcommerce"))
    
}
// console.log('removiendo cookie')
//   document.cookie = "user=; max-age=0";